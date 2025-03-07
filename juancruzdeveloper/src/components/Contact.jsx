import React, { useRef } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify"; // Importamos el ToastContainer y toast
import "react-toastify/dist/ReactToastify.css"; // Importamos los estilos de react-toastify

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_67f03hm", // Tu service ID
        "template_emfa6lv", // Tu template ID
        refForm.current, // El formulario de referencia
        "bKYxqv3R-V1Mkjcka" // Tu user ID (public key)
      )
      .then(
        () => {
          toast.success("Message successfully sent!", {
            // Notificación de éxito
            position: "top-center", // Cambié aquí para que aparezca en el centro superior
            autoClose: 3000, // Tiempo que permanecerá la notificación en pantalla
          });
        },
        () => {
          toast.error("Failed to send the message, please try again!", {
            // Notificación de error
            position: "top-center", // Cambié aquí para que aparezca en el centro superior
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div className="pb-20 text-white">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center my-10 text-4xl">
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4">
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4">
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" style={{ color: "#fe8a39" }} className="text-indigo-400">
          {CONTACT.email}
        </a>
      </div>

      

      <motion.form
        id="contact"
        ref={refForm}
        onSubmit={sendEmail}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center my-10 text-4xl">
        Write Me
      </motion.h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-300">
              Name
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md bg-stone-900 px-3.5 py-2 text-base text-gray-300 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#fe8a39]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-300">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md bg-stone-900 px-3.5 py-2 text-base text-gray-300 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#fe8a39]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-300">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md bg-stone-900 px-3.5 py-2 text-base text-gray-300 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#fe8a39]"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm/6 font-semibold text-gray-300">
              Subject
            </label>
            <div className="mt-2.5">
              <textarea
                required
                name="subject"
                id="subject"
                rows="1"
                className="block w-full rounded-md bg-stone-900 px-3.5 py-2 text-base text-gray-300 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#fe8a39]"></textarea>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-300">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                required
                name="message"
                id="message"
                rows="4"
                className="block w-full rounded-md bg-stone-900 px-3.5 py-2 text-base text-gray-300 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#fe8a39]"></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-white rounded-full px-3.5 py-2.5 text-center text-sm font-semibold text-stone-800 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  hover:font-bold hover:text-base transition-all duration-500">
            Let's talk
          </button>
        </div>
      </motion.form>

      {/* Aquí se agrega el ToastContainer para mostrar las notificaciones */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
