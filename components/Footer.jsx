import { motion } from "framer-motion";


const Footer = () => {
    const linkHoverVariant = {
        initial: { width: '0%'},
        hover: { width: '100%' }
      };
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-base text-white p-4 text-center'
    >
      <p>
        &copy; 2024 {' '}
        {/* <a
          href='https://techlion.dev'
          target='_blank'
          rel='noreferrer noopener'
          className='text-green hover:underline '
        >
          TechLion Dev
        </a> */}
        <motion.a href="https://techlion.dev" className="inline-block text-green"
        initial="initial"
        whileHover="hover"
        >
          TechLion Dev
          <motion.div
            className="bg-green -mt-1 h-[2px] w-0"
            variants={linkHoverVariant}
            transition={{ 
                duration: 0.3,
                ease: 'easeOut'
            }}
          />
        </motion.a>
      </p>
    </motion.footer>
  );
};

export default Footer;
