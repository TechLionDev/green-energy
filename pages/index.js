import CHead from "@/components/CHead";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SignUp from "@/components/newsletter/SignUp";
import Services from "@/components/services/Services";

const Home = () => {
  return (
    <>
      <CHead title='Home' />
      <Hero/>
      <Services/>
      <SignUp/>
      <Footer/>
    </>
  );
};

export default Home;