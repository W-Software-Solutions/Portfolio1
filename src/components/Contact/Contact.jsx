import React, { useState } from "react";

export default function Contact() {
  const [copiedText, setCopiedText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(text);
        setShowMessage(true);

        // Hide the message after 1 second
        setTimeout(() => {
          setShowMessage(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <div id="Contact">
        <div className="flex justify-center gap-5 items-center font-Anton text-white text-7xl mb-10">
          <p>Contact me</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5 items-center font-Anton text-white p-12">
          <button className="hover:text-[#00ADB5]">
            <a href="https://www.linkedin.com/in/wasif-ansari/">LinkedIn</a>
          </button>
          <button className="hover:text-[#00ADB5]">
            <a href="https://github.com/Wasif-Ansari">Github</a>
          </button>
          <span
            className="hover:text-[#00ADB5] cursor-pointer"
            onClick={() => copyToClipboard("+91 7888151128")}
          >
            +91 7888151128
          </span>
          <span
            className="hover:text-[#00ADB5] cursor-pointer"
            onClick={() => copyToClipboard("wasifansari2709@gmail.com")}
          >
            wasifansari2709@gmail.com
          </span>
        </div>

        {showMessage && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg opacity-0 animate-fade-in-out">
            {copiedText} copied to clipboard!
          </div>
        )}
      </div>

      <div className="flex justify-center items-center text-white font-Anton pb-6">
      Copyright &copy; Wasif Ansari
      </div>
    </>
  );
}
