import { FaChevronDown } from "react-icons/fa6";
const HeroNav = () => {
  return (
    <div className=" flex justify-between items-center w-full ">
      <span className=" text-xl font-semibold">Home Page</span>
      <span className=" flex gap-1 items-center">
        En <FaChevronDown size={10} />
      </span>
    </div>
  );
};

export default HeroNav;
