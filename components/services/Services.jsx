import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      name: "Governmental",
      description:
        "Implementing green energy solutions in governmental buildings is a pivotal step towards sustainability and reducing carbon footprints. Through the integration of renewable energy sources such as solar panels, wind turbines, and geothermal systems, these buildings can significantly decrease their reliance on non-renewable energy and mitigate environmental impacts. Moreover, energy-efficient technologies like LED lighting, smart thermostats, and energy management systems can further enhance energy conservation efforts. By leading by example, governmental institutions can inspire broader adoption of green energy practices, contributing to a more eco-friendly and resilient future.",
      link: "/energy",
      img: "/Gov.jpg"
    },
    {
      name: "Residential",
      description:
        "Green energy solutions for residential buildings involve implementing renewable energy sources such as solar panels, wind turbines, or geothermal systems to power homes. These solutions not only reduce carbon emissions but also lower energy bills for homeowners. Additionally, energy-efficient appliances, LED lighting, and smart home technology can further optimize energy usage. By incorporating these sustainable practices into residential buildings, we can contribute to a more environmentally friendly and sustainable future while also improving the comfort and affordability of living spaces for residents.",
      link: "/energy",
      img: "/Res.jpg"
    },
    {
      name: "Commercial",
      description:
        "Green energy solutions for commercial buildings encompass a range of technologies and practices aimed at reducing environmental impact and increasing energy efficiency. These solutions include the installation of solar panels on rooftops to harness renewable energy, implementing energy-efficient lighting systems and appliances, optimizing heating, ventilation, and air conditioning (HVAC) systems, and incorporating smart building technologies to monitor and control energy usage. Additionally, green building designs prioritize natural lighting, ventilation, and insulation to minimize the need for artificial heating and cooling. By adopting these green energy solutions, commercial buildings can significantly decrease their carbon footprint, lower energy costs, and contribute to a more sustainable future.",
      link: "/energy",
      img: "/Com.jpg"
    }
  ];
  return (
    <>
      <div>
        <motion.h1 className="font-bold text-3xl text-center pb-12" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
          Types of Services:
        </motion.h1>
        <div className='grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-6 lg:mt-48 gap-24 mt-24 p-6 h-full'>
          {services.map((service, index) => {
            return (
              <>
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                >
                  <ServiceCard service={service} key={index} />
                </motion.div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
