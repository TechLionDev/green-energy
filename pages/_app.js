import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <div class="z-0 h-screen">
      <Component {...pageProps} />
    </div>
  </>
  );
}
