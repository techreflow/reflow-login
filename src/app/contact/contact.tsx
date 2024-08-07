"use client";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/labelLogin";
import { Input } from "@/components/ui/InputLogin";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({ variant: "destructive", title: "Please fill out all fields" });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({ title: "Message sent successfully", variant: "default" });
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({ title: "Failed to send message", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error sending message", variant: "destructive" });
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-full w-full flex flex-col lg:flex-row justify-evenly pr-[3rem] bg-white items-center">
        <div className="h-full w-full lg:w-[40%] bg-white p-6">
          <h1 className="text-black font-bold tracking-wide text-4xl">Contact Us</h1>
          <p className="text-gray-600 mt-[1rem]">Fill in your details to get in touch with us.</p>
          <div className="bg-gray-100 mt-8 p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <Label htmlFor="name">
                  <p className="text-gray-500">Name</p>
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border border-gray-300 focus:border-black placeholder-gray-500 text-black"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">
                  <p className="text-gray-500">Email ID</p>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border border-gray-300 focus:border-black placeholder-gray-500 text-black"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">
                  <p className="text-gray-500">Message</p>
                </Label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border border-gray-300 focus:border-black placeholder-gray-500 text-black p-2 rounded"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className={`py-2 px-4 bg-black text-white rounded-xl ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <div className="w-full lg:w-[40%] text-black h-[80vh] flex flex-col justify-center items-center">
      
          <img src="/map.png" alt="Map" className="h-96 w-auto" />
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-black">Message Sent</h2>
            <p className="text-gray-600 my-4">Thank you for contacting us. We will get back to you soon.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-black text-white py-2 px-4 rounded-full"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
