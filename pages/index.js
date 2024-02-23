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
      <div id='down' className="h-12"></div>
      {/* TODO: Services Heading */}
      <Services/>
      <SignUp/>
      <Footer/>
    </>
  );
};

export default Home;