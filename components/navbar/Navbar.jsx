import { motion } from "framer-motion";
import Links from "./Links";
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  let links = [
    {
      name: "Home",
      url: "/",
      active: currentRoute === "/"
    },
    {
      name: "About",
      url: "/about",
      active: currentRoute === "/about"
    },
    {
      name: "Contact",
      url: "/contact",
      active: currentRoute === "/contact"
    }
  ];
  return (
    <>
      <nav className='p-6 flex w-full justify-between'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex justify-start items-center font-bold cursor-pointer'
          onClick={() => router.push('/')}
        >
          <motion.img
            src='/Logo.png'
            alt='logo'
            className='h-16'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Green Energy
          </motion.p>
        </motion.div>
        <div className='flex justify-end items-center'>
          <Links links={links} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;