import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen p-4 bg-[#0a192f] flex justify-center items-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/49f104e0-88ed-4a0a-8fae-21abec848e62"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 ">
          <p
            className="text-4xl
                 font-bold inline border-b-4 border-pink-600 text-gray-300"
          >
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me at -
            akinro.destined@gmail@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto my-8 flex items-center ease-in-out duration-200">
          Let's Collaborte
        </button>
      </form>
    </div>
  );
};

export default Contact;
