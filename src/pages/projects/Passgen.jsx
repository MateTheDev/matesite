import CryptoJS from "crypto-js";
import Switch from "../../../components/common/switch";

function generatePassword(inputString, charList = ['!', '@', '#', '$', '%', '^', '§', '+', '/', '=', '(', ')', '˝', '¨', '¸', '|', '€', '÷', '×', '[', ']', 'ß', '¤', '<', '>', '{', '}', ';', '*', '?', ',', '.', ':', '-', '_']) {
    // Hash using CryptoJS
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
    return ( 
        <>
        <main className="grid place-items-center m-9">
            <h2>PassGen</h2>
            <p className="mt-3">A customizable pseudorandom password generator designed for those who forget easily.</p>
            <div className="passgen">
            </div>
        </main>
        </>
    )
}

export default PassGen