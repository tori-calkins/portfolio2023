import React from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const sendEmailAndRefresh = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm('service_puz5tjk', 'template_ld6a9x9', e.target, 'bvRIsDqo_cD5YKaot');
      console.log(result.text);
      // Handle success or show a success message

      // Refresh the page after the form is submitted
      window.location.reload();
    } catch (error) {
      console.log(error.text);
      // Handle error or show an error message
    }
  };

  return (

    <body className="contactformContainer">
      <form id='form' onSubmit={sendEmailAndRefresh}>
        <input className="inputField" type="text" name="from_name" placeholder="Name" />
        <input className="inputField" type="text" name="from_email" placeholder="Email" />
        <input className="inputField" type="text" name="subject" placeholder="Subject" />
        <textarea className="inputField" name="message" placeholder="Message" />
        <br></br>
        <button className="submitButton" type="submit">Send</button>
      </form>
    </body>
  );
};

export default ContactMe;
