import { Link } from "react-router"

function Footer() {
    return (
        <footer className="flex-col items-center justify-center bg-panels border-t-4 border-panel-border w-full py-[20px]">
            <h1 className="logo font-logo font-bold text-[26px] md:text-[30px] tracking-[0.02em] text-center pb-7"><Link to="/">MateTheDev</Link></h1>
            <div className="right-icons">
                <div className="icons">
                <ul className="flex justify-center items-center pb-5 gap-3">
                    <li className="text-center">
                        <a href="https://github.com/MateTheDev" target="_blank" rel="noopener noreferrer"><svg  xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github hover:stroke-primary transition ease-in-out duration-300 h-9"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></a>   
                    </li>
                    <li className="text-center">
                        <a href="https://instagram.com/matethedev" target="_blank" rel="noopener noreferrer"><svg  xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram hover:stroke-primary transition ease-in-out duration-300 h-9"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg></a>
                    </li>
                    <li className="text-center">
                        <a href="https://tiktok.com/@matethedev" target="_blank" rel="noopener noreferrer"><svg  xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok hover:stroke-primary transition ease-in-out duration-300 h-9"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg></a>
                    </li>
                </ul>
            </div>
            </div>
            <p className="text-center text-[14px]">Copyright @ MateTheDev. All rights reserved.</p>
        </footer>
    )
}

export default Footer