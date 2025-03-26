function BannerBg() {
    return (
        <div className="bannerBg relative inset-0 blur-[100px] z-4">
            <span className='bg-radial rounded-full from-banner-gradient-1 to-transparent absolute h-500 w-700 -right-40/10 -top-60' />
            <span className='bg-radial rounded-full from-banner-gradient-2 to-transparent absolute h-500 w-700 -right-3/10 -bottom-300' />
            <span className='bg-radial rounded-full from-banner-gradient-3 to-transparent absolute h-500 w-700 -right-24/10 -bottom-50' />
        </div>
    )
}

export default BannerBg