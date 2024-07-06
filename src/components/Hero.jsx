import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1107px] h-[493px] font-inter flex justify-between">
      <div className="flex-1 pr-8">
        <h1 className="text-3xl font-normal mb-4">
          Hi!<span className="ml-2">👋</span>
        </h1>
        <p className="text-[42px] font-bold leading-tight mb-8">
          I'm Ozan. I'm a frontend developer. I can craft solid and scalable
          frontend products. Let's meet!
        </p>
        <div className="flex items-center space-x-4 mt-12">
          <FaLinkedin size={34} />
          <FaGithub size={34} />
        </div>
        <div className="text-lg leading-relaxed mt-4">
          <p>
            Currently <span className="text-custom-pink">Freelancing</span> for{" "}
            <span className="text-custom-pink">
              UX, UI, & Web Design Project
            </span>
            .
          </p>
          <p>
            Invite me to join your team →{" "}
            <a
              href="mailto:ozangunes2894@gmail.com"
              className="text-custom-pink"
            >
              ozangunes2894@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="w-[361px] h-[361px] rounded-[40px] overflow-hidden bg-custom-pink">
        {/* Profile photo will go here */}
      </div>
    </div>
  );
};

export default Hero;
