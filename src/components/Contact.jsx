import React from 'react';

const container = `bg-[#0B0F19] text-slate-100 py-20 px-4 md:px-12`;
const wrapper = `flex flex-col gap-4 justify-center items-center my-4`;
const title = `text-center text-cyan-400 text-4xl font-bold`;
const titleDesc = `text-center text-lg text-slate-300`;
const contactForm = `flex flex-col gap-5 bg-slate-800 p-6 rounded-2xl w-full max-w-xl shadow-md`;
const contactTitle = 'text-cyan-300 font-semibold text-lg tracking-wide';
const inputStyle = `bg-slate-700 text-slate-100 placeholder:text-slate-400 h-14 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`;
const inputStyleTextArea = `bg-slate-700 text-slate-100 placeholder:text-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`;
const sendButton = `bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-semibold h-12 rounded-lg shadow-md`;

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const message = formData.get('message');

    const mailtoLink = `mailto:sparjapati000@gmail.com?subject=Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div name='contact' className={container}>
        <div className={wrapper}>
          <div className={title}>Contact Me</div>
          <div className={titleDesc}>Feel free to reach out to me for any queries</div>
          <form action='' method='POST' className={contactForm} onSubmit={handleSubmit}>
            <div className={contactTitle}>Email Me</div>
            <input className={inputStyle} type="text" name='name' placeholder='Your Name' required />
            <input className={inputStyle} type="email" name='email' placeholder='Your Email' required />
            <textarea className={inputStyleTextArea} name='message' rows={6} placeholder='Message' required></textarea>
            <button className={sendButton} type='submit'>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;