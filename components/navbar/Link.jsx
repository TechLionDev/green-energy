import { motion } from 'framer-motion';

const Link = ({ link }) => {
  // Define variants for the animation
  const linkHoverVariant = {
    initial: { width: '0%' }, // Initial state with width 0%
    hover: { width: '100%' }   // State when hovered with width 100%
  };

  return (
    <>
      <span className="inline-block relative">
        <motion.a href={link.url} className="inline-block"
        initial="initial"
        whileHover="hover"
        >
          {link.name}
          <motion.div
            className="bg-green-500 h-[2px] w-0"
            variants={linkHoverVariant}
            transition={{ 
                duration: 0.3,
                ease: 'easeOut'
            }}
          />
        </motion.a>
      </span>
    </>
  );
};

export default Link;
