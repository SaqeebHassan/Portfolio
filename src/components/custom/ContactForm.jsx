import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsTelegram } from "react-icons/bs";
function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ulzh8os", "template_go34mfs", form.current, {
        publicKey: "ZMc8lHsAKQYkyPRG7",
      })
      .then(
        () => {
          toast("Message Sent Successfully!");
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div
        className="contact-form h-screen flex justify-center items-center"
        style={{ backgroundColor: "rgb(10 30 43)" }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-3/5 md:w-2/6 bg-slate-300 p-4 rounded-xl"
        >
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="rounded-sm px-2 py-1 outline-none"
            autoComplete="off"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="rounded-sm px-2 py-1 outline-none"
            autoComplete="off"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            className="outline-none rounded-sm resize-none px-2"
            autoComplete="false"
            rows={5}
            required
          />
          <div className="flex justify-center items-center gap-2 bg-cyan-700 my-2 py-2 rounded-sm cursor-pointer text-lg font-bold text-white">
            <BsTelegram />
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default ContactForm;
