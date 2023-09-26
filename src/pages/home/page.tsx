import PageLayout from "../../layout/PageLayout";
import Collections from "./Collections";
import Hero from "./Hero";

function Home() {
  return (
    <PageLayout>
      <div className="bg-[url(https://res.cloudinary.com/daclozrmx/image/upload/v1695742726/veeplush/portrait-beautiful-woman-with-long-straight-brown-hair-studio_1_otp5ao.png)] w-[100vw] bg-contain md:bg-cover bg-no-repeat">
        <Hero />
        <Collections />
        <Collections />
      </div>
    </PageLayout>
  );
}

export default Home;
