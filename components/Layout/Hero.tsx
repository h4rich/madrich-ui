import { Button } from "@/registry/new-york/ui/button"
import { CircleX, CodeXml, Link2, Plus, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/registry/new-york/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { FcApproval } from "react-icons/fc";
import ProgressDemo from "@/renders/component/ProgressDemo"
import Image from "next/image"
import { FaGoogle } from "react-icons/fa";


const Hero = () => {

    return (
        <>
            <div className="relative font-grotesk flex justify-between h-screen w-full overflow-hidden">
                <div className="flex flex-col gap-3 pl-20 justify-center w-[60%]">
                    <h1 className="text-7xl font-bold leading-[1.4]  tracking-wide"><span className="ring-2 ring-hero bg-background  p-1  shadow-[6px_6px_0px_2px_var(--hero)]">Neo-Brutal</span> UI for <br /> Bold Builders.</h1>
                    <p className="text-xl leading-[1.5]  " >A neo-brutalist UI library for <span className="font-bold text-hero">developers</span> who hate boring design.  <br />
                        Sharp borders, bold colors, zero fluff — just <span className="font-bold text-hero">components</span> that stand out.</p>
                    <div className=" mt-5">
                        <button className="border border-foreground p-2 px-4 font-semibold bg-hero shadow-neo "><Link href="/">Browse Components</Link></button>
                    </div>
                </div>

                <div className="w-[40%] flex flex-col gap-6">
                    <div className="flex gap-5 justify-between">
                        <div className="flex mt-20 h-10 gap-5">
                            <button className="border border-foreground p-1 px-5 font-semibold bg-[#FFC900] rounded-sm shadow-neo ">Badge</button>
                            <button className="border border-foreground p-1 px-5 font-semibold bg-[#11A365] rounded-lg shadow-neo ">Badge</button>
                            <button className="border border-foreground p-1 px-5 font-semibold bg-[#FF7051] rounded-full shadow-neo ">Badge</button>
                        </div>
                        <div className="flex items-center justify-center gap-4 mt-15 h-20 w-[400px] border-2 border-foreground border-r-0 rounded-sm shadow-neo rounded-br-none bg-[#E7E5E4]">
                            <Link href="#" className="flex items-center gap-2 underline underline-offset-2"><Link2 />Copy link</Link>
                            <Link href="#" className="flex items-center gap-2 underline underline-offset-2"><CodeXml />Get embed code</Link>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <Button className="w-[220px] rounded-sm h-11 text-lg">Button CTA</Button>
                        <Button className="w-[220px] rounded-sm h-11 bg-background text-lg">Button CTA</Button>
                        <Button className="w-[220px] rounded-sm h-11 bg-foreground text-background rounded-tr-none text-lg">Button CTA</Button>
                    </div>

                    <div className="flex justify-between  mt-5">
                        <div className="flex flex-col gap-10">
                            <div className="h-30 w-[400px] border-2 p-2 border-foreground bg-background shadow-neo">
                                <h2 className="text-sm font-semibold pb-1">Tooltip text</h2>
                                <p className="text-[12px]">A tooltip shows additional information related to an element.
                                    It appears when the user hovers or focuses on the item.
                                    This helps explain actions, labels, or icons clearly. </p>
                            </div>
                            <div className="flex gap-4 h-10 w-[400px] border-2 bg-background p-2 border-foreground  shadow-neo">
                                <Search className="ml-2 size-[18px]" />
                                <input
                                    className="outline-none"
                                    type="text"
                                    placeholder="Search"
                                />
                            </div>

                            <div className="flex gap-4 h-10 w-[400px] border-2 outline-3 outline-hero bg-background p-2 border-foreground">
                                <Search className="ml-2 size-[18px]" />
                                <input
                                    className="outline-none"
                                    type="text"
                                    placeholder="Search"
                                />
                                <CircleX className="ml-25 size-[18px]" />
                            </div>

                            <div className="relative flex justify-around">
                                <div className="absolute  top-13 left-21 bg-green-500 text-foreground h-5 w-5 z-10  rounded-full ring-1 ring-background  select-none"></div>
                                <FcApproval className="absolute z-10 size-7 top-12 right-40" />
                                <div className="absolute  bg-hero text-foreground h-5 w-5 z-10 top-13 right-7 rounded-sm ring-1 outline-1 outline-background outline-offset-1 ring-foreground flex items-center justify-center select-none"><Plus className="size-4" /></div>

                                <Avatar className=' outline-foreground size-18'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>

                                </Avatar>

                                <Avatar className='outline-foreground size-18'>
                                    <AvatarImage src="https://i.pinimg.com/736x/3c/f2/0f/3cf20fb883610c063ecf936fbc4e4235.jpg" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <Avatar className='outline-foreground size-18'>
                                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1k2CGi9bJc7c0iQONfI4v1MYsBJe-Nlwntg&s" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>

                            <ProgressDemo />

                            <div className="flex h-10 gap-6">
                                <div className="border border-foreground w-[100px] p-1 px-5 font-semibold bg-[#FFC900] rounded-sm shadow-neo ">
                                </div>
                                <div className="border border-foreground w-[100px] p-1 px-5 font-semibold bg-[#11A365] rounded-lg shadow-neo "></div>
                                <div className="border border-foreground w-[100px] p-1 px-5 font-semibold bg-[#FF7051] rounded-full shadow-neo "></div>
                            </div>

                            <div className="w-[400px] p-4 bg-background flex gap-4 h-30 shadow-neo rounded-sm border-2 border-foreground ">
                                <div className="h-11 w-11 border-1 border-foreground rounded-full"></div>
                                <div>
                                    <h2>John Snow</h2>
                                    <p className="text-sm text-neutral-500">Sent you an invite to connect</p>
                                </div>

                                
                            </div>

                        </div>

                        <div className="flex flex-col gap-10">
                            <div className="w-[300px]  flex gap-3 items-center justify-center h-12  bg-background shadow-neo  border-2 border-r-0 border-foreground">
                                <FaGoogle className="size-6" />
                                <h2 className="font-semibold">Sign in with Google</h2>

                            </div>
                            
                        </div>



                    </div>
                </div>
            </div>



        </>
    )
}

export default Hero
