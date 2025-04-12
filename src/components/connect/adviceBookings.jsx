import { BsSend } from "react-icons/bs";
import { useState } from "react";

const AdviceBookings = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate form submit
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after submit
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide message after a while
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="rounded-xl absolute right-[5%] bottom-[20px] flex flex-col items-center shadow-xl p-6 w-[90%] sm:w-[70%] md:w-[40%] h-[75%] bg-white/10 backdrop-blur-md border border-white/30">
      <h1 className="text-2xl font-medium font-ubuntu text-[#6b4c2d] self-start mb-4">
        Book For Advice
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 pb-2.5"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#6b4c2d] text-sm"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#6b4c2d] text-sm"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#6b4c2d] text-sm"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {submitted && (
          <p className="text-green-600 text-sm">Message sent successfully!</p>
        )}

        <button
          type="submit"
          className="flex items-center gap-2.5 cursor-pointer bg-[#6b4c2d] text-[#e3dcdc] px-6 py-3 rounded-md text-center justify-center font-Montserrat hover:bg-[#695f4d] transition-all duration-300"
        >
          Send <BsSend />
        </button>
      </form>
    </div>
  );
};

export default AdviceBookings;
