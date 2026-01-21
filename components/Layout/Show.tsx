import { Star } from "lucide-react"

function Show() {
    return (
        <>
            <div className="flex items-center justify-evenly h-screen w-full font-grotesk">
                <div className="relative ">
                    <div className="flex items-center justify-center w-[300px] h-[550px] border-2  border-foreground rounded-[45px] shadow-[-5px_5px_0px_1px_#000]">
                        <div className="relative bg-[#80C551] w-[260px] h-[510px] border-2 border-t-0 rounded-[25px] border-foreground">
                            <div className="absolute w-[60px] h-[30px] left-[-2px] top-[-1px] border-2 border-foreground inset-0 border-b-transparent border-r-transparent rounded-tl-[25px] ">
                            </div>
                            <div className="absolute w-[60px] h-[30px]  left-[198px] top-[-1px] border-2 border-foreground inset-0 border-b-transparent border-l-transparent rounded-tr-[25px] ">
                            </div>
                            <div className="absolute left-1/2  top-[-1px] z-10 h-5 w-36 -translate-x-1/2 rounded-b-2xl border-2 border-foreground border-t-0 bg-background" />
                        </div>

                        <div className="flex items-center justify-center text-9xl text-black font-extrabold tracking-[10px] shadow-[-5px_5px_0px_1px_#000] h-32 w-[350px] bg-white border-2 border-foreground absolute inset-0 top-23 left-[-100px] rounded-xl">
                            NEO </div>
                        <div className="absolute flex items-center justify-center text-7xl text-black tracking-[8px] shadow-[-5px_5px_0px_1px_#000] font-extrabold h-28 w-[550px] inset-0 top-[245px] left-[-150px] border-2 border-foreground bg-white rounded-xl">
                            BRUTALISM </div>
                        <div className="flex items-start p-4 flex-col gap-2 justify-center text-black bg-[#F9D52F] h-20 border-2 border-foreground rounded-xl shadow-[-5px_5px_0px_1px_#000] w-[200px] absolute inset-0 top-[380px] left-[-100px]">
                            <p className="h-2 w-[160px] bg-black rounded-xl"></p>
                            <div className="flex gap-2">
                                <p className="h-2 w-[50px] bg-black rounded-xl"></p>
                                <p className="h-2 w-[80px] bg-black rounded-xl"></p>
                            </div>
                            <p className="h-2 w-[145px] bg-black rounded-xl"></p>

                        </div>

                        <div className="flex items-center justify-center absolute inset-0 h-20 w-20 bg-[#F9D52F] border-2 border-foreground shadow-[-5px_5px_0px_1px_#000] rounded-xl left-[280px] top-[120px] ">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Youtubemusic--Streamline-Simple-Icons" height={50} width={50} ><desc>{"\n    Youtubemusic Streamline Icon: https://streamlinehq.com\n  "}</desc><title>{"YouTube Music"}</title><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12 -5.376 12 -12S18.624 0 12 0zm0 19.104c-3.924 0 -7.104 -3.18 -7.104 -7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104 -3.18 7.104 -7.104 7.104zm0 -13.332c-3.432 0 -6.228 2.796 -6.228 6.228S8.568 18.228 12 18.228s6.228 -2.796 6.228 -6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z" fill="#000000" strokeWidth={1} /></svg>
                        </div>
 
                        <div className="flex flex-col items-center justify-center absolute inset-0 h-[220px] w-[100px] bg-[#4DC1C2] rounded-xl left-[-290px] top-[60px] border-2 border-foreground shadow-[-5px_5px_0px_1px_#000]">
                              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Gotomeeting--Streamline-Simple-Icons" height={24} width={24} ><desc>{"\n    Gotomeeting Streamline Icon: https://streamlinehq.com\n  "}</desc><title>{"GoToMeeting"}</title><path d="M21.3 13.72a3.158 3.158 0 0 0 -3.462 0.124 0.632 0.632 0 0 1 -0.682 0.035l-3.137 -1.81a0.08 0.08 0 0 1 0 -0.137l3.12 -1.8a0.632 0.632 0 0 1 0.685 0.036 3.158 3.158 0 0 0 3.47 0.139A3.194 3.194 0 0 0 22.442 6.1a3.158 3.158 0 0 0 -5.924 1.773 0.633 0.633 0 0 1 -0.311 0.606l-3.136 1.811a0.08 0.08 0 0 1 -0.118 -0.068V6.6a0.632 0.632 0 0 1 0.372 -0.573 3.158 3.158 0 1 0 -2.64 0 0.632 0.632 0 0 1 0.373 0.573v3.622a0.08 0.08 0 0 1 -0.119 0.068L7.804 8.48a0.632 0.632 0 0 1 -0.311 -0.605 3.157 3.157 0 1 0 -1.307 2.294 0.633 0.633 0 0 1 0.687 -0.038l3.12 1.8a0.08 0.08 0 0 1 0 0.137L6.854 13.88a0.632 0.632 0 0 1 -0.683 -0.035 3.158 3.158 0 0 0 -3.461 -0.124 3.194 3.194 0 0 0 -1.143 4.202 3.159 3.159 0 0 0 5.924 -1.792 0.633 0.633 0 0 1 0.31 -0.61l3.137 -1.81a0.08 0.08 0 0 1 0.119 0.068V17.4a0.632 0.632 0 0 1 -0.372 0.573 3.158 3.158 0 1 0 2.64 0 0.633 0.633 0 0 1 -0.373 -0.573v-3.621a0.08 0.08 0 0 1 0.118 -0.069l3.137 1.812a0.631 0.631 0 0 1 0.31 0.609 3.159 3.159 0 0 0 5.924 1.792A3.194 3.194 0 0 0 21.3 13.72Z" fill="#000000" strokeWidth={1} /></svg>
                        </div>

                    </div>


                </div>


                {/* <div className="flex items-center p-4 justify-center w-[500px] h-[500px] bg-background border-2 border-foreground shadow-[5px_5px_0px_1px_#000]">
                    <p className="text-xl">Neo-Brutalism UI is a bold and expressive design style that focuses on raw layouts, high contrast, and strong visual impact.
                        It uses solid colors, thick borders, sharp shadows, and oversized typography to create a striking look.
                        Instead of subtle gradients and soft effects, it embraces flat surfaces and intentional roughness.
                        The goal is clarity, confidence, and personality—making interfaces feel modern, playful, and unapologetically different.</p>
                </div> */}


            </div>
        </>
    )
}

export default Show