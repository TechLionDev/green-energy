import CHead from "@/components/CHead";
import AccordionItem from "@/components/AccordionItem";
import { motion } from 'framer-motion';

const Incentives = () => {
    let content = [
        {
            title: "Federal Incentives",
            incentives: [
                {
                    title: "Federal Renewable Energy Tax Credit",
                    content: "Homeowners can benefit from a federal tax credit covering up to 26% of the cost of installing eligible renewable energy systems, such as solar panels and geothermal heat pumps. This credit applies to both principal residences and secondary homes."
                },
                {
                    title: "Energy Efficient Home Improvement Tax Credits",
                    content: "Certain energy-efficient upgrades, such as installing energy-efficient windows, doors, insulation, and HVAC systems, may qualify for federal tax credits. These credits can help offset the upfront costs of making your home more energy-efficient."
                }
            ]
        },
        {
            title: "State and Local Incentives",
            incentives: [
                {
                    title: "State Rebates and Incentive Programs",
                    content: "Many states offer additional incentives, rebates, or grants to encourage homeowners to adopt green energy solutions. These programs vary by state and may include cash rebates, property tax incentives, or sales tax exemptions for eligible energy-efficient purchases."
                },
                {
                    title: "Local Utility Rebates",
                    content: "Check with your local utility provider to see if they offer any rebates or incentives for energy-efficient upgrades. These programs often cover a portion of the cost for installing energy-efficient appliances, HVAC systems, or weatherization measures."
                }
            ]
        },
        {
            title: "Additional Resources",
            incentives: [
                {
                    title: "Database of Incentives for Renewables and Efficiency (DSIRE)",
                    content: "DSIRE is a comprehensive database that provides information on state, local, utility, and federal incentives for renewable energy and energy efficiency. Use this resource to explore available incentives in your area and maximize your savings potential."
                },
                {
                    title: "Consultation Services",
                    content: "Our team of experts is here to help you navigate the complex landscape of tax rebates and incentives. Schedule a consultation to assess your eligibility for various programs and ensure you're making the most of available opportunities."
                }
            ]
        },
        {
            title: "How to Claim Incentives",
            incentives: [
                {
                    title: "Documentation Requirements",
                    content: "Before claiming any incentives, make sure to keep thorough records of your purchases and installations. You may need to provide receipts, invoices, and product specifications to prove eligibility."
                },
                {
                    title: "Tax Filing Tips",
                    content: "Consult with a tax professional or use tax preparation software to accurately claim your energy-related tax credits. Be sure to file any necessary forms, such as Form 5695 for residential energy credits, with your annual tax return."
                }
            ]
        }
    ];

    return (
        <>
            <CHead title="Incentives" />
            <h1 className="p-4 text-3xl font-bold text-center">Tax Rebates and Incentives</h1>
            <div className="max-w-full mx-auto">
                {content.map((category, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='p-6' key={index}>
                        <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                        {category.incentives.map((item, idx) => (
                            <AccordionItem key={idx} title={item.title} content={item.content} />
                        ))}
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default Incentives;