import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.section
        className='text-center -mt-[96px] justify-center items-center flex flex-col gap-8 bg-crust py-16 h-screen px-12 text-crust dark:text-text'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/HeroBG.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='font-bold text-3xl'
        >
          Welcome to Green Energy!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex flex-col'
        >
          <p>
            We are a company that is dedicated to informing you with the best
            green energy solutions.
          </p>
          <p>
            We are here to help you make the best decisions for your home and
            the environment.
          </p>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='flex flex-col-reverse justify-center items-center gap-4'
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              document
                .getElementById("down")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className='border-green border-2 hover:bg-green font-bold py-2 px-4 rounded hover:text-crust'
          >
            Read More
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='bg-green border-2 border-green hover:bg-transparent font-bold py-2 px-4 rounded text-crust hover:text-base dark:hover:text-text'
            onClick={() => {
              window.location.href = "/pricing";
            }}
          >
            Show Me Prices!
          </motion.button>
        </motion.span>
      </motion.section>
    </>
  );
};

export default Hero;
