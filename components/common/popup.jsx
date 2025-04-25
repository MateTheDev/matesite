import { X } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { FaDiscord, FaMicrosoft } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { useRef } from 'react';
import { useNavigate } from 'react-router';



function PopUp({onClose}) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose()
        }
    }

    const navigate = useNavigate();

    const redirectDiscord = () => {
        navigate('/login/discord');
    };

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black/30 backdrop-blur-lg flex justify-center items-center">
            <div className='mt-10 flex flex-col gap-0 bg-rich-black rounded-xl p-5 shadow-2xl shadow-rich-black'>
                <button onClick={onClose} className='place-self-end cursor-pointer '><X size={30} className='hover:text-parchment/80 active:text-parchment/60 transition duration-300'/></button>
                <div className='flex flex-col gap-5'>
                    <div className="title">
                        <h1 className='text-center mb-0.5'>Log in</h1>
                        <p className='text-center'>Please log in for a better experience on the site!</p>
                    </div>
                    <div className="login-buttons flex flex-col justify-center items-center p-3 gap-5 w-full">
                        <button onClick={redirectDiscord} className='discord-login cursor-pointer bg-parchment hover:bg-parchment/80 active:bg-parchment/60 transition duration-300 rounded-md w-full h-10 relative flex items-center px-3 border-2 border-black/15'><FaDiscord size={24} color='#5865F2' /><span className='absolute left-5/10 top-5/10 -translate-x-5/10 -translate-y-5/10 w-full font-bold text-rich-black'>Log in with Discord</span></button>
                        <button className='google-login cursor-pointer bg-parchment hover:bg-parchment/80 active:bg-parchment/60 transition duration-300 rounded-md w-full h-10 relative flex items-center px-3 border-2 border-black/15'><FcGoogle size={24} /><span className='absolute left-5/10 top-5/10 -translate-x-5/10 -translate-y-5/10 w-full font-bold text-rich-black'>Log in with Google</span></button>
                        <button className='microsoft-login cursor-pointer bg-parchment hover:bg-parchment/80 active:bg-parchment/60 transition duration-300 rounded-md w-full h-10 relative flex items-center px-3 border-2 border-black/15'><FaMicrosoft size={24} color='#0178D6' /><span className='absolute left-5/10 top-5/10 -translate-x-5/10 -translate-y-5/10 w-full font-bold text-rich-black'>Log in with Microsoft</span></button>
                        <button className='discord-login cursor-pointer bg-parchment hover:bg-parchment/80 active:bg-parchment/60 transition duration-300 rounded-md w-full h-10 relative flex items-center px-3 border-2 border-black/15'><IoLogoGithub size={24} color='black' /><span className='absolute left-5/10 top-5/10 -translate-x-5/10 -translate-y-5/10 w-full font-bold text-rich-black'>Log in with Github</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp