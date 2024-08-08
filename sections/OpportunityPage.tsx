import OpportunityCard from "@/components/OpportunityCard";
import { PiPottedPlantThin } from "react-icons/pi";
import { CiShare2 } from "react-icons/ci";
import { CiUmbrella } from "react-icons/ci";

const OpportunityPage = () => {
  return (
    <div className=" flex flex-col items-center gap-12 ">
      <p className=" xl:text-[4rem] md:text-[3rem] sm:text-4xl xs:text-3xl text-2xl   text-[#444] font-medium text-center">
        The unique investment opportunity
      </p>
      <div className=" flex xl:gap-8 gap-6 xl:px-[10vw] md:flex-row flex-col">
        <OpportunityCard
          icon={<PiPottedPlantThin size={52} />}
          title="Private Investors"
          des="Providing private investors with investment opportunities usually available only to major institutional invastors."
        />

        <OpportunityCard
          icon={<CiShare2 size={52} />}
          title="Aligned interests"
          des="Our local oprating partners invest approximately 35% in each deal, up front, thereby creating shared and common interested with us "
        />

        <OpportunityCard
          icon={<CiUmbrella size={52} />}
          title="Spread the Risks"
          des="Offering a way to spread the risk across a diverse portfolio of income-producting properties througout the "
        />
      </div>
    </div>
  );
};

export default OpportunityPage;
