function Projects() {
  return (
    <div className="w-[1440px] h-[1320px] flex flex-col items-center py-12">
      <div className="w-[1064px] h-[792px] flex flex-col items-center">
        <p className="font-inter font-medium text-[36px] text-shadow-custom mb-[72px] relative top-[30px] left-[5px] ">
          Projects
        </p>
        <div className="flex justify-between -mt-[30px] ml-[-100px]">
          <div className="w-[500px] h-[668px] p-16">
            <h2 className="font-playfair font-bold text-[29px] mb-4 tracking-wider">
              Random Jokes
            </h2>
            <p className="font-inter font-[16px] mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
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
                View on Github
              </a>
              <a href="#" className="relative left-[44px]">
                Go to app →
              </a>
            </div>
          </div>
          <div className="w-[500px] h-[668px] p-16 relative left-[64px] ">
            <h2 className="font-playfair font-bold text-[29px] mb-4 tracking-wider">
              Are you bored?
            </h2>
            <p className="font-inter font-[16px] mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia minima
              accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
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
                View on Github
              </a>
              <a href="#" className="relative left-[70px] top-[10px] ">
                Go to app →
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-[200px] font-inter font-medium relative top-[210px]">
          <div className="text-center relative bottom-[16px] left-[26px]">
            <p className="text-[42px] mb-2">Let’s work together on</p>
            <p className="text-[42px] relative bottom-[10px] left-[42px]">
              your next product.
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
