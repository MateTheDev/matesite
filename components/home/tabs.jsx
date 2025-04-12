import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

function Tabs() {
    return (
        <div className="tabs-container grid place-items-center my-[48px]">
            <TabGroup className="flex-row justify-center items-center text-center w-full">
                <TabList className="flex items-center text-center justify-center">
                    <div className="bg-panels border-2 border-panel-border p-[12px] mb-[20px] rounded-[12px]">
                        <Tab className="tabButton data-[selected]:text-secondary data-[selected]:bg-panel-in-panel rounded-[9px] p-[10px] data-[hover]:text-primary focus:border-0 transition ease-in-out duration-300">About me</Tab>
                        <Tab className="tabButton data-[selected]:text-secondary data-[selected]:bg-panel-in-panel rounded-[9px] p-[10px] data-[hover]:text-primary focus:border-0 transition ease-in-out duration-300">Projects</Tab>
                        <Tab className="tabButton data-[selected]:text-secondary data-[selected]:bg-panel-in-panel rounded-[9px] p-[10px] data-[hover]:text-primary focus:border-0 transition ease-in-out duration-300">Services</Tab>
                    </div>
                </TabList>
                <TabPanels>
                    <TabPanel className="flex justify-center items-center">
                        <div className="card-container w-full md:flex gap-x-[48px] gap-y-[12px] flex-wrap justify-center">
                            <div className="card flex-1 max-w-[400px]">
                                <h2 className="mt-[48px] mb-[12px]">Introduction</h2>
                                <p className='text-justify mx-[22px]'>I am an aspiring software and web developer based in Budapest, Hungary. Since 2021, I have been learning various programming languages and I have worked on quite a few of my personal projects, like the site you are seeing right now. I am currently studying in NJIT.</p>
                            </div>
                            <div className="card max-w-[400px] flex-1 grid place-items-center">
                                <h2 className="mt-[48px] mb-[12px]">Skills</h2>
                                <table className='min-w-74'>
                                        <tr className='h-10'>
                                            <td><svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-html size-[30px] stroke-primary"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 16v-8l2 5l2 -5v8" /><path d="M1 16v-8" /><path d="M5 8v8" /><path d="M1 12h4" /><path d="M7 8h4" /><path d="M9 8v8" /><path d="M20 8v8h3" /></svg></td>
                                            <td className='text-left'>HTML</td>
                                            <td className="level text-right">Advanced</td>
                                        </tr>
                                        <tr className='h-10'>
                                            <td><svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-css3 size-[30px] stroke-primary"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg></td>
                                            <td className='text-left'>CSS</td>
                                            <td className="level text-right">Advanced</td>
                                        </tr>
                                        <tr className='h-10'>
                                            <td><svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-python size-[30px] stroke-primary"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" /><path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" /><path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" /><path d="M11 6l0 .01" /><path d="M13 18l0 .01" /></svg></td>
                                            <td className=' text-left'>Python</td>
                                            <td className="level text-right">Intermediate</td>
                                        </tr>
                                        <tr className='h-10'>
                                            <td><svg className='size-[30px]' fill="#008080" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Lua icon</title><path d="M.38 10.377l-.272-.037c-.048.344-.082.695-.101 1.041l.275.016c.018-.34.051-.682.098-1.02zM4.136 3.289l-.184-.205c-.258.232-.509.48-.746.734l.202.188c.231-.248.476-.49.728-.717zM5.769 2.059l-.146-.235c-.296.186-.586.385-.863.594l.166.219c.27-.203.554-.399.843-.578zM1.824 18.369c.185.297.384.586.593.863l.22-.164c-.205-.271-.399-.555-.58-.844l-.233.145zM1.127 16.402l-.255.104c.129.318.274.635.431.943l.005.01.245-.125-.005-.01c-.153-.301-.295-.611-.421-.922zM.298 9.309l.269.063c.076-.332.168-.664.272-.986l-.261-.087c-.108.332-.202.672-.28 1.01zM.274 12.42l-.275.01c.012.348.04.699.083 1.043l.273-.033c-.042-.336-.069-.68-.081-1.02zM.256 14.506c.073.34.162.682.264 1.014l.263-.08c-.1-.326-.187-.658-.258-.99l-.269.056zM11.573.275L11.563 0c-.348.012-.699.039-1.044.082l.034.273c.338-.041.68-.068 1.02-.08zM23.221 8.566c.1.326.186.66.256.992l.27-.059c-.072-.34-.16-.682-.262-1.014l-.264.081zM17.621 1.389c-.309-.164-.627-.314-.947-.449l-.107.252c.314.133.625.281.926.439l.128-.242zM15.693.572c-.332-.105-.67-.199-1.01-.277l-.063.268c.332.076.664.168.988.273l.085-.264zM6.674 1.545c.298-.15.606-.291.916-.418L7.486.873c-.317.127-.632.272-.937.428l-.015.008.125.244.015-.008zM23.727 11.588l.275-.01a11.797 11.797 0 0 0-.082-1.045l-.273.033c.041.338.068.682.08 1.022zM13.654.105c-.346-.047-.696-.08-1.043-.098l-.014.273c.339.018.683.051 1.019.098l.038-.273zM9.544.527l-.058-.27c-.34.072-.681.16-1.014.264l.081.262c.325-.099.659-.185.991-.256zM1.921 5.469l.231.15c.185-.285.384-.566.592-.834l-.217-.17c-.213.276-.417.563-.606.854zM.943 7.318l.253.107c.132-.313.28-.625.439-.924l-.243-.128c-.163.307-.314.625-.449.945zM18.223 21.943l.145.234c.295-.186.586-.385.863-.594l-.164-.219c-.272.204-.557.4-.844.579zM21.248 19.219l.217.17c.215-.273.418-.561.607-.854l-.23-.148c-.186.285-.385.564-.594.832zM19.855 20.715l.184.203c.258-.23.51-.479.746-.732l-.201-.188c-.23.248-.477.488-.729.717zM22.359 17.504l.244.129c.162-.307.314-.625.449-.945l-.254-.107a11.27 11.27 0 0 1-.439.923zM23.617 13.629l.273.039c.049-.346.082-.695.102-1.043l-.275-.014c-.018.338-.051.682-.1 1.018zM23.156 15.621l.264.086c.107-.332.201-.67.279-1.01l-.268-.063c-.077.333-.169.665-.275.987zM22.453 6.672c.154.303.297.617.424.932l.256-.104c-.131-.322-.277-.643-.436-.953l-.244.125zM8.296 23.418c.331.107.67.201 1.009.279l.062-.268c-.331-.076-.663-.168-.986-.273l-.085.262zM10.335 23.889c.345.049.696.082 1.043.102l.014-.275c-.339-.018-.682-.051-1.019-.098l-.038.271zM17.326 22.449c-.303.154-.613.297-.926.424l.104.256c.318-.131.639-.275.947-.434l.004-.002-.123-.246-.006.002zM4.613 21.467c.274.213.562.418.854.605l.149-.23c-.285-.184-.565-.385-.833-.592l-.17.217zM12.417 23.725l.009.275c.348-.014.699-.041 1.045-.084l-.035-.271c-.336.041-.68.068-1.019.08zM6.37 22.604c.307.162.625.314.946.449l.107-.254c-.313-.133-.624-.279-.924-.439l-.129.244zM3.083 20.041c.233.258.48.51.734.746l.188-.201c-.249-.23-.49-.477-.717-.729l-.205.184zM14.445 23.475l.059.27c.34-.074.68-.162 1.014-.266l-.082-.262c-.325.099-.659.185-.991.258zM21.18.129A2.689 2.689 0 1 0 21.18 5.507 2.689 2.689 0 1 0 21.18.129zM15.324 15.447c0 .471.314.66.852.66.67 0 1.297-.396 1.297-1.016v-.645c-.23.107-.379.141-1.107.24-.735.109-1.042.306-1.042.761zM12 2.818c-5.07 0-9.18 4.109-9.18 9.18 0 5.068 4.11 9.18 9.18 9.18 5.07 0 9.18-4.111 9.18-9.18 0-5.07-4.11-9.18-9.18-9.18zm-2.487 13.77H5.771v-6.023h.769v5.346h2.974v.677zm4.13 0h-.619v-.67c-.405.57-.811.793-1.446.793-.843 0-1.38-.463-1.38-1.182v-3.271h.686v3c0 .52.347.85.893.85.719 0 1.181-.578 1.181-1.461v-2.389h.686v4.33zm-.53-8.393c0-1.484 1.205-2.689 2.689-2.689s2.688 1.205 2.688 2.689-1.203 2.688-2.688 2.688-2.689-1.203-2.689-2.688zm5.567 7.856v.52c-.223.059-.33.074-.471.074-.34 0-.637-.238-.711-.57-.381.406-.918.637-1.471.637-.877 0-1.422-.463-1.422-1.248 0-.527.256-.916.76-1.123.266-.107.414-.141 1.389-.264.545-.066.719-.191.719-.48v-.182c0-.412-.348-.645-.967-.645-.645 0-.957.24-1.016.77h-.693c.041-1 .686-1.404 1.734-1.404 1.066 0 1.627.412 1.627 1.182v2.412c0 .215.133.338.373.338.041-.002.074-.002.149-.017z"></path></g></svg></td>
                                            <td className=' text-left'>Lua</td>
                                            <td className="level text-right">Intermediate</td>
                                        </tr>
                                        <tr className='h-10'>
                                            <td><svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-rust size-[30px] stroke-primary"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.139 3.463c.473 -1.95 3.249 -1.95 3.722 0a1.916 1.916 0 0 0 2.859 1.185c1.714 -1.045 3.678 .918 2.633 2.633a1.916 1.916 0 0 0 1.184 2.858c1.95 .473 1.95 3.249 0 3.722a1.916 1.916 0 0 0 -1.185 2.859c1.045 1.714 -.918 3.678 -2.633 2.633a1.916 1.916 0 0 0 -2.858 1.184c-.473 1.95 -3.249 1.95 -3.722 0a1.916 1.916 0 0 0 -2.859 -1.185c-1.714 1.045 -3.678 -.918 -2.633 -2.633a1.916 1.916 0 0 0 -1.184 -2.858c-1.95 -.473 -1.95 -3.249 0 -3.722a1.916 1.916 0 0 0 1.185 -2.859c-1.045 -1.714 .918 -3.678 2.633 -2.633a1.914 1.914 0 0 0 2.858 -1.184z" /><path d="M8 12h6a2 2 0 1 0 0 -4h-6v8v-4z" /><path d="M19 16h-2a2 2 0 0 1 -2 -2a2 2 0 0 0 -2 -2h-1" /><path d="M9 8h-4" /><path d="M5 16h4" /></svg></td>
                                            <td className='text-left'>Rust</td>
                                            <td className="level text-right">Beginner</td>
                                        </tr>
                                        <tr className='h-10'>
                                            <td><svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-c-sharp size-[30px] stroke-primary"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" /><path d="M16 7l-1 10" /><path d="M20 7l-1 10" /><path d="M14 10h7.5" /><path d="M21 14h-7.5" /></svg></td>
                                            <td className='text-left'>C#</td>
                                            <td className="level text-right">Beginner</td>
                                        </tr>
                                </table>
                            </div>
                            <div className="break h-0"></div>
                            <div className="card w-full">
                                <h2 className="mt-[48px] mb-[12px]">Notable Projects</h2>
                                <p className='text-center mx-[22px] mb-[12px]'>These projects are just examples of the many others I have made. For other projects, check out the <b>Projects</b> tab.</p>
                                <div className="projects-preview gap-3 md:flex justify-center w-full">
                                    <div className="project-preview grid place-items-center md:flex gap-10 m-[12px] p-6 border-2 border-panel-border bg-panels rounded-[12px]">
                                        <img className='flex-1 object-contain object-center w-[250px] max-w-[250px]' src="/assets/car.jpg" alt=""></img>
                                        <div className="side max-w-[250px]">
                                            <h3 className='mb-[12px] text-center md:text-left font-bold md:text-[20px]'>PassGen</h3>
                                            <p className='w-fit text-center md:text-left mb-[12px]'>A pseudo random password generator, that creates a password from an entered phrase.</p>
                                            <p className='w-full md:w-fit text-center md:text-left'>Released: 2024.02.22.</p>
                                        </div>
                                    </div>
                                    <div className="project-preview grid place-items-center md:flex gap-10 m-[12px] p-6 border-2 border-panel-border bg-panels rounded-[12px]">
                                        <img className='flex-1 object-contain object-center w-[250px] max-w-[250px]' src="/assets/car.jpg" alt=""></img>
                                        <div className="side max-w-[250px]">
                                            <h3 className='mb-[12px] text-center md:text-left font-bold md:text-[20px]'>PassGen</h3>
                                            <p className='w-fit text-center md:text-left mb-[12px]'>A pseudo random password generator, that creates a password from an entered phrase.</p>
                                            <p className='w-full md:w-fit text-center md:text-left'>Released: 2024.02.22.</p>
                                        </div>
                                    </div>
                                    <div className="project-preview grid place-items-center md:flex gap-10 m-[12px] p-6 border-2 border-panel-border bg-panels rounded-[12px]">
                                        <img className='flex-1 object-contain object-center w-[250px] max-w-[250px]' src="/assets/car.jpg" alt=""></img>
                                        <div className="side max-w-[250px]">
                                            <h3 className='mb-[12px] text-center md:text-left font-bold md:text-[20px]'>PassGen</h3>
                                            <p className='w-fit text-center md:text-left mb-[12px]'>A pseudo random password generator, that creates a password from an entered phrase.</p>
                                            <p className='w-full md:w-fit text-center md:text-left'>Released: 2024.02.22.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>Projects - To be added</TabPanel>
                    <TabPanel>Services - To be added</TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}

export default Tabs