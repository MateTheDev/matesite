import { Link } from "react-router"

function Header() {
    return (
        <div className="navbar bg-panels border-panel-border border-b-4 p-[12px] px-[36px] flex flex-row items-center justify-between">
            <h1 className="logo font-logo font-bold text-[38px] tracking-[0.02em]"><Link to="/">MateTheDev</Link></h1>
            <nav className="buttons">
                <ul className="flex flex-row gap-[24px]">
                    <li className="hover:text-primary transition ease-in-out duration-300 text-[20px] hidden md:block"><Link to="/projects">Projects</Link></li>
                    <li className="hover:text-primary transition ease-in-out duration-300 text-[20px] hidden md:block"><Link to="/about">About me</Link></li>
                    <li className="hover:text-primary transition ease-in-out duration-300 text-[20px] hidden md:block"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header