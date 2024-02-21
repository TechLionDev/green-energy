import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='bg-crust rounded-lg shadow-lg p-6 h-full'
      >
        <motion.img
          src={service.img}
          alt='service'
          className='lg:w-80 w-40 lg:h-80 h-40 rounded-full mx-auto mb-6 -mt-24 lg:-mt-48'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.h2
          className='text-2xl font-bold mb-2'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {service.name}
        </motion.h2>
        <motion.p
          className='text-lg text-gray-600'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          {service.description}
        </motion.p>
        <motion.a
          href={service.link}
          className='text-blue-500 hover:underline'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </>
  );
};

export default ServiceCard;
