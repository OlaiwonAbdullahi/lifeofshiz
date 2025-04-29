import React, { useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

function SmallCardtwo() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Set the current time just before sending
    const now = new Date().toLocaleString();
    document.getElementById("timeInput").value = now;

    emailjs
      .sendForm(
        "service_pki7w44", // Replace with your EmailJS service ID
        "template_2or87uc", // Replace with your EmailJS template ID
        formRef.current,
        "v4xrfO__Rz_U3roqy" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("EmailJS result:", result);
          toast.success("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setMessage("Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <Toaster />
      <div className="rounded-xl absolute right-[5%] bottom-[20px] flex flex-col items-center shadow-xl p-6 w-[90%] md:w-[40%] h-[75%] bg-white/10 backdrop-blur-md border border-white/30">
        <h1 className="text-2xl font-medium font-Rumble text-[#bf6d45] self-start mb-4">
          Work with me
        </h1>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full min-h-[90%] overflow-y-auto flex flex-col gap-4 pb-2.5"
        >
          <input
            type="text"
            name="first_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#bf6d45] text-sm"
          />
          <input type="hidden" name="time" value="" id="timeInput" />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#bf6d45] text-sm"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#bf6d45] text-sm"
          />
          <button
            type="submit"
            className="flex items-center gap-2.5 cursor-pointer bg-[#bf6d45] text-[#f1ebdd] px-6 py-3 rounded-md justify-center font-Rumble hover:bg-[#695f4d] transition-all duration-300"
          >
            {loading ? "Sending..." : "Send"} <BsSend />
          </button>
          {message && (
            <p className="text-sm mt-2 text-center text-white">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default SmallCardtwo;
