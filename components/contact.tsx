"use client";

import { useState } from "react";
import { contactSchema, ContactFormData } from "@/schemas/contact";

// Components
import LoaderSpinner from "@/components/loader-spinner";
import BaseAlert from "@/components/base-alert";

export default function Contact() {
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [alert, setAlert] = useState({
    type: "",
    message: "",
    isShow: false
  });
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handle submit form
   * @param {React.FormEvent<HTMLFormElement>} e - event dari form
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // ✅ Validasi dengan Zod
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      // ambil error message per field
      const fieldErrors: Partial<ContactFormData> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const resData = await res.json();

      if(res.ok){
        setAlert({
          type: "success",
          message: "Message successfully to sended",
          isShow: true
        });
        setIsLoading(false);
      }else{
        console.error(resData);
        setAlert({
          type: "error",
          message: "Failed to send",
          isShow: true
        });
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err)
      setAlert({
        type: "error",
        message: "Failed to send",
        isShow: true
      });
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 bg-white shadow-lg rounded-2xl p-10">
          {/* Left Info */}
          <div>
            <p className="uppercase tracking-wider text-gray-500 text-sm mb-3">
              Kami di sini untuk membantu Anda
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
              Kontak Sekolah
            </h2>
            <p className="text-gray-600 mb-8">
              Jika Anda memiliki pertanyaan mengenai informasi sekolah, penerimaan siswa baru, atau kerja sama, jangan ragu untuk menghubungi kami.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <span className="text-gray-700">smk@itikurih-hibarna.sch.id</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <span className="text-gray-700">022-5957900</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-50 rounded-xl shadow-inner p-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              { alert.isShow && (
                <BaseAlert alert={{ type: alert.type, message: alert.message }} />
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition flex items-center gap-3 justify-center"
              >
                { isLoading ? 'Loading' : 'Send Message' }
                { isLoading && (<LoaderSpinner />) }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
