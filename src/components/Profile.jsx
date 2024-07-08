function Profile() {
  return (
    <div className="w-[1440px] h-[546px] font-inter text-custom-black px-[206px] py-[68px]">
      <p className="text-[36px] text-shadow-custom font-medium mb-[68px] text-center">
        Profile
      </p>
      <div className="flex justify-between items-start">
        <div className="w-[508px] h-[322px] text-[18px] bg-white rounded-xl p-6 -mt-[44px] ml-[-20px]">
          <h2 className="text-[24px] text-custom-pink1 mb-4 font-playfair font-medium">
            Basic Information
          </h2>
          <div className="space-y-4">
            <div className="flex">
              <span className="font-bold w-40">Doğum tarihi</span>
              <span className="font-medium">24.03.1996</span>
            </div>
            <div className="flex">
              <span className="font-bold w-40">İkamet Şehri</span>
              <span className="font-medium">Ankara</span>
            </div>
            <div className="flex">
              <span className="font-bold w-40">Eğitim Durumu</span>
              <span className="font-medium">
                Hacettepe Ünv. Biyoloji Lisans, 2016
              </span>
            </div>
            <div className="flex">
              <span className="font-bold w-40">Tercih Ettiği Rol</span>
              <span className="font-medium">Frontend, UI</span>
            </div>
          </div>
        </div>
        <div className="w-[476px] h-[241px]">
          <h2 className="text-[24px] mb-4 font-playfair font-medium">
            About me
          </h2>
          <div className="relative text-[18px] font-medium">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p className="mt-6">
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
