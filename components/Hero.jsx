import { motion } from "framer-motion";

const Hero = () => {
    return (
        <>
            <section className="text-center justify-center items-center flex flex-col gap-4 bg-crust py-16">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-bold text-3xl"
                >
                    Welcome to Green Energy!
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col"
                >
                    <p>
                        We are a company that is dedicated to informing you with the best green energy solutions.
                    </p>
                    <p>
                        We are here to help you make the best decisions for your home and the environment.
                    </p>
                </motion.div>
                <motion.span
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center items-center gap-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="border-green-500 border-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Read More
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-green-500 border-2 border-green-700 hover:bg-base text-white font-bold py-2 px-4 rounded"
                    >
                        Show Me Prices!
                    </motion.button>
                </motion.span>
            </section>
        </>
    );
}

export default Hero;
