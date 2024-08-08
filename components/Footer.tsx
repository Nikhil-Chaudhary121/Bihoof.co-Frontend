import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center  gap-12">
      <div className="flex w-full md:flex-row flex-col gap-4 justify-between  ">
        <span className=" font-bold text-[#333] text-2xl">
          Binhoff<span className=" text-gray-30">.co</span>
        </span>
        <div className="">
          <ul className="flex md:flex-col md:justify-start justify-between gap-4 font-medium">
            <li>Product</li>
            <li>Install</li>
            <li>Quickstart</li>
          </ul>
        </div>
        <div>
          <ul className="flex md:flex-col md:justify-start justify-between gap-4  font-medium">
            <li>Blog</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
        <div className=" flex justify-between gap-4">
          <div className=" text-xl border rounded-full p-4 h-fit">
            <FaXTwitter />
          </div>
          <div className=" text-xl border rounded-full p-4 h-fit">
            <TiSocialFacebook />
          </div>
          <div className=" text-xl border rounded-full p-4 h-fit">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <p>�� 2024 All rights reserved.</p>
    </div>
  );
};

export default Footer;
