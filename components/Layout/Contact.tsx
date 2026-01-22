import Image from "next/image"


function Contact() {
    return (
        <>
            <div className="font-grotesk  w-full h-screen relative flex items-center justify-center">
                <div className="w-6xl h-[600px] border-4 border-foreground flex divide-x-3 divide-foreground shadow-neo">
                    <div className="relative w-1/2 h-full bg-background">

                        <div className="absolute z-40 top-[120px] left-[-150px]">
                            <div className="flex gap-3 pl-8 items-center h-[50px] shadow-neo w-[620px] bg-[#E96EBE]  border-3 border-b-3 border-foreground ">
                                <div className="h-6 w-6  rounded-full bg-[#E85961]  border-4 border-foreground "></div>
                                <div className="h-6 w-6  rounded-full bg-[#E9E756] border-4 border-foreground"></div>
                                <div className="h-6 w-6  rounded-full bg-[#62DA7B] border-4 border-foreground"></div>
                            </div>
                            <div className="p-4 font-press-start-2p flex-col h-[270px] w-[620px]  bg-[#FCF3CB]  shadow-neo border-3 border-t-0 border-foreground ">
                               <h1 className="my-6">Building something bold?</h1>
                               <p>Let’s talk. Your feedback helps us shape the future of Neo-Brutal UI.
                                Share feedback, report issues, or just say hello.
                               </p>
                            </div>
                        </div>
                        <div className="absolute top-[120px] left-[-150px] rotate-x-4 -rotate-y-4 rotate-z-7">
                            <div className="flex gap-3 pl-8 items-center h-[50px] w-[620px] bg-[#F7E901] shadow-neo   border-3 border-b-3 border-foreground ">
                                <div className="h-6 w-6  rounded-full bg-[#E85961]  border-4 border-foreground "></div>
                                <div className="h-6 w-6  rounded-full bg-[#E9E756] border-4 border-foreground"></div>
                                <div className="h-6 w-6  rounded-full bg-[#62DA7B] border-4 border-foreground"></div>
                            </div>
                            <div className="h-[270px] w-[620px] bg-[#FCF3CB]  shadow-neo border-3 border-t-0 border-foreground shadow-neo">
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center flex-col">
                        <h1 className="text-4xl font-extrabold mb-4 text-[#1ac90a] border-foreground inline-block">Contact Us</h1>
                        <form className="flex flex-col gap-4" action="">
                            <label htmlFor="name" className="after:content-['*'] after:ml-0.5 after:text-red-500 ">Name</label>
                            <input type="text" id="name" className="w-[400px] p-2 border-2 border-foreground outline-none shadow-neo" />
                            <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500">Email</label>
                            <input type="email" id="email" className="w-[400px] p-2 border-2 border-foreground outline-none shadow-neo" />
                            <label htmlFor="message" className="after:content-['*'] after:ml-0.5 after:text-red-500">Message</label>
                            <textarea id="message" className="w-[400px] p-2 border-2 border-foreground outline-none shadow-neo"></textarea>
                            <button type="submit" className="p-2 mt-4 bg-[#1ac90a] cursor-pointer border-2 border-foreground shadow-neo text-background">Send</button>
                        </form>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Contact
