import CHead from "@/components/CHead";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SignUp from "@/components/newsletter/SignUp";
import Services from "@/components/services/Services";
// TODO: Light Mode LOGO
const Home = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <CHead title='Home' />
      <Hero/>
      <div id='down' className="h-24"></div>
      <Services/>
      <SignUp/>
    </>
  );
};

export default Home;