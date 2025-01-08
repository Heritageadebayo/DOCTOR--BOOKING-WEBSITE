import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            expedita minima dolore in ab repellendus corrupti? Eligendi
            laudantium illo iure cumque odio, officiis, impedit neque numquam
            dolorem,
          </p>
        </div>
        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+234-80-6244-5157</li>
            <li>heritageadbayor1@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* copyright */}
        <hr />
        <p className="py-5 text-sm text-center">
          copyright 2024@ prescripto-all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
