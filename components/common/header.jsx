import { Link } from "react-router"

function Header() {
    return (
        <>
            <div className="navbar bg-panels md:border-panel-border md:border-b-4 py-[10px] md:py-[12px] px-[36px] flex flex-row items-center justify-center md:justify-between">
                <h1 className="logo font-logo font-bold text-[28px] md:text-[38px] tracking-[0.02em]"><Link to="/">MateTheDev</Link></h1>
                <nav className="header-buttons hidden md:block">
                    <ul className="flex flex-row gap-[24px]">
                        <li className="hover:text-primary transition ease-in-out duration-300 text-[20px]"><Link to="/projects">Projects</Link></li>
                        <li className="hover:text-primary transition ease-in-out duration-300 text-[20px]"><Link to="/about">About me</Link></li>
                        <li className="hover:text-primary transition ease-in-out duration-300 text-[20px]"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="navbar-mobile bg-panel-border flex flex-row items-center justify-center py-[5px] md:hidden">
                <nav className="header-buttons md:hidden">
                    <ul className="flex flex-row gap-[24px]">
                        <li className="hover:text-primary transition ease-in-out duration-300 text-[16px]"><Link to="/projects">Projects</Link></li>
                        <li className="hover:text-primary transition ease-in-out duration-300 text-[16px]"><Link to="/about">About me</Link></li>
                        <li className="hover:text-primary transition ease-in-out duration-300 text-[16px]"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header