import '../../src/index.css'
import BannerBg from './bannerbg'

function WelcomeBanner() {
    return (
        <div className="bannerStyled bg-banner-background h-110 
        before:z-5 before:absolute before:w-full before:h-full before:bg-transparent before:backdrop-blur-[50px]
        after:z-4 after:absolute after:w-full after:h-20/10 after:bg-overlay">
            <div className="banner grid h-96 w-full place-content-center relative">
                <BannerBg />
                <h1 className='text-5xl xl:text-6xl text-center text-white z-5 font-display font-bold lg:font-normal'>MateTheDev</h1>
                <h2 className='text-1xl xl:text-2xl  text-center text-white z-5 font-display pt-4'>Web and Software Developer since 2021.</h2>
            </div>
        </div>
    )
}

export default WelcomeBanner