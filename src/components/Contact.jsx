import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="py-4 text-4xl font-bold text-center text-[#01890f]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/feb86c64-5bac-4f43-acbd-9065cfe761eb"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-green-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-green-300"
              type="text"
              name="phone"
              id=""
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-green-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-green-300"
            type="text"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-green-300"
            rows="10"
            name="message"
          ></textarea>
        </div>
        <button className="bg-[#01890f] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Let's Talk
        </button>
      </form>
    </div>
  );
};

export default Contact;
