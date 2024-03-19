import CHead from "@/components/CHead";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  const linkHoverVariant = {
    initial: { width: "0%" },
    hover: { width: "100%" }
  };
  return (
    <>
      <CHead title='About' />
      <div className='p-8 pb-2 bg-surface0 w-full'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2}}
          className='mb-8'
        >
          <h1 className='text-4xl font-bold mb-4'>About Us</h1>
          <p className='text-lg mb-4'>
            Welcome to Green Energy, Your Ultimate Destination for Green Energy
            Solutions!
          </p>
          <p className='text-lg mb-4'>
            At Green Energy, we believe in the power of renewable energy to
            create a cleaner, healthier planet for future generations. Our
            mission is to empower homeowners like you to embrace green energy
            initiatives and reduce your carbon footprint while saving money on
            energy bills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2}}
          className='mb-8'
        >
          <h2 className='text-2xl font-bold mb-4'>Who We Are</h2>
          <p className='text-lg mb-4'>
            Founded in 2024, Green Energy is a leading advocate for sustainable
            living and renewable energy solutions. Our team of passionate
            experts brings together years of experience in the field, dedicated
            to guiding homeowners through the process of adopting clean and
            green energy practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2}}
          className='mb-8'
        >
          <h2 className='text-2xl font-bold mb-4'>Why Green Energy Matters</h2>
          <p className='text-lg mb-4'>
            The need for renewable energy has never been more critical. With the
            looming threat of climate change and the depletion of finite fossil
            fuel resources, transitioning to sustainable energy sources is
            imperative. By harnessing the power of the sun, wind, water, and
            other renewable resources, we can mitigate the environmental impact
            of traditional energy production and pave the way for a brighter,
            more sustainable future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2}}
          className='mb-8'
        >
          <h2 className='text-2xl font-bold mb-4'>Our Commitment</h2>
          <p className='text-lg mb-4'>
            At Green Energy, we are committed to providing homeowners with the
            knowledge, tools, and resources they need to make informed decisions
            about green energy solutions. Whether you&apos;re interested in
            installing solar panels, upgrading to energy-efficient appliances,
            or improving your home&apos;s insulation, we&apos;re here to help every step
            of the way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-8'
        >
          <h2 className='text-2xl font-bold mb-4'>What Sets Us Apart</h2>
          <p className='text-lg mb-4'>
            What sets Green Energy apart is our dedication to personalized
            service and attention to detail. We understand that every home is
            unique, and we take the time to tailor our recommendations to your
            specific needs and budget. From initial consultation to
            post-installation support, we strive to exceed your expectations and
            ensure your complete satisfaction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-8'
        >
          <h2 className='text-2xl font-bold mb-4'>Our Vision</h2>
          <p className='text-lg mb-4'>
            Our vision is a world where every home is powered by clean,
            renewable energy. By empowering homeowners to embrace green energy
            solutions, we can collectively reduce our dependence on fossil fuels
            and build a more sustainable future for all.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-8'
        >
          <h2 className='text-2xl font-bold mb-4'>
            Join Us in the Green Energy Revolution
          </h2>
          <p className='text-lg mb-4'>
            Join us in the green energy revolution and take the first step
            towards a cleaner, greener tomorrow. Explore our website to learn
            more about our services, browse our resources, and discover how you
            can make a positive impact on the environment while saving money on
            your energy bills. Together, we can make a difference!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-8'
        >
          <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
          <p className='text-lg mb-4'>
            Ready to get started? Have questions or concerns? Don&apos;t hesitate to
            reach out to our friendly team. We&apos;re here to help you every step of
            the way on your journey to a more sustainable lifestyle.
          </p>
          <motion.a
            href='mailto:greenenergy@techlion.dev'
            className='inline-block text-green'
            initial='initial'
            whileHover='hover'
          >
            Email Us
            <motion.div
              className='bg-green -mt-1 h-[2px] w-0'
              variants={linkHoverVariant}
              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};
export default About;
