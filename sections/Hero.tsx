import Button from "@/components/Button";
import HeroBtn from "@/components/HeroBtn";
import HeroNav from "@/components/HeroNav";

const Hero = () => {
  return (
    <section className=" flex flex-col md:px-6 md:py-4">
      <HeroNav />
      <section className=" relative lg:flex flex-col-reverse justify-between">
        <div className="flex flex-col   gap-12">
          <h1 className=" lg:mt-20 mt-16 tracking-wide font-gilroy xl:text-[12rem] md:text-[9rem] sm:text-[7.5rem] text-[6rem] xl:leading-[10rem] md:leading-[8rem] sm:leading-[6rem] leading-[5rem]  font-semibold ">
            Invest
            <br />
            in real
            <br />
            estate
          </h1>
          <div className="flex  w-full md:gap-10 gap-4 items-center ">
            <HeroBtn />
            <HeroBtn isTrue={false} />
          </div>
        </div>
        <div className=" flex gap-3 lg:absolute lg:left-[55%] lg:mt-20 mt-28 lg:pl-0 pl-[10vw] ">
          <img
            src="/hero1.avif"
            className=" xl:w-28 lg:w-20 md:w-28 md:h-[49vh] w-24 h-[44vh]  rounded-xl object-cover"
            alt=""
          />
          <img
            src="/hero2.avif"
            className="xl:w-28 lg:w-20 md:w-28 md:h-[49vh] w-24 h-[44vh] rounded-xl object-cover"
            alt=""
          />
          <img
            src="/hero3.avif"
            className="xl:w-28 lg:w-20 md:w-28 md:h-[49vh] w-24 h-[44vh] rounded-xl object-cover"
            alt=""
          />
          <img
            src="/hero4.avif"
            className="xl:w-28 lg:w-20 md:w-28 md:h-[49vh] w-24 h-[44vh] rounded-xl object-cover"
            alt=""
          />
          <img
            src="/hero5.avif"
            className="xl:w-28 lg:w-20 md:w-28 md:h-[49vh] w-24 h-[44vh] rounded-xl object-cover"
            alt=""
          />
          <img
            src="/hero6.avif"
            className="xl:w-28 lg:w-20 md:w-28 md:h-[49vh] w-24 h-[44vh] rounded-xl object-cover"
            alt=""
          />
          <img
            src="/hero7.avif"
            className="xl:w-28 lg:w-20 md:w-28 md:h-[49vh] w-24 h-[44vh] rounded-xl object-cover"
            alt=""
          />
          <img
            src="/hero8.avif"
            className="xl:w-28 lg:w-20 md:w-28 md:h-[49vh] w-24 h-[44vh] rounded-xl object-cover"
            alt=""
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
