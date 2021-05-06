import React from "react";

function ContactPage(props) {
  return (
    <div className="contact">
      <div>
        <p className="title4">... Get in touch</p>
      </div>
      <div className="box">
        <h1>E-mail Alex</h1>
        <form
          action="mailto:tristram.alexander94@gmail.com"
          method="POST"
          className="cf"
        >
          <div className="half left cf">
            <input type="text" id="input-name" placeholder="Name" />
            <input type="text" id="input-subject" placeholder="Subject" />
          </div>
          <div class="half right cf">
            <textarea
              name="message"
              type="text"
              id="input-message"
              placeholder="Message"
            ></textarea>
          </div>
          <input type="submit" value="Submit" id="input-submit" />
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

{
  /* <div>
<h1>Elegant Contact Form</h1>
<form class="cf">
<div class="half left cf">
<input type="text" id="input-name" placeholder="Name" />
<input type="email" id="input-email" placeholder="Email address" />
<input type="text" id="input-subject" placeholder="Subject" />
 </div>
<div class="half right cf">
<textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
</div>  
<input type="submit" value="Submit" id="input-submit">
</form>
</div> */
}

{
  /* <div>
    <h2> Contact form</h2>
    <form className='cf'>
    <div className='half left cf'>
      <input></input>
    </div>
    </form>
  </div> */
}
