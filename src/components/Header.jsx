import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw] md:mb[-30px]">
        {/* {.........Left side........} */}

        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appoinment <br /> with Trusted Doctors
        </p>
        <div className="flex  md:flex items-center gap-3 text-white text-sm font-light">
          {/* <div className="flex flex-col  md:flex items-center gap-3 text-white text-sm font-light"></div> */}
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            {/* <br className="hidden sm:block" /> */}
            schedule your appointment hassle-free.
          </p>
          {/* <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p> */}
        </div>
        <a
          href="#specilality"
          className=" flex items-center gap-2 bg-white px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300    "
        >
          Book appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* {.....Right side......} */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
