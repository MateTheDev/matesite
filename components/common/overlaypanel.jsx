function Panel({color = "overlay", width, height, children}) {
    return (
            <div className={`bg-${color} w-${width} h-${height}  z-4 relative before:bg-transparent before:backdrop-blur-[100px] before:w-12/10 before:h-12/10 before:-z-1 before:absolute before:-top-1/10 before:-left-1/10 before:rounded-md`}>
                {children}
            </div>
    )
}

// md:w-${mdWidth} md:h-${mdHeight} lg:w-${lgWidth} lg:h-${lgHeight}
// , mdWidth = width, mdHeight = height, lgWidth = width, lgHeight = height

export default Panel