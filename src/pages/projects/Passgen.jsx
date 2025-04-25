import CryptoJS from "crypto-js";
import { useState } from "react";

function generatePassword( inputString, charList = ['!', '@', '#', '$', '%', '^', '§', '+', '/', '=', '(', ')', '˝', '¨', '¸', '|', '€', '÷', '×', '[', ']', 'ß', '¤', '<', '>', '{', '}', ';', '*', '?', ',', '.', ':', '-', '_']) {

    const hashed = CryptoJS.SHA256(inputString).toString(CryptoJS.enc.Hex);
    const encoded = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(hashed));

    let result = "";
    const hashIndices = Array.from(hashed.slice(0, encoded.length)).map(c => parseInt(c, 16) % charList.length);
    
    for (let i = 0; i < encoded.length; i++) {
        result += encoded[i];
        if ((i + 1) % 4 === 0) {
            result += charList[hashIndices[i % hashIndices.length]];
        }
    }

    return result.slice(0, 20);
}

function PassGen() {
    const [inputStr, setInputStr] = useState('')
    const [customCharList, setCustomCharList] = useState('')
    const [output, setOutput] = useState('')

    const [charInput, setCharInput] = useState('');
    const [charList, setCharList] = useState([]);

    const addChar = () => {
    if (charInput.length === 1) {
        setCharList([...charList, charInput]);
        setCharInput('');
    }
    };

    const removeChar = (index) => {
    setCharList(charList.filter((_, i) => i !== index));
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const result = generatePassword(inputStr, customCharList || undefined);
        setOutput(result)
    }

    return ( 
        <>
        <main className="grid place-items-center m-9">
            <h2>PassGen</h2>
            <p className="mt-3">A customizable pseudorandom password generator designed for those who forget easily.</p>
            <div className="passgen m-8 bg-panels rounded-[12px] w-100 p-3">
                <form onSubmit={handleSubmit} className="grid place-items-center gap-5">
                    <label className="w-full grid gap-2">
                        Unique Phrase
                        <input className="w-full" type="text" value={inputStr} onChange={(e) => setInputStr(e.target.value)} required />
                    </label>
                    <br />
                    <label className="w-full grid gap-2">
                        Special Characters
                        <input className="w-full" type="text" value={charInput} onChange={(e) => setCharInput(e.target.value)} />
                    </label>
                    <ul>
                    {charList.map((char, i) => (
                        <li key={i}>
                        {char} <button onClick={() => removeChar(i)}>x</button>
                        </li>
                    ))}
                    </ul>
                    <button className="bg-panel-in-panel hover:bg-white/5 p-3 rounded-[12px]" type="submit">Generate Password</button>
                </form>
                <p className="w-full text-center mt-3"><span className="">{output}</span></p>
            </div>
        </main>
        </>
    )
}

export default PassGen