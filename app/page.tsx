import Connect from "@/sections/Connect";
import Nav from "@/components/Nav";
import Card from "@/sections/Card";
import Description from "@/sections/Description";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import NewsPage from "@/sections/NewsPage";
import OpportunityPage from "@/sections/OpportunityPage";
import ReviewBox from "@/sections/ReviewBox";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="h-fit w-full font-[Poppins] hide-scrollbar ">
      <section className="py-6 px-16">
        <Nav />
      </section>
      <section className="py-6 md:px-16 px-10">
        <Hero />
      </section>
      <section className=" lg:pl-[20vw] lg:px-0 px-12 py-44 flex justify-center items-center">
        <Description />
      </section>
      <section className="px-16 py-16 relative">
        <Gallery />
      </section>
      <section className="py-20">
        <Card />
      </section>
      <section className="md:px-16 px-4 py-16">
        <ReviewBox />
      </section>
      <section className="xl:px-[20vw] lg:px-[15vw] md:px-[10vw] px-8 py-16">
        <NewsPage />
      </section>
      <section className="px-16 py-20">
        <OpportunityPage />
      </section>
      <section className=" py-16">
        <Connect />
      </section>
      <section className="px-16   py-8">
        <Footer />
      </section>
    </main>
  );
}
