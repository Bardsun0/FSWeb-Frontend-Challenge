import { usePersonalData } from "../hooks/usePersonalData";
import useTranslation from "../hooks/useTranslation";

function Profile() {
  const { data: personalData } = usePersonalData();
  const t = useTranslation();

  return (
    <div className="w-[1440px] h-[546px] font-inter text-custom-black px-[206px] py-[68px]">
      <p className="text-[36px] text-shadow-custom font-medium mb-[68px] text-center dark:text-white">
        {t("profileTitle")}
      </p>
      <div className="flex justify-between items-start">
        <div className="w-[508px] h-[322px] bg-custom-darkmodegray dark:bg-custom-black rounded-xl -mt-[36px] ml-[-14px]">
          <div className="w-[500px] h-[313px] text-[18px] bg-white rounded-xl p-8 dark:bg-custom-darkmodegray">
            <h2 className="text-[24px] text-custom-pink1 mb-8 font-playfair font-medium tracking-wider">
              {t("basicInformation")}
            </h2>
            {personalData && (
              <div className="space-y-4 dark:text-white">
                <div className="flex">
                  <span className="font-bold w-40">{t("dateOfBirth")}</span>
                  <span className="font-medium">
                    {personalData.dateOfBirth}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-bold w-40">{t("city")}</span>
                  <span className="font-medium">{personalData.city}</span>
                </div>
                <div className="flex">
                  <span className="font-bold w-40">{t("education")}</span>
                  <span className="font-medium">{personalData.education}</span>
                </div>
                <div className="flex">
                  <span className="font-bold w-40">{t("preferredRole")}</span>
                  <span className="font-medium">
                    {personalData.preferredRole}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[476px] h-[241px] dark:text-white">
          <h2 className="text-[24px] mb-4 font-playfair font-medium">
            {t("aboutMe")}
          </h2>
          <div className="relative text-[18px] font-medium">
            <p>{t("aboutMeDescription1")}</p>
            <p className="mt-6">{t("aboutMeDescription2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
