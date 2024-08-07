import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFormData } from "../actions/actions";
import useTranslation from "../hooks/useTranslation";
import useNavigateWithToast from "../hooks/useNavigateWithToast";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const t = useTranslation();

  const onSubmit = (data) => {
    dispatch(setFormData(data));
    console.log("Form data:", data);
    navigateWithToast("/thank-you", t("formToContact"));
  };

  const navigateWithToast = useNavigateWithToast();

  return (
    <div className="w-[1440px] min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6">{t("contactMe")}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[500px]">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            {t("name")}
          </label>
          <input
            {...register("name", { required: t("nameRequired") })}
            className="w-full p-2 border rounded"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">
            {t("lastName")}
          </label>
          <input
            {...register("lastName", { required: t("lastNameRequired") })}
            className="w-full p-2 border rounded"
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2">
            {t("phoneNumber")}
          </label>
          <input
            {...register("phoneNumber", { required: t("phoneNumberRequired") })}
            className="w-full p-2 border rounded"
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            {t("email")}
          </label>
          <input
            {...register("email", {
              required: t("emailRequired"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("invalidEmail"),
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            {t("message")}
          </label>
          <textarea
            {...register("message", { required: t("messageRequired") })}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-custom-pink text-white p-2 rounded mt-4"
        >
          {t("submit")}
        </button>
      </form>
      <button
        onClick={() => navigate("/")}
        className="mt-4 bg-gray-500 text-white p-2 rounded"
      >
        {t("backToHome")}
      </button>
    </div>
  );
};

export default ContactMe;
