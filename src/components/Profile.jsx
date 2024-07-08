function Profile() {
  return (
    <div className="w-[1440px] h-[546px] font-inter text-custom-black px-[176px] py-[68px]">
      <p className="text-[36px] text-shadow-custom font-medium mb-[68px] text-center">
        Profile
      </p>
      <div className="flex justify-between space-x-8">
        <div className="w-[508px] h-[322px] text-[18px] bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-[24px] text-custom-pink1 mb-4">
            Basic Information
          </h2>
          <div className="space-y-4">
            <div className="flex">
              <span className="font-semibold w-32">Doğum tarihi:</span>
              <span>24.03.1996</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">İkamet Şehri:</span>
              <span>Ankara</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Eğitim Durumu:</span>
              <span>Hacettepe Ünv. Biyoloji Lisans, 2016</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Tercih Ettiği Rol:</span>
              <span>Frontend, UI</span>
            </div>
          </div>
        </div>
        <div className="w-[476px] h-[241px]">
          <h2 className="text-[24px] mb-4">About me</h2>
          <div className="relative mb-4">
            <div className="absolute bottom-[-5px] left-[-15px] w-[148px] h-[31px] bg-custom-lightblue bg-opacity-80 rounded-md"></div>
          </div>
          <p className="text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p className="text-[18px] mt-4">
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
