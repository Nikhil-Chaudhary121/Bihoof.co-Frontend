import Button from "./Button";
import { RiMenu4Fill } from "react-icons/ri";

const Nav = () => {
  return (
    <header>
      <nav className="font-[Poppins] pb-6 w-full flex justify-between items-center border-b">
        <span className=" font-bold text-[#333] text-2xl">
          Binhoff<span className=" text-gray-30">.co</span>
        </span>
        <span className="lg:hidden flex">
          <RiMenu4Fill size={28} cursor={"pointer"} />
        </span>
        <ul className=" lg:flex hidden justify-center gap-10 xl:gap-20 items-center">
          <li>Home</li>
          <li>Description</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Connect</li>
        </ul>
        <span className=" lg:flex hidden ">
          <Button />
        </span>
      </nav>
    </header>
  );
};

export default Nav;
