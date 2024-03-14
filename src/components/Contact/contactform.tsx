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
    <div className="max-w-screen-xl min-w-96 flex justify-center p-4 items-center md:px-8 lg:px-16 xl:px-32 mx-auto component-height w-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 bg-stone-50 text-gray-900 rounded-lg shadow-lg">
        <div className="p-6">
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
          <form onSubmit={handleSubmit}>
            <div className="mb-1 sm:mb-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                {t("contact.form.subject")}
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChangeCallback}
                onKeyDown={handleKeyDown}
                required
              />
            </div>
            <div className="mb-1 sm:mb-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                {t("contact.form.email")}
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChangeCallback}
                onKeyDown={handleKeyDown}
                required
              />
            </div>
            <div className="mb-2 sm:mb-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                {t("contact.form.message")}
              </span>
              <textarea
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="content"
                value={formData.content}
                onChange={handleChangeCallback}
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600text-sm xs:text-xs text-gray-100 sm:text-base font-semibold rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4"
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
