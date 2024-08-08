const HeroBtn = ({ isTrue = true }) => {
  return isTrue ? (
    <button className=" md:px-10 sm:px-6 px-4 md:py-6 sm:py-5 py-4 w-fit sm:text-md text-sm   border rounded-2xl bg-green-400 text-white">
      Request a call
    </button>
  ) : (
    <button className=" md:px-10 sm:px-6 px-4 md:py-6 sm:py-5 py-4  w-fit  sm:text-md text-sm border rounded-2xl">
      To get the contribution
    </button>
  );
};

export default HeroBtn;
