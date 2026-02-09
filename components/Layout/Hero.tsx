import { Button } from "@/registry/new-york/ui/button"
import { CircleX, CodeXml, Link2, Plus, Search, X } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { FcApproval } from "react-icons/fc";
import ProgressDemo from "@/renders/component/ProgressDemo"
import Image from "next/image"
import { FaGoogle } from "react-icons/fa";
import { Textarea } from "@/registry/new-york/ui/textarea"
import { AvatarGroupCountExample } from "@/renders/component/AvatarDemo"
import { InputWithLabelDemo } from "@/renders/component/InputDemo"
import { IoIosAlert } from "react-icons/io";


const Hero = () => {

    return (
        <>
            <div className="relative font-grotesk flex justify-between h-screen w-full mask-b-from-90% overflow-hidden">
                <div className="flex flex-col gap-3 pl-20 justify-between w-[60%]">
                    <div className="flex flex-col gap-4 mt-40 ">
                        <h1 className="text-6xl font-bold leading-[1.4]  tracking-wide"><span className="ring-2 ring-hero bg-background  p-1  shadow-[6px_6px_0px_2px_var(--hero)]">Neo-Brutal</span> UI for <br /> Bold Builders.</h1>
                        <p className="text-lg leading-[1.5]  " >A neo-brutalist UI library for <span className="font-bold text-hero">developers</span> who hate boring design.  <br />
                            Sharp borders, bold colors, zero fluff — just <span className="font-bold text-hero">components</span> that stand out.</p>
                        <div className=" mt-5">
                            <button className="border border-foreground p-2 px-4 font-semibold bg-hero shadow-neo "><Link href="/">Browse Components</Link></button>
                        </div>
                    </div>

                    <div className="flex justify-between mr-16">
                        <div className="flex relative">
                            <div className="w-30 h-30 border-3 border-background rounded-full hover:z-20 hover:scale-[1.1] transition-all duration-300 bg-white">
                                <Image src="/image/one.png" alt="hero" width={100} height={100} quality={100} className="h-full w-full rounded-full object-cover object-top" />
                            </div>
                            <div className="absolute left-25 w-30 h-30 border-3 border-background bg-white hover:scale-[1.1] transition-all duration-300 rounded-full z-10">
                                <Image src="/image/icon4.jpg" alt="hero" width={100} height={100} className="h-full w-full rounded-full object-cover object-top" />

                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <AvatarGroupCountExample />
                            <InputWithLabelDemo />
                            <div className="w-[300px] h-20 flex items-center justify-between p-6 border-2 bg-[#E9DCFE] rounded-sm rounded-b-none border-b-0 border-hero">
                                <div className="flex gap-2 items-center">
                                    <IoIosAlert className="size-6" />
                                    <h2 className="font-semibold text-lg">Information</h2>

                                </div>
                                <X />
                            </div>
                        </div>

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
                        <Button className="w-[220px] rounded-sm h-11 bg-[#11A365] text-foreground border-r-0 rounded-r-none text-lg">Button CTA</Button>
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

                            <div className="flex h-10 gap-5">
                                <div className="flex items-center gap-3 border border-foreground w-[120px] p-1 px-2 font-semibold bg-[#FFC900] rounded-sm shadow-neo ">
                                    <div className="h-7 w-7 border-2 border-foreground rounded-sm">
                                        <Image src="/image/icon.jfif" alt="@shadcn" width={100} height={100} className="h-full w-full rounded-[4px] object-fill" />

                                    </div>
                                    <h2>Orla </h2>
                                    <X className="size-4" />
                                </div>
                                <div className="flex items-center gap-3 border border-foreground w-[120px] p-1 px-2 font-semibold bg-[#11A365] rounded-lg shadow-neo ">
                                    <div className="h-7 w-7 border-2 border-foreground rounded-md">
                                        <Image src="/image/icon2.jpg" alt="@shadcn" width={100} height={100} className="h-full w-full rounded-sm object-cover" />
                                    </div>
                                    <h2>Orla </h2>
                                    <X className="size-4" />
                                </div>
                                <div className="flex items-center gap-3 border border-foreground w-[120px] p-1 px-2 font-semibold bg-[#FF7051] rounded-full shadow-neo ">
                                    <div className="h-7 w-7 border-2 border-foreground rounded-full">
                                        <Image src="/image/icon3.jfif" alt="@shadcn" width={100} height={100} className="h-full w-full rounded-full object-cover" />
                                    </div>
                                    <h2>Orla </h2>
                                    <X className="size-4" />
                                </div>
                            </div>

                            <div className="w-[400px] p-4 bg-background flex gap-4 h-30 shadow-neo rounded-sm border-2 border-foreground ">
                                <div className="h-11 w-11 border-2 border-foreground rounded-full">
                                    <Image src="/image/icon4.jpg" alt="@shadcn" width={100} height={100} className="h-full w-full rounded-full object-cover object-top" />
                                </div>
                                <div>
                                    <h2>John Snow</h2>
                                    <p className="text-sm text-neutral-500">Sent you an invite to connect</p>
                                </div>


                            </div>

                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="w-[300px]  flex gap-3 items-center justify-center h-12  bg-background shadow-neo  border-2 border-r-0 border-foreground">
                                <FaGoogle className="size-6" />
                                <h2 className="font-semibold">Sign in with Google</h2>

                            </div>

                            <div>
                                <div className="w-[300px] outline-2 outline-hero flex gap-3 items-center rounded-sm rounded-r-none justify-start pl-4 h-11 bg-background  border-2 border-r-0 border-foreground">
                                    <div className="h-8 w-8 border-2 border-foreground rounded-full">
                                        <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" alt="@shadcn" width={100} height={100} className="h-full w-full rounded-full object-cover" />
                                    </div>
                                    <h1>Michael Brown</h1>
                                </div>

                                <div className="w-[300px] h-[300px] mt-2 grid grid-cols-1 shadow-neo grid-rows-6 rounded-sm rounded-r-none bg-background  border-2 border-r-0 border-foreground">
                                    <Profile name="Sarah Wilson" image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" />
                                    <Profile name="James Miller" image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop" />
                                    <Profile name="Emily Davis" image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" />
                                    <Profile name="Michael Brown" image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" className="bg-hero" />
                                    <Profile name="Jessica Taylor" image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" />
                                    <Profile name="David Anderson" image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop" />
                                </div>
                            </div>

                            <Textarea className="w-[300px] border-r-0 bg-background" placeholder="What are your thoughts on Madrich UI?" />

                            <div className="w-[300px] flex flex-col justify-center items-start pl-5 gap-2 h-30 border-2 border-foreground border-r-0 bg-background">
                                <h2 className="text-md text-neutral-800">Total Income</h2>
                                <h2 className="text-4xl font-semibold">$129,000.00</h2>
                            </div>

                        </div>



                    </div>
                </div>
            </div>



        </>
    )
}

export default Hero




const Profile = (props: { name: string, className?: string, image: string }) => {
    return (
        <>
            <div className={`w-full flex items-center p-2 gap-3 ${props.className}`}>
                <div className="h-8 w-8 border-2 border-foreground rounded-full">
                    <Image src={props.image} alt="hero" width={100} height={100} quality={100} className="h-full w-full rounded-full object-cover object-top" />
                </div>
                <h1>{props.name}</h1>
            </div>
        </>
    )
}


