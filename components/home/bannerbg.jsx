function BannerBg() {
    return (
        /* blur-[100px] */
        <div className="bannerBg relative inset-0 z-4 blur-xl">
            <span className=' bg-radial rounded-full from-banner-gradient-1 to-transparent absolute md:h-500 md:w-700 md:-right-40/10 md:-top-60 h-500 w-500 -left-100 top-10' />
            <span className=' bg-radial rounded-full from-banner-gradient-2 to-transparent absolute md:h-500 md:w-700 md:-right-3/10  md:-bottom-300 h-500 w-500 -right-300 -bottom-30' />
            <span className=' bg-radial rounded-full from-banner-gradient-3 to-transparent absolute md:h-500 md:w-700 md:-right-24/10 md:-bottom-50 h-500 w-500 -right-1 -bottom-300' />
        </div>
    )
}

export default BannerBg