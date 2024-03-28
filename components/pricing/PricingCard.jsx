import { motion } from "framer-motion";

const PricingCard = ({ plan }) => {
  function formatNum(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className='bg-surface0 rounded-md p-6 w-full flex flex-col items-center justify-start shadow-lg gap-4'
      >
        <span className='flex flex-col'>
          <h2 className='text-2xl font-bold text-center p-1'>{plan.name}</h2>
          <p className='text-surface2 text-sm text-center'>From</p>
          <h1 className='text-3xl font-bold text-center'>
            {typeof plan.price === "number"
              ? `$${formatNum(plan.price)}`
              : `${plan.price}`}
          </h1>
        </span>
        <p className="italic text-sm">{plan.description}</p>
        <span className='bg-surface2 rounded-md flex w-full p-4 flex-col m-2'>
          <ul className='flex flex-col gap-2 items-center'>
            {plan.features.map((feature, index) => (
              <li key={index} className='flex gap-2 w-full h-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#a6e3a1'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className="min-w-[24px]"
                >
                  <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                  <polyline points='22 4 12 14.01 9 11.01'></polyline>
                </svg>
                <p className=''>{feature}</p>
              </li>
            ))}
            <li className='flex gap-2 w-full h-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#a6e3a1'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                <polyline points='22 4 12 14.01 9 11.01'></polyline>
              </svg>
              <p>And More!</p>
            </li>
          </ul>
        </span>
      </motion.div>
    </>
  );
};

export default PricingCard;
