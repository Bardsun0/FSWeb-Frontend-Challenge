import useTranslation from "../hooks/useTranslation";

function Projects() {
  const t = useTranslation();

  return (
    <div className="w-[1440px] h-[1320px] flex flex-col items-center py-12">
      <div className="w-[1064px] h-[792px] flex flex-col items-center">
        <p className="font-inter font-medium text-[36px] text-shadow-custom mb-[72px] relative top-[30px] left-[5px] ">
          {t("projectsTitle")}
        </p>
        <div className="flex justify-between -mt-[10px] ml-[-100px]">
          <div className="w-[500px] h-[668px] p-16 bg-custom-lightblue1 dark:bg-custom-projectsdark rounded-lg">
            <h2 className="font-playfair font-bold text-[29px] mb-4 tracking-wider">
              {t("randomJokes")}
            </h2>
            <p className="font-inter font-[16px] mb-6">
              {t("projectDescription1")}
            </p>
            <div className="font-playfair font-extrabold flex flex-wrap gap-2 mb-10 relative right-[15px]">
              <span className="bg-white px-3 py-1 rounded-full w-[91px] h-[32px] dark:bg-custom-darkmodegray">
                react
              </span>
              <span className="bg-white px-3 py-1 rounded-full w-[91px] h-[32px] dark:bg-custom-darkmodegray">
                vercel
              </span>
              <span className="bg-white px-3 py-1 rounded-full w-[91px] h-[32px] dark:bg-custom-darkmodegray">
                axios
              </span>
              <span className="bg-white px-3 py-1 rounded-full w-[91px] h-[32px] dark:bg-custom-darkmodegray">
                router
              </span>
            </div>
            <div className="font-inter font-bold text-[20px] flex justify-between">
              <a href="#" className="mr-12">
                {t("viewOnGithub")}
              </a>
              <a href="#" className="relative left-[44px]">
                {t("goToApp")}
              </a>
            </div>
            <div className="w-[500px] h-[287px] relative right-[40px] top-[16px]">
              <img src="/src/assets/Group 104.png" />
            </div>
          </div>
          <div className="w-[500px] h-[668px] p-16 relative left-[64px] bg-custom-lightgreen dark:bg-custom-projectsdark1 rounded-lg">
            <h2 className="font-playfair font-bold text-[29px] mb-4 tracking-wider">
              {t("bored")}
            </h2>
            <p className="font-inter font-[16px] mb-6">
              {t("projectDescription2")}
            </p>
            <div className="font-playfair font-extrabold flex flex-wrap gap-2 mb-6">
              <span className="bg-white px-3 py-1 rounded-full w-[91px] h-[32px] dark:bg-custom-darkmodegray">
                react
              </span>
              <span className="bg-white px-3 py-1 rounded-full w-[91px] h-[32px] dark:bg-custom-darkmodegray">
                redux
              </span>
              <span className="bg-white px-3 py-1 rounded-full w-[91px] h-[32px] dark:bg-custom-darkmodegray">
                axios
              </span>
              <span className="bg-white px-3 py-1 rounded-full w-[91px] h-[32px] dark:bg-custom-darkmodegray">
                router
              </span>
              <span className="bg-white px-3 py-1 rounded-full w-[91px] h-[32px] dark:bg-custom-darkmodegray">
                vercel
              </span>
            </div>
            <div className="font-inter font-bold text-[20px]">
              <a href="#" className="mr-20 relative top-[10px]">
                {t("viewOnGithub")}
              </a>
              <a href="#" className="relative left-[70px] top-[10px] ">
                {t("goToApp")}
              </a>
            </div>
            <div className="w-[500px] h-[287px] relative right-[40px] top-[30px]">
              <img src="/src/assets/Group 104.png" />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-[200px] font-inter font-medium relative top-[190px]">
          <div className="text-center relative bottom-[16px] left-[26px]">
            <p className="text-[42px] mb-2">{t("workTogether")}</p>
            <p className="text-[42px] relative bottom-[10px] left-[42px]">
              {t("yourNextProduct")}
            </p>
          </div>
          <div className="ml-8 text-[24px] flex flex-col relative left-[60px] bottom-[16px]">
            <a href="https://github.com" className="text-custom-blue2">
              Github
            </a>
            <a href="https://personalblog.com" className="text-custom-black">
              Personal Blog
            </a>
            <a href="https://linkedin.com" className="text-custom-darkblue">
              LinkedIn
            </a>
            <a
              href="mailto:email@example.com"
              className="text-custom-darkpink relative bottom-[6px]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
