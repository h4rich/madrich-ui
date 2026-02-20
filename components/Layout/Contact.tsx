"use client";

import { useState } from "react";
import { Button } from "@/registry/new-york/ui/button";
import { Input } from "@/registry/new-york/ui/input";
import { Textarea } from "@/registry/new-york/ui/textarea";
import {
  Mail,
  MessageSquare,
  Send,
  Sparkles,
  User,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { toast, Toaster } from "sonner";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.custom(() => (
        <div className="flex items-start gap-3 bg-[#FFF3CD] border-3 border-foreground shadow-neo-4 px-5 py-4 font-grotesk max-w-sm w-full">
          <XCircle className="w-5 h-5 mt-0.5 shrink-0 text-[#FF7051]" />
          <div>
            <p className="font-black uppercase text-sm tracking-wider text-foreground">
              Hold on!
            </p>
            <p className="text-sm font-bold text-foreground/80 mt-0.5">
              Please fill in all fields before submitting.
            </p>
          </div>
        </div>
      ));
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.custom(() => (
          <div className="flex items-start gap-3 bg-[#DCFCE7] border-3 border-foreground shadow-neo-4 px-5 py-4 font-grotesk max-w-sm w-full">
            <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-[#11A365]" />
            <div>
              <p className="font-black uppercase text-sm tracking-wider text-foreground">
                Message Sent!
              </p>
              <p className="text-sm font-bold text-foreground/80 mt-0.5">
                We'll get back to you shortly. Thanks for reaching out!
              </p>
            </div>
          </div>
        ));
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        toast.custom(() => (
          <div className="flex items-start gap-3 bg-[#FFE4E1] border-3 border-foreground shadow-neo-4 px-5 py-4 font-grotesk max-w-sm w-full">
            <XCircle className="w-5 h-5 mt-0.5 shrink-0 text-[#FF7051]" />
            <div>
              <p className="font-black uppercase text-sm tracking-wider text-foreground">
                Oops! Failed.
              </p>
              <p className="text-sm font-bold text-foreground/80 mt-0.5">
                {data?.error || "Something went wrong. Please try again."}
              </p>
            </div>
          </div>
        ));
      }
    } catch {
      toast.custom(() => (
        <div className="flex items-start gap-3 bg-[#FFE4E1] border-3 border-foreground shadow-neo-4 px-5 py-4 font-grotesk max-w-sm w-full">
          <XCircle className="w-5 h-5 mt-0.5 shrink-0 text-[#FF7051]" />
          <div>
            <p className="font-black uppercase text-sm tracking-wider text-foreground">
              Network Error
            </p>
            <p className="text-sm font-bold text-foreground/80 mt-0.5">
              Could not reach the server. Check your connection.
            </p>
          </div>
        </div>
      ));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Neo-Brutalism Sonner Toaster */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: "font-grotesk",
          },
        }}
      />

      <section className="relative w-full py-24 px-6 md:px-12 bg-[#FFC900] font-grotesk overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-10 left-10 animate-bounce delay-100 hidden lg:block">
          <Sparkles className="w-16 h-16 text-foreground fill-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce delay-700 hidden lg:block">
          <div className="w-20 h-20 bg-[#FF7051] rounded-full border-3 border-foreground shadow-neo-4"></div>
        </div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-[#E9DCFE] rotate-45 border-3 border-foreground shadow-neo-4 hidden lg:block"></div>

        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text & Info */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block bg-card-surface border-2 border-foreground px-4 py-1.5 shadow-neo-4 transform -rotate-2">
              <span className="font-bold text-sm tracking-wider uppercase">
                Let's Connect
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight text-foreground drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] dark:drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              Building <br /> Something <br />{" "}
              <span className="text-[#80C551] text-stroke-3">Bold?</span>
            </h2>

            <p className="text-xl font-bold max-w-md mx-auto lg:mx-0 border-l-4 border-foreground pl-6 py-2 bg-card-surface/50 backdrop-blur-sm shadow-neo-4">
              Got a project in mind or just want to say hi? Drop us a message
              and let's craft something extraordinary together.
            </p>

            {/* Contact Info Cards */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-3 bg-card-surface border-2 border-foreground p-4 shadow-neo-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all cursor-pointer">
                <div className="bg-[#80C551] p-2 border-2 border-foreground rounded-full">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-neo uppercase">
                    Email Us
                  </p>
                  <p className="font-bold text-sm">harishsuthar739@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative group">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative bg-card-surface border-3 border-foreground p-8 md:p-10 shadow-neo-lg rounded-xl flex flex-col gap-6"
            >
              <div className="flex items-center gap-2 border-b-2 border-foreground pb-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#FF7051] border border-foreground"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFC900] border border-foreground"></div>
                <div className="w-3 h-3 rounded-full bg-[#80C551] border border-foreground"></div>
                <span className="ml-auto font-bold text-xs uppercase tracking-widest text-muted-neo">
                  New Message
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-bold text-sm uppercase flex items-center gap-2"
                  >
                    <User className="w-4 h-4" /> Name
                  </label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="h-12 border-2 border-foreground focus-visible:ring-0 focus-visible:shadow-neo-4 transition-all bg-card-surface"
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-bold text-sm uppercase flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" /> Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="h-12 border-2 border-foreground focus-visible:ring-0 focus-visible:shadow-neo-4 transition-all bg-card-surface"
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-bold text-sm uppercase flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" /> Message
                  </label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] w-full border-2 border-foreground focus-visible:ring-0 focus-visible:shadow-neo-4 transition-all bg-card-surface resize-none"
                    disabled={loading}
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 text-lg font-black uppercase tracking-wider border-2 border-foreground shadow-neo-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm bg-[#11A365] text-white hover:bg-[#0e8a55] transition-all mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
