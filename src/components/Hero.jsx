import useTranslation from "../hooks/useTranslation";

const Hero = () => {
  const t = useTranslation();

  return (
    <div className="w-[1107px] h-[493px] font-inter flex justify-between">
      <div className="flex-1 pr-8 flex flex-col justify-between font-semibold">
        <h1 className="text-3xl font-normal mb-4 text-shadow-custom">
          {t("greeting")}
          <span className="ml-2">👋</span>
        </h1>
        <div className="relative">
          <p className="text-[42px] font-medium text-shadow-custom">
            {t("p1")}
          </p>
        </div>
        <div className="text-[42px] mb-2 font-medium text-shadow-custom">
          {t("p2")}
          <p>{t("letsMeet")}</p>
        </div>
        <div className="flex items-center space-x-4 mt-12">
          <a
            href="https://www.linkedin.com/in/ozan-g%C3%BCne%C5%9F-500097312/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/LinkedIn.png"
              alt="LinkedIn"
              className="w-[31px] h-[33.95px]"
            />
          </a>
          <a
            href="https://github.com/Bardsun0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/gitHub.png"
              alt="GitHub"
              className="w-[34px] h-[36.14px]"
            />
          </a>
        </div>
        <div className="text-lg leading-relaxed mt-4 font-normal text-custom-black text-shadow-custom dark:text-white">
          <p>
            {t("currently")}{" "}
            <span className="text-custom-darkpink">{t("freelancing")}</span>{" "}
            {t("for")}{" "}
            <span className="text-custom-darkpink">{t("afterFor")} </span>
            {t("project")}
          </p>
          <p>
            {t("inviteMessage")}{" "}
            <a
              href="mailto:ozangunes2894@gmail.com"
              className="text-custom-darkpink underline"
            >
              ozangunes2894@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="relative pt-10 pr-5">
        <div className="w-[361px] h-[361px] rounded-[40px] overflow-hidden bg-custom-pink flex items-center justify-center">
          <img
            src="/IMG_04261.jpg"
            alt="Profile"
            className="w-[341px] h-[341px] rounded-[22px] object-cover absolute bottom-[80px] left-[30px] shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
