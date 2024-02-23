import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const linkHoverVariant = {
    initial: { width: "0%" },
    hover: { width: "100%" }
  };
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
          className='text-lg text-overlay0'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          {service.description}
        </motion.p>
        <motion.a
          href={service.link}
          className='inline-block text-blue'
          initial='initial'
          whileHover='hover'
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          Learn More
          <motion.div
            className='bg-blue -mt-1 h-[2px] w-0'
            variants={linkHoverVariant}
            transition={{ 
                duration: 0.3,
                ease: 'easeOut'
            }}
          />
        </motion.a>
      </motion.div>
    </>
  );
};

export default ServiceCard;
