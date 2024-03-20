import { useState } from 'react';
import { motion } from 'framer-motion';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <button
                className={"w-full p-4 bg-surface0 text-left text-lg font-semibold rounded-lg focus:outline-none flex justify-between gap-2"}
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                )}
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="-mt-1 overflow-hidden rounded-b-lg bg-surface0"
            >
                <div className="p-4 bg-surface0">
                    <p>{content}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default AccordionItem;