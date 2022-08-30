import { Footer } from "../components/Footer"
import { LampComponent } from "../components/LampComponent"
import { HomeProps } from "../types/HomeTypes"

export function Home(props:HomeProps) {
    
    const themeImgHandler = () =>{
        if(props.theme === "black"){
            return "https://i.imgur.com/FoCZ6th.png"
        }
        return "https://i.imgur.com/F8OXZdX.png"
    }
    const themeLampHandler = () =>{
        if(props.theme === "black"){
            return "off"
        }
        return "on"
    }

    return (
        <div id="coffe" className="container">
            <section  className="content grid grid-cols-1 md:grid-cols-2 w-full min-h-screen flex  items-center">
                <div className="justify-self-center z-10">
                <LampComponent theme={themeLampHandler()} />
                    <div className="max-w-md">
                        <div className=" mockup-code">
                            <pre data-prefix="$"><code>echo "Hello, im Ezequiel Martino"</code></pre>
                        </div>
                        <h1 className="text-5xl font-bold py-10">Im a full-stack web developer</h1>
                        <button className="btn btn-outline uppercase">Download my cv</button>
                    </div>
                </div>
                
                <div className="w-full z-10">
                    <img className="coffe-cup m-auto  " src={themeImgHandler()} alt="..." />
                </div>
                <svg className="absolute bottom-0 z-0 fill-secondary  w-screen"  viewBox="0 0 1600 595" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path></svg>
            </section>

            <section id="about" className="bg-base-300 grid grid-cols-1 md:grid-cols-2 w-full min-h-screen flex items-center bg-base-100">

                <div className="z-10 flex justify-center ">
                    <div className="w-4/6 h-4/6 ">
                        <img className="h-full w-full " src="https://i.imgur.com/sxS3v0F.png" alt="..." />
                    </div>
                </div>

                <p className="text-2xl w-3/4 m-auto z  ">                
                    I'm a passionate developer and student based in Buenos Aires, Argentina focused on creating digital experiences on the web.
                </p>
                <svg className="absolute z-0 svg-second fill-secondary  w-screen"  viewBox="0 0 1600 595" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path></svg>

            </section>
            <section id="portfolio" className="grid grid-cols-1 md:grid-cols-2 w-full min-h-auto mb-[10vh] mt-[10vh] flex items-center   w-full">
                <div className="flex justify-center items-center flex-col  text-2xl ">
                    <h2 className="w-3/4 my-3 text-4xl mb-8">Difficult</h2>
                    <p className="w-3/4 mb-4">
                        its a responsive e-commerce type application that has 6 views, built with ReactJs + Bootstrap, Kotlin + Spring, Mysql, Neo4J, Mongodb, Redis and Dockerized.
                    </p>
                    <div className="w-3/4 my-3">
                        <button className="btn gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="github-button" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                            Source Code
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center  md:order-last">
                    <div className="mockup-window border border-base-300 h-/6 w-5/6 ">
                        <img className="h-full w-full " src="https://i.imgur.com/WOPtyJ2.gif" alt="..." />
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 w-full min-h-auto mb-[10vh] flex items-center ">
                <div className="flex items-center justify-center order-last md:order-first">
                    <div className="mockup-phone">
                        <div className="camera" />
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                <img className="h-full w-full " src="https://i.imgur.com/tpn4YbZ.gif" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col  text-2xl">
                    <h2 className="w-3/4 my-3 text-4xl mb-8">RampApp</h2>
                    <p className="w-3/4 my-3 mb-4">
                        It's a mobile parking application, built with React Native + Paper, Kotlin + Spring, Mysql.
                    </p>
                    <div className="w-3/4 my-3">
                        <button className="btn gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="github-button" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                            Source Code
                        </button>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 w-full min-h-auto mb-[20vh] flex items-center">
                <div className="flex justify-center items-center flex-col  text-2xl ">
                    <h2 className="w-3/4 my-3 text-4xl mb-8">iNF-dsbot</h2>
                    <p className="w-3/4 mb-4">
                        It's a discord bot made with java, discord4J and uses youtubeApi that can reproduce music and has a ton of commands.
                    </p>
                    <div className="w-3/4 my-3">
                        <button className="btn gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="github-button" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                            Source Code
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center ">
                    <img className="h-3/6 w-4/6" src="https://discord4j.com/logo.svg" alt="..." />
                </div>
            </section>
            <div className="contact flex flex-col justify-around">
            <section id="contact" className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 w-full  flex items-center ">
                <div className="flex justify-center m-auto flex-col">
                    <h1 className="text-3xl py-5">Let's get in touch</h1>
                    <h5 className="text-xl py-1">Email</h5>
                    <p className="py-2">ezequielmartino1999@gmail.com</p>
                    <h5 className="text-xl py-1">Telephone</h5>
                    <p className="py-2">+54 11-3771-0208</p>
                    <h5 className="text-xl py-1">Address</h5>
                    <p className="py-2">Jose Hernandez 3964 , Villa Ballester, Buenos Aires, Argentina</p>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <div className="relative z-0 w-4/6 my-3">
                        <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-4/6 my-3">
                        <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-4/6 my-3">
                        <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                    </div>
                    <div className="relative z-0 w-4/6 my-3">
                        <textarea id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                    </div>
                    <div className="w-4/6 my-4">
                        <button className="btn gap-2 w-2/6 ">
                            Send
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
            </div>
        </div>)
}