import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <main>
          <h1>contact us </h1>
          <form>
            <div>
              <label>Name</label>
              <input type="text" required placeholder="enter name" />
            </div>

            <div>
              <label>Email</label>
              <input type="email" required placeholder="enter mail-id" />
            </div>

            <div>
              <label>Message</label>
              <input
                type="text"
                required
                placeholder="tell us about your query"
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
