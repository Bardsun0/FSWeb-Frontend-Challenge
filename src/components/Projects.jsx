function Projects() {
  return (
    <div className="w-[1440px] h-[1320px]">
      <div className="w-[1064px] h-[792px]">
        <p className="font-inter font-medium text-[36px] text-shadow-custom">
          Projects
        </p>
        <div className="w-[500px] h-[668px]">
          <h2 className="font-playfair font-bold text-[29px]">Random Jokes</h2>
          <p className="font-inter font-[16px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <div className="font-playfair font-bold flex flex-wrap gap-2 mb-4">
            <span className="bg-white px-3 py-1 rounded-full">react</span>
            <span className="bg-white px-3 py-1 rounded-full">vercel</span>
            <span className="bg-white px-3 py-1 rounded-full">axios</span>
            <span className="bg-white px-3 py-1 rounded-full">router</span>
          </div>
          <div className="font-inter font-semibold text-[20px]">
            <a href="#" className="mr-12">
              View on Github
            </a>
            <a href="#" className="">
              Go to app →
            </a>
          </div>
        </div>
        <div className="w-[500px] h-[668px]">
          <h2 className="font-playfair font-bold text-[29px]">
            Are you bored?
          </h2>
          <p className="font-inter font-[16px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
          <div className="font-playfair font-bold flex flex-wrap gap-2 mb-4">
            <span className="bg-white px-3 py-1 rounded-full">react</span>
            <span className="bg-white px-3 py-1 rounded-full">redux</span>
            <span className="bg-white px-3 py-1 rounded-full">axios</span>
            <span className="bg-white px-3 py-1 rounded-full">router</span>
            <span className="bg-white px-3 py-1 rounded-full">vercel</span>
          </div>
          <div className="font-inter font-semibold text-[20px]">
            <a href="#" className="mr-12">
              View on Github
            </a>
            <a href="#" className="">
              Go to app →
            </a>
          </div>
        </div>
      </div>
      <div className="w-[758px] h-[137px]">
        <p className="font-inter font-medium text-[42px]">
          Let’s work together on your next product.
        </p>
        <div className="font-inter font-medium text-[24px] flex justify-center gap-5">
          <a href="https://github.com" className="text-custom-blue2">
            GitHub
          </a>
          <a href="https://personalblog.com" className="text-custom-black">
            Personal Blog
          </a>
          <a href="https://linkedin.com" className="text-custom-darkblue">
            LinkedIn
          </a>
          <a href="mailto:email@example.com" className="text-custom-darkpink">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
