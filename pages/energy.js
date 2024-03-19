import CHead from "@/components/CHead";
import EnergyCard from "@/components/EnergyCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Energy = () => {
  return (
    <>
      <CHead title='Energy' />
      <div class='flex flex-col w-full justify-center p-8'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-3xl text-center font-bold'
        >
          Types of Energy
        </motion.h1>
        <EnergyCard
          left
          title={"Solar Energy"}
          content={
            "Solar energy is one of the most popular renewable energy sources for homeowners. It harnesses sunlight using photovoltaic panels to generate electricity. Solar panels can be installed on rooftops or in open areas to capture sunlight and convert it into usable energy. Solar energy is clean, abundant, and has the potential to significantly reduce electricity bills over time."
          }
          imgsrc={"/SOLAR.jpeg"}
          imgalt={"Solar Energy"}
        />
        <EnergyCard 
            title={"Wind Energy"}
            content={"Wind energy utilizes the power of the wind to generate electricity through wind turbines. These turbines are typically installed in areas with consistent wind patterns, such as coastal regions or open plains. As the wind blows, it spins the turbine blades, which in turn rotate a generator to produce electricity. Wind energy is renewable, abundant, and has minimal environmental impact compared to fossil fuels."}
            imgalt={"Wind Energy"}
            imgsrc={"/WIND.jpg"}
        />
        <EnergyCard
          left
          title={"Hydroelectric Energy"}
          content={
            "Hydroelectric energy harnesses the power of flowing water to generate electricity. Dams or reservoirs are built to store water, which is then released through turbines to generate electricity. Hydroelectric power plants can vary in size, from large-scale dams to smaller run-of-the-river installations. Hydroelectric energy is reliable, cost-effective, and produces little to no greenhouse gas emissions."
          }
          imgsrc={"/HYDRO.jpg"}
          imgalt={"Hydroelectric Energy"}
        />
        <EnergyCard 
            title={"Geothermal Energy"}
            content={"Geothermal energy taps into the Earth's natural heat to produce electricity and heat buildings. It involves extracting heat from underground reservoirs of hot water or steam and converting it into usable energy. Geothermal power plants use wells to access hot water or steam, which is then used to drive turbines and generate electricity. Geothermal energy is highly efficient, sustainable, and provides a continuous source of power with minimal environmental impact."}
            imgalt={"Geothermal Energy"}
            imgsrc={"/GEOTHERMAL.jpg"}
        />
        <EnergyCard
          left
          title={"Biomass Energy"}
          content={
            "Biomass energy is derived from organic materials such as wood, crop residues, and animal waste. These materials are burned or converted into biogas through processes like anaerobic digestion or fermentation to produce heat, electricity, or biofuels. Biomass energy is versatile, renewable, and can help reduce waste by utilizing organic materials that would otherwise be discarded."
          }
          imgsrc={"/BIOMASS.jpg"}
          imgalt={"Biomass Energy"}
        />
      </div>
    </>
  );
};

export default Energy;
