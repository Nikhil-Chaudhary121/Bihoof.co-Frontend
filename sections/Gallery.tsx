const Gallery = () => {
  return (
    <div className=" lg:pl-[15vw] md:pl-[10vw] sm:pl-[6vw]  flex flex-col   ">
      <div className=" flex justify-between items-center flex-1 w-full">
        <h1 className=" lg:text-[3rem] md:text-3xl sm:text-4xl text-xl font-semibold text-[#444]">
          Binhoff Gallery
        </h1>
        <span className=" lg:text-3xl md:text-xl sm:text-md text-sm">
          01/19
        </span>
      </div>
      <div className="  items-center flex lg:gap-10 gap-4 mt-10 pb-12">
        <img
          src="/gallery1.avif"
          className=" lg:h-[55vh] md:h-[45vw] h-[70vw] cursor-pointer min-w-[65vw] object-cover rounded-3xl"
          alt=""
        />
        <img
          src="/gallery2.avif"
          className=" lg:h-[50vh] md:h-[40vw] h-[60vw] min-w-[65vw] cursor-pointer object-cover rounded-3xl"
          alt=""
        />
        <img
          src="/gallery3.avif"
          className=" lg:h-[50vh] md:h-[40vw] h-[60vw] min-w-[65vw] cursor-pointer object-cover rounded-3xl"
          alt=""
        />
        <img
          src="/gallery4.avif"
          className=" lg:h-[50vh] md:h-[40vw] h-[60vw] min-w-[65vw] cursor-pointer object-cover rounded-3xl"
          alt=""
        />
        <img
          src="/gallery5.avif"
          className=" lg:h-[50vh] md:h-[40vw] h-[60vw] min-w-[65vw] cursor-pointer object-cover rounded-3xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
