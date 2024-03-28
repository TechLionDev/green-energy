import { motion } from "framer-motion";
import Links from "./Links";
import { useRouter } from "next/router";
import LinksPopOver from "./LinksPopOver";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  let links = [
    {
      name: "Home",
      url: "/",
      active: currentRoute === "/",
    },
    {
      name: "About",
      url: "/about",
      active: currentRoute === "/about",
    },
    {
      name: "Pricing",
      url: "/pricing",
      active: currentRoute === "/pricing",
    },
    {
      name: "Energy",
      url: "/energy",
      active: currentRoute === "/energy",
    },
    {
      name: "Incentives",
      url: "/incentives",
      active: currentRoute === "/incentives",
    },
  ];

  return (
    <>
      <nav className="hidden fixed z-50 md:flex justify-between w-full p-4 mb-4 drop-shadow-2xl bg-base">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-start font-bold cursor-pointer"
          onClick={() => window.location.replace("/")}
        >
          <motion.img
            src="/Logo.png"
            alt="logo"
            className="h-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="hidden pb-2 text-2xl sm:inline"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Green Energy
          </motion.p>
        </motion.div>
        <div className="flex items-center justify-end">
          <Links links={links} />
        </div>
      </nav>
      <nav className="md:hidden fixed z-50 flex justify-between w-full p-4 mb-4 drop-shadow-2xl bg-base">
        <div className="flex items-center justify-start p-0 m-0">
          <LinksPopOver links={links} />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center font-bold cursor-pointer"
          onClick={() => window.location.replace("/")}
        >
          <motion.img
            src="/Logo.png"
            alt="logo"
            className="h-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="hidden pb-2 text-2xl sm:inline"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Green Energy
          </motion.p>
        </motion.div>
        <div className="flex items-center justify-end w-[40px]"></div>
      </nav>
    </>
  );
};

export default Navbar;
