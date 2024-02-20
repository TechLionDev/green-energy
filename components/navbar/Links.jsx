import { motion } from "framer-motion";
import Link from "./Link";

const Links = ({ links }) => {
    return (
        <>
            <div className="flex gap-4">
                {links.map((link, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Link link={link} />
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
}

export default Links;
