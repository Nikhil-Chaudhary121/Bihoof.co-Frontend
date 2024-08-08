import NewsCard from "@/components/NewsCard";

const NewsPage = () => {
  return (
    <section className="flex flex-col items-center gap-16">
      <h1 className="text-[4rem] font-medium">Actual News</h1>
      <div className="grid sm:grid-cols-2 lg:gap-12 gap-8">
        <NewsCard
          mt={false}
          imageURL="/news1.avif"
          des="Investment attrectiveness in London does not decrease:market overview"
        />
        <NewsCard
          mt={true}
          imageURL="/news3.avif"
          des="Investment attrectiveness in London does not decrease:market overview"
        />
        <NewsCard
          mt={false}
          imageURL="/news4.avif"
          des="Investment attrectiveness in London does not decrease:market overview"
        />
        <NewsCard
          mt={true}
          imageURL="/news2.avif"
          des="Investment attrectiveness in London does not decrease:market overview"
        />
      </div>
      <h1 className="text-lg cursor-pointer font-medium">see more</h1>
    </section>
  );
};

export default NewsPage;
