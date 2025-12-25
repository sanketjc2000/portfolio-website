import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Section = ({ children, className, id, delay = 0 }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: delay }}
            className={cn("py-16 md:py-24", className)}
        >
            {children}
        </motion.section>
    );
};

export default Section;
