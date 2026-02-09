"use client"

import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Textarea } from "@/registry/new-york/ui/textarea"
import { Mail, MessageSquare, Send, Sparkles, User } from "lucide-react"

function Contact() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-[#FFC900] font-grotesk overflow-hidden min-h-screen flex items-center justify-center">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute top-10 left-10 animate-bounce delay-100 hidden lg:block">
                <Sparkles className="w-16 h-16 text-foreground fill-white" />
            </div>
            <div className="absolute bottom-10 right-10 animate-bounce delay-700 hidden lg:block">
                <div className="w-20 h-20 bg-[#FF7051] rounded-full border-3 border-foreground shadow-[4px_4px_0px_0px_#000]"></div>
            </div>
            <div className="absolute top-1/2 left-10 w-12 h-12 bg-[#E9DCFE] rotate-45 border-3 border-foreground shadow-[4px_4px_0px_0px_#000] hidden lg:block"></div>

            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text & Info */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-block bg-white border-2 border-foreground px-4 py-1.5 shadow-[4px_4px_0px_0px_#000] transform -rotate-2">
                        <span className="font-bold text-sm tracking-wider uppercase">Let's Connect</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight text-foreground drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                        Building <br /> Something <br /> <span className="text-white text-stroke-3">Bold?</span>
                    </h2>

                    <p className="text-xl font-bold max-w-md mx-auto lg:mx-0 border-l-4 border-foreground pl-6 py-2 bg-white/50 backdrop-blur-sm shadow-[4px_4px_0px_0px_#000]">
                        Got a project in mind or just want to say hi? Drop us a message and let's craft something extraordinary together.
                    </p>

                    {/* Contact Info Cards */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <div className="flex items-center gap-3 bg-white border-2 border-foreground p-4 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer">
                            <div className="bg-[#80C551] p-2 border-2 border-foreground rounded-full">
                                <Mail className="w-5 h-5 text-foreground" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase">Email Us</p>
                                <p className="font-bold text-sm">harishsuthar739@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="relative group">
                    {/* Form Background Decoration */}


                    <div className="relative bg-white border-3 border-foreground p-8 md:p-10 shadow-[8px_8px_0px_0px_#000] rounded-xl flex flex-col gap-6">
                        <div className="flex items-center gap-2 border-b-2 border-foreground pb-4 mb-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF7051] border border-foreground"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFC900] border border-foreground"></div>
                            <div className="w-3 h-3 rounded-full bg-[#80C551] border border-foreground"></div>
                            <span className="ml-auto font-bold text-xs uppercase tracking-widest text-gray-400">New Message</span>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="font-bold text-sm uppercase flex items-center gap-2">
                                    <User className="w-4 h-4" /> Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    className="h-12 border-2 border-foreground focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_#000] transition-all bg-[#f9f9f9]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="font-bold text-sm uppercase flex items-center gap-2">
                                    <Mail className="w-4 h-4" /> Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-12 border-2 border-foreground focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_#000] transition-all bg-[#f9f9f9]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="font-bold text-sm uppercase flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" /> Message
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project..."
                                    className="min-h-[150px] w-full border-2 border-foreground focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_#000] transition-all bg-[#f9f9f9] resize-none"
                                />
                            </div>
                        </div>

                        <Button className="w-full h-14 text-lg font-black uppercase tracking-wider border-2 border-foreground shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] bg-[#11A365] text-white hover:bg-[#0e8a55] transition-all mt-2">
                            Send Message <Send className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
