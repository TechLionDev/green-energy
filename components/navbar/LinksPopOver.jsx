import { motion } from "framer-motion";
import { useState } from "react";

const LinksPopOver = ({links}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="p-2 hover:bg-mantle focus:bg-mantle rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-b-lg fixed z-50 w-full bg-base drop-shadow-2xl top-24 left-0 border-0"
      >
        <div className="p-4">
          {links.map((link) => (
            <p
              key={link.name}
              className="p-2 hover:bg-mantle focus:bg-mantle rounded-lg"
              onClick={() => window.location.replace(link.url)}
            >
              {link.name}
            </p>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default LinksPopOver;
