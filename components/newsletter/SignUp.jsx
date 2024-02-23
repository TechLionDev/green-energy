const SignUp = () => {
    return (
        <>
        {/* TODO: Make Form Actually Save Emails */}
            <section className="bg-crust py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl font-semibold text-text">Sign up for updates</h2>
                        <p className="mt-2 text-text">Get the latest news and updates from our company</p>
                        <div className="flex flex-col mt-4 w-full lg:w-1/2 gap-2">
                            <input type="email" className="w-full p-4 border-crust focus:border-green border-2 rounded-md bg-base"
                            placeholder="Enter your email" />
                            <button className="bg-green text-crust font-bold px-4 py-3 rounded-md rounded-br-md">Sign up</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;