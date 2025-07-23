import React, { useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mesajınız gönderildi! (Demo)");
    console.log(form);
  };

  return (
    <section id="contact" className="py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-slate-50 to-blue-100 ">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">İletişime Geçin</h2>
        <p className="text-slate-600">Aklınızdaki her soru için bizimle iletişime geçin.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-3xl shadow-xl p-8 space-y-6 border border-gray-100"
        >
          <div className="relative">
            <UserIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Adınızı girin"
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-gray-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <EnvelopeIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="E-posta adresiniz"
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-gray-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Mesajınızı buraya yazın..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-gray-300 rounded-xl text-slate-800 placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

         <button
  type="submit"
  className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
>
  Gönder
</button>

        </form>

        {/* Map */}
        <div className="w-full h-full">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-full">
            <iframe
              title="Turown Bursa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.7802343783745!2d28.97949211541984!3d40.223228979393756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca15f8e0a56d89%3A0x9814a56191ef64b!2sNil%C3%BCfer%2C%20Bursa!5e0!3m2!1str!2str!4v1657795954869!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ minHeight: "300px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
