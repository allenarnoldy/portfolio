import React, { useState } from "react";

export default function HomePage() {
  const [value, setValue] = useState("");

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setValue("All fields must be filled out");
    } else {
      setValue("");
    }
  };
  const handleFocus = () => {
    setValue("");
  };
  return (
    <section>
      <h4>
        <p> Phone: (218)-251-0807</p>
        <p> Email: allenarnoldy@gmail.com</p>
        <p> github: allen.arnoldy</p>
      </h4>
      <h3 className="card">Contact Me</h3>
      {value && <p className="error-message">{value}</p>}
      <form className="contact-form">
        <div classname="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onBlur={(e) => handleBlur(e)}
            onFocus={handleFocus}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={(e) => handleBlur(e)}
            onFocus={handleFocus}
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            onBlur={(e) => handleBlur(e)}
            onFocus={handleFocus}
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
        <br />
      </form>
    </section>
  );
}
