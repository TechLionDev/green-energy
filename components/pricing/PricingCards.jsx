import PricingCard from "./PricingCard";

const PricingCards = () => {
  let plans = [
    {
      name: "Starter Eco Bundle",
      description:
        "Our Starter Eco Bundle is perfect for those looking to dip their toes into green energy solutions without breaking the bank.",
      features: [
        "Energy-efficient LED light bulbs",
        "Smart thermostat installation",
        "Home energy monitor",
        "Personalized energy-saving tips"
      ],
      price: 199
    },
    {
      name: "Green Living Essentials",
      description:
        "Upgrade to our Green Living Essentials package for a more comprehensive approach to energy efficiency.",
      features: [
        "Solar-powered outdoor lights",
        "Energy Star-rated appliances",
        "Home energy audit",
        "Personalized energy-saving tips",
        "Smart home technology"
      ],
      price: 999
    },
    {
      name: "Ultimate Eco Warrior",
      description:
        "Go all-in with our Ultimate Eco Warrior package, designed for homeowners committed to maximizing their energy savings and reducing their carbon footprint.",
      features: [
        "Full home solar panel installation",
        "Energy storage system",
        "Insulation and weatherization upgrades",
        "Electric vehicle charging station",
        "Smart home technology"
      ],
      price: 19_999
    },
    {
      name: "Build Your Own Bundle",
      description:
        "Tailor a green energy package to your specific needs and budget with our customizable options.",
      features: [
        "Solar panel installation",
        "Energy-efficient appliances",
        "Insulation and weatherization upgrades",
        "Smart home technology"
      ],
      price: "Contact"
    }
  ];
  return (
    <>
      <div className='flex gap-4 p-6 m-6 items-stretch'>
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </>
  );
};

export default PricingCards;
