const Hero = () => {
    return (
        <>
            <section className="text-center justify-center items-center flex flex-col gap-4 bg-crust py-16">
            <h1 className="font-bold text-3xl">
                Welcome to Green Energy!
            </h1>
            <div className="flex flex-col">
                <p>
                    We are a company that is dedicated to informing you with the best green energy solutions.
                </p>
                <p>
                    We are here to help you make the best decisions for your home and the environment.
                </p>
            </div>
            <span className="flex justify-center items-center gap-8">
                <button className="border-green-500 border-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Read More
                </button>
                <button className="bg-green-500 border-2 border-green-700 hover:bg-base text-white font-bold py-2 px-4 rounded">
                    Show Me Prices!
                </button>
            </span>
            </section>
        </>
    );
}

export default Hero;