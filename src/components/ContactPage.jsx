import emailjs from "emailjs-com";
import React from "react";
// import "./ContactUs.css";
// init("user_3AhRHOaXXbpmHxUhvtucJ");

function ContactPage(props) {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k1gfcie",
        "template_iigny2c",
        e.target,
        "user_3AhRHOaXXbpmHxUhvtucJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact">
      <div>
        <p className="title4">... Get in touch</p>
      </div>
      <div className="box">
        <h1>E-mail Alex</h1>
        <form className="cf" className="contact-form" onSubmit={sendEmail}>
          <div className="half left cf">
            {/* <label>Name</label> */}
            <input
              placeholder="Your name..."
              id="input-name"
              type="text"
              name="name"
            />
            {/* <label>Email</label> */}
            <input
              placeholder="Your E-mail..."
              id="input-email"
              type="email"
              name="email"
            />
            {/* <label>Subject</label> */}
            <input
              placeholder="Subject..."
              type="text"
              id="input-subject"
              name="subject"
            />
          </div>

          {/* <label>Message</label> */}
          <textarea
            type="text"
            id="input-message"
            placeholder="Message"
            name="message"
          />
          <input id="input-submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

// return (
//   <div className="contact">
//     <div>
//       <p className="title4">... Get in touch</p>
//     </div>
//     <div className="box">
//       <h1>E-mail Alex</h1>
//       <form
//         action="mailto:tristram.alexander94@gmail.com"
//         method="POST"
//         className="cf"
//       >
//         <div className="half left cf">
//           <input type="text" id="input-name" placeholder="Name" />
//           <input type="text" id="input-subject" placeholder="Subject" />
//         </div>
//         <div class="half right cf">
//           <textarea
//             name="message"
//             type="text"
//             id="input-message"
//             placeholder="Message"
//           ></textarea>
//         </div>
//         <input type="submit" value="Submit" id="input-submit" />
//       </form>
//     </div>
//   </div>
// );
// }
