import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  <>
    <div class="flex flex-col">
      <Navbar />
      <div className="h-[96px]"></div>
      <div class="z-0 h-full flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </>
  );
}
