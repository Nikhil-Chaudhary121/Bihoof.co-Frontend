import { BiSolidQuoteRight } from "react-icons/bi";
const ReviewBox = () => {
  return (
    <section className="flex justify-center xl:px-[18vw] lg:px-[12vw] md:px-[4vw] px-4">
      <div className="flex flex-col lg:gap-12 md:gap-8 gap-4 ">
        <h1 className="md:text-[4rem] sm:text-[3rem] text-4xl font-medium">
          Trusted by clients
        </h1>
        <div className=" flex lg:gap-20 md:gap-12 gap-8 ">
          <span className="lg:text-[4rem] md:text-[3rem] text-4xl ">
            <BiSolidQuoteRight className=" text-green-500" />
          </span>
          <div className=" flex flex-col md:gap-8 gap-4">
            <p className=" md:flex hidden md:text-sm text-xs md:leading-6 leading-5 tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto veniam harum quibusdam omnis Cupiditate dolore
              architecto soluta obcaecati. Itaque laudantium accusantium
              doloremque vel odit cumque corrupti earum modi aperiam ,
              exercitationem laborum, nobis sed a necessitatibus amet voluptate
              facere perferendis, minima expedita alias culpa, repellat,
              quisquam modi sit enim natus officia eaque doloremque.
            </p>
            <p className="md:hidden flex md:text-sm text-xs md:leading-6 leading-5 tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto veniam harum quibusdam omnis Cupiditate dolore
              architecto soluta obcaecati. Itaque laudantium accusantium
              doloremque vel odit cumque corrupti earum modi aperiam...
            </p>
            <div className="h-[1px] w-full bg-gray-20"></div>
            <div className=" flex justify-between items-center">
              <div className=" flex items-center md:gap-8 gap-2">
                <img
                  src="https://images.unsplash.com/photo-1722799037558-69a4dc8e08d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                  alt=""
                  className=" md:w-24 md:h-24 sm:w-16 sm:h-16 w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h1 className=" lg:text-2xl md:text-xl text-md font-semibold leading-none">
                    Sabastion Westergren
                  </h1>
                  <h1 className=" text-gray-20 md:text-xl text-xs">
                    Development director
                  </h1>
                </div>
              </div>
              <span className=" lg:text-4xl sm:flex hidden md:text-3xl text-sm">
                01/14
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewBox;
