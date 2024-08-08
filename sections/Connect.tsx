import Button from "@/components/Button";
import ConnectBtn from "@/components/ConnectBtn";

const Connect = () => {
  return (
    <section className="bg-bg-img-2 w-screen  flex items-center justify-center   text-white content-center h-[45vh] bg-cover">
      <div className="gap-8 flex flex-col px-4 items-center justify-center w-fit">
        <h1 className=" lg:text-[3.5rem] md:text-[2.5rem] text-[2rem] text-center font-medium lg:leading-[4rem]">
          {" "}
          Learn more about investing with Binhoff
        </h1>
        <div className=" flex items-center gap-2 ">
          <input
            type="text"
            className=" flex-1 lg:h-[3.5rem] h-[3rem] px-6 rounded-xl "
            placeholder="Enter Your Email"
            name=""
            id=""
          />
          <ConnectBtn />
        </div>
      </div>
    </section>
  );
};

export default Connect;
