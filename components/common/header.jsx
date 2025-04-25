import { useState } from 'react';
import PopUp from './popup';
import { AnimatePresence, motion } from "framer-motion";


function Header() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className="header bg-rich-black text-parchment flex justify-evenly items-center h-12">
            <div className="logo flex-1/3 tracking-tighter font-logo text-3xl text-center">MateTheDev</div>
            <div className="buttons flex-1/3">
                <ul className="flex gap-10 tracking-wide justify-center">
                    <li className="cursor-pointer underline-anim"></li>
                    <li className="cursor-pointer underline-anim">Projects</li>
                    <li className="cursor-pointer underline-anim">Contact</li>
                    <li className="cursor-pointer underline-anim">Major Projects</li>
                </ul>
            </div>
            <div className="login flex-1/3 text-center tracking-wide">
                <button onClick={() => setShowModal(true)} className="bg-dark-cyan text-rich-black rounded-xl px-2 py-0.5 hover:bg-dark-cyan/85 active:bg-dark-cyan/70">Log in</button>
            </div>
        </div>
        <AnimatePresence>
            {showModal && 
            <motion.div key="modal" initial={{ opacity: 0 }}animate={{ opacity: 1 }}exit={{ opacity: 0 }}transition={{ duration: 0.3 }}>
                <PopUp onClose={() => setShowModal(false)} />
            </motion.div>}
        </AnimatePresence>
        </>
    )
}

export default Header;