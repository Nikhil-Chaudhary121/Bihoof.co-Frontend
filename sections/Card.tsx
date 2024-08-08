const Card = () => {
  return (
    <section className="bg-bg-img-1 w-screen flex flex-col items-center text-center px-10 justify-center text-white content-center h-[45vh] bg-cover">
      <h1 className=" lg:text-[3.5rem] text-4xl  font-semibold">Our Mission</h1>
      <p className=" lg:text-xl md:text-lg text-md lg:w-[70%] md:w-[80%] w-[99%] leading-8 text-gray-20">
        Creating alternative investment opportunity, providing a stabilizing{" "}
        component to portfolios, combining low risk profiles with a value-add{" "}
        approach to yield attractive returns
      </p>
    </section>
  );
};

export default Card;
