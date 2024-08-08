const NewsCard = ({
  imageURL,
  des,
  mt,
}: {
  imageURL: string;
  des: string;
  mt: boolean;
}) => {
  return (
    <div
      className={`flex flex-col w-fit lg:gap-6 gap-4 ${mt ? "md:mt-20" : ""} `}
    >
      <img
        src={imageURL}
        className=" cursor-pointer object-cover lg:h-[65vh] h-[55vh] rounded-3xl"
        alt=""
      />
      <p className=" text-lg leading-7">{des}</p>
      <p className=" cursor-pointer text-lg text-green-700 font-semibold">
        More details
      </p>
    </div>
  );
};

export default NewsCard;
