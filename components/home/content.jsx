function Content() {
    return (
        <div className="content grid place-content-center w-full">
            <h3 className="text-3xl text-white text-center z-5 font-display underline underline-offset-8">Introduction</h3>
            <div className="card-container flex flex-col z-5 gap-15 md:gap-20 md:flex-row lg:gap-50 mt-15">
                <div className="bg-overlay w-70 h-auto z-4 relative
                before:bg-transparent before:backdrop-blur-[100px] before:w-12/10 before:h-12/10 before:-z-1 before:absolute before:-top-1/10 before:-left-1/10 before:rounded-md">
                    <h4 className="text-[22px] font-bold text-white text-center font-display mb-6">About me</h4>
                    <p className="text-justify text-white font-display">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quia odit non. Odit possimus quibusdam laborum saepe blanditiis amet necessitatibus impedit sint sunt temporibus, reprehenderit corrupti distinctio, ut, asperiores voluptatem!</p>
                </div>
            </div>
        </div>
    )
}

export default Content