import React, { useState } from "react";
import { TfiGoogle, TfiBell } from "react-icons/tfi";

const Form = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    data[e.target.name] = e.target.value;
    setData({ ...data });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    var mailtoLink =
      "mailto:swaroop@gmail.com?subject=" +
      encodeURIComponent("New Contact Form Submission") +
      "&body=" +
      encodeURIComponent(
        "Name: " +
          data.fullname +
          "\nEmail: " +
          data.email +
          "\nMessage: " +
          data.message +
          "/n/n" +
          data.fullname
      );

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <main>
        <div className="flex gap-4 mb-5">
          <div className="icon_box lg:text-5xl lg:w-12 w-10 h-10 lg:h-12 m-1">
            <TfiGoogle />
          </div>
          <div className="self-center">
            <h1 className="text-2xl font-semibold">Contact Form</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:gap-12 gap-4">
            <input
              type="text"
              name="fullname"
              className="form_input placeholder-stone-500 lg:w-6/12"
              placeholder="Full name"
              required={true}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form_input placeholder-stone-500 lg:w-6/12"
              placeholder="Email address"
              required={true}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Your message"
            className="form_input placeholder-stone-500 lg:mt-8 mt-4 w-full"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="lg:float-right w-full lg:w-1/5 p-0 mt-4 me-3"
          >
            <div
              className="icon_box lg:text-5xl lg:w-[12rem] w-full lg:h-12 h-[4rem] m-1 gap-4"
              style={{ justifyContent: "between" }}
            >
              <TfiBell /> Submit
            </div>
          </button>
        </form>
      </main>
      <style jsx>{`
        .form_input {
          font-size: 15px;
          font-weight: 400;
          padding: 13px 20px;
          border: 1px solid #383829;
          border-radius: 14px;
          outline: none;
          background: none;
        }
      `}</style>
    </div>
  );
};

export default Form;
