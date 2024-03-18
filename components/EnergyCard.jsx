import { motion } from "framer-motion";

const EnergyCard = ({ title, content, imgsrc, imgalt, left }) => {
  if (left) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='sm:rounded-md sm:bg-surface0 sm:w-full sm:p-4 sm:m-auto sm:mt-8 sm:relative sm:flex sm:flex-wrap sm:overflow-auto flex flex-col-reverse rounded-md bg-surface0 w-full p-4 m-auto mt-8 flex-wrap gap-4'
        >
          <motion.span className='sm:flex sm:flex-col sm:w-full sm:absolute sm:h-full sm:rounded-md sm:top-0 sm:left-0 sm:p-6 sm:bg-gradient-to-r sm:from-surface0 sm:to-transparent sm:from-60% sm:gap-4 flex flex-col w-fit h-fit gap-2'>
            <motion.h1 className='text-2xl font-bold'>{title}</motion.h1>
            <motion.p className='sm:max-w-[58%]'>{content}</motion.p>
          </motion.span>
          <motion.img
            src={imgsrc}
            alt={imgalt}
            className='sm:w-1/2 sm:h-1/4 sm:rounded-md sm:ml-auto rounded-md'
          />
        </motion.div>
      </>
    );
  } else {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='sm:flex sm:rounded-md sm:bg-surface0 sm:w-full sm:p-4 sm:m-auto sm:mt-8 sm:relative flex flex-col rounded-md bg-surface0 w-full p-4 m-auto mt-8 flex-wrap gap-4'
        >
          <motion.img
            src={imgsrc}
            alt={imgalt}
            className='sm:w-1/2 sm:h-1/4 sm:rounded-md sm:mr-auto rounded-md'
          />
          <motion.span className='sm:flex sm:flex-col sm:w-full sm:absolute sm:h-full sm:top-0 sm:right-0 sm:p-6 sm:bg-gradient-to-l sm:from-surface0 sm:to-transparent sm:from-60% sm:items-end sm:rounded-md sm:gap-4 flex flex-col w-fit h-fit gap-2'>
            <span class='sm:flex sm:flex-col sm:items-start sm:w-[58%] hidden'>
              <motion.h1 className='text-2xl font-bold'>{title}</motion.h1>
            </span>
            <motion.h1 className='text-2xl font-bold sm:hidden'>
              {title}
            </motion.h1>
            <motion.p className='sm:max-w-[58%]'>{content}</motion.p>
          </motion.span>
        </motion.div>
      </>
    );
  }
};

export default EnergyCard;
