import CHead from "@/components/CHead";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <CHead title='Home' />
      <Navbar />
      <Hero/>
    </>
  );
};

export default Home;