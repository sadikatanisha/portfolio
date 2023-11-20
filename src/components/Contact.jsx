import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-5  "
    >
      <form
        method="POST"
        action="https://getform.io/f/234ab56e-3bfb-4048-a5f1-dc9c59fb9f05"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 ">
            Submit the form below or shoot me an email - sadikatanisha@gmail.com
          </p>
        </div>
        <input
          className="bg-[#0a192f] p-2 rounded-full border-white border-opacity-40 "
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#0a192f] rounded-full border-white border-opacity-40"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#0a192f] p-2 rounded border-white border-opacity-40"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-teal-500 hover:border-teal-500 px-4 py-3 my-8 mx-auto flex items-center rounded-full">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
