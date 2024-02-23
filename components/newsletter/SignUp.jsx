import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <>
      {/* TODO: Make Form Actually Save Emails */}
      <motion.section
        className='bg-crust py-20'
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center'
          >
            <h2 className='text-3xl font-semibold text-text'>
              Sign up for updates
            </h2>
            <p className='mt-2 text-text'>
              Get the latest news and updates from our company
            </p>
            <motion.div className='flex flex-col mt-4 w-full lg:w-1/2 gap-2'>
              <motion.input
                whileHover={{ scale: 1.05 }}
                type='email'
                className='w-full p-4 border-crust focus:border-green border-2 rounded-md bg-base'
                placeholder='Enter your email'
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className='bg-green text-crust font-bold px-4 py-3 rounded-md rounded-br-md'
              >
                Sign up
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default SignUp;
