import { Icon } from "next/dist/lib/metadata/types/metadata-types";

const OpportunityCard = ({
  icon,
  title,
  des,
}: {
  icon: React.ReactNode;
  title: string;
  des: string;
}) => {
  return (
    <div className=" flex flex-col bg-zinc-100 p-8 rounded-lg gap-2">
      {icon}
      <h2 className="lg:text-2xl md:text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 lg:text-md text-sm lg:leading-7 leading-5 tracking-wide w-[90%]">
        {des}
      </p>
      <p className=" lg:text-xl text-md font-bold text-green-600 cursor-pointer">
        View More
      </p>
    </div>
  );
};

export default OpportunityCard;
