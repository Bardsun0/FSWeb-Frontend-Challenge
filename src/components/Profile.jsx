import { useEffect, useState } from "react";
import { getPersonalData } from "../api/api";

function Profile() {
  const [personalData, setPersonalData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      getPersonalData()
        .then((data) => {
          setPersonalData(data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="w-[1440px] h-[546px] font-inter text-custom-black px-[206px] py-[68px]">
      <p className="text-[36px] text-shadow-custom font-medium mb-[68px] text-center dark:text-white">
        Profile
      </p>
      <div className="flex justify-between items-start">
        <div className="w-[508px] h-[322px] text-[18px] bg-white rounded-xl p-6 -mt-[44px] ml-[-20px] dark:bg-custom-darkmodegray">
          <h2 className="text-[24px] text-custom-pink1 mb-4 font-playfair font-medium tracking-wider">
            Basic Information
          </h2>
          {personalData && (
            <div className="space-y-4 dark:text-white">
              <div className="flex">
                <span className="font-bold w-40">Date Of Birth</span>
                <span className="font-medium">{personalData.dateOfBirth}</span>
              </div>
              <div className="flex">
                <span className="font-bold w-40">City</span>
                <span className="font-medium">{personalData.city}</span>
              </div>
              <div className="flex">
                <span className="font-bold w-40">Education</span>
                <span className="font-medium">{personalData.education}</span>
              </div>
              <div className="flex">
                <span className="font-bold w-40">Preferred Role</span>
                <span className="font-medium">
                  {personalData.preferredRole}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="w-[476px] h-[241px] dark:text-white">
          <h2 className="text-[24px] mb-4 font-playfair font-medium">
            About me
          </h2>
          <div className="relative text-[18px] font-medium">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p className="mt-6">
              Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
