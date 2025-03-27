import Panel from "../common/overlaypanel"

function Content() {
    return (
        <div className="content grid place-content-center w-full">
            <h3 className="text-3xl text-white text-center z-5 font-display underline underline-offset-8">Introduction</h3>
            <div className="card-container flex flex-col z-5 gap-20 items-center justify-center md:gap-20 md:flex-row  lg:gap-50 mt-15">
                <Panel color="overlay" width="70" height="200">
                    <h4 className="text-[22px] font-bold text-white text-center font-display mb-6">About me</h4>
                    <p className="text-justify text-white font-display">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quia odit non. Odit possimus quibusdam laborum saepe blanditiis amet necessitatibus impedit sint sunt temporibus, reprehenderit corrupti distinctio, ut, asperiores voluptatem!</p>
                </Panel>
                <Panel color="overlay" width="70" height="200">
                    <h4 className="text-[22px] font-bold text-white text-center font-display mb-6">About me</h4>
                    <p className="text-justify text-white font-display">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quia odit non. Odit possimus quibusdam laborum saepe blanditiis amet necessitatibus impedit sint sunt temporibus, reprehenderit corrupti distinctio, ut, asperiores voluptatem!</p>
                </Panel>
            </div>
        </div>
    )
}

export default Content