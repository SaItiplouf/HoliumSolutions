import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { handleChange, handleKeyDown } from "../../service/form.service";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    content: "",
  });
  const handleChangeCallback = handleChange(formData, setFormData);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/mails`,
        formData,
      );
      console.log(`Réponse de l'API:`, response.data);
      setFormData({ email: "", subject: "", content: "" });
      toast.success("Mail envoyé");
    } catch (error) {
      toast.error("Il y a eu une erreur");
    }
  };

  return (
    <div className="max-w-screen-xl parent flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 xl:px-32 mx-auto component-height form-contact-height w-full overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 bg-stone-50 text-gray-900 rounded-lg shadow-lg md:m-4 lg:m-8 lg:my-12 flex-grow">
        <div className="p-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {t("contact.form.title")}
          </h2>
          <div className="text-gray-700">
            {t("contact.form.subtext")}
            <span className="underline"> {t("contact.form.subtext-span")}</span>
            .
          </div>
        </div>
        <div className="p-2 md:p-8">
          {" "}
          <form onSubmit={handleSubmit} className="space-y-4">
            {" "}
            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="uppercase text-sm text-gray-600 font-bold"
              >
                {t("contact.form.subject")}
              </label>
              <input
                id="subject"
                className="w-full bg-gray-300 text-gray-900 mt-1 md:mt-2 p-2 md:p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChangeCallback}
                onKeyDown={handleKeyDown}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="uppercase text-sm text-gray-600 font-bold"
              >
                {t("contact.form.email")}
              </label>
              <input
                id="email"
                className="w-full bg-gray-300 text-gray-900 mt-1 md:mt-2 p-2 md:p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChangeCallback}
                onKeyDown={handleKeyDown}
                required
              />
            </div>
            <div className="flex flex-col flex-grow h-2/6">
              <label
                htmlFor="message"
                className="uppercase text-sm text-gray-600 font-bold"
              >
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                className="w-full min-h-full bg-gray-300 text-gray-900 mt-1 md:mt-2 p-2 md:p-3 rounded-lg focus:outline-none focus:shadow-outline text-xs"
                name="content"
                value={formData.content}
                onChange={handleChangeCallback}
                required
              ></textarea>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-sm xs:text-xs text-gray-100 sm:text-base font-semibold rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4"
              >
                {t("contact.form.send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
