import Link from "./Link";

const Links = ({links}) => {
    return (
        <>
            <div className="flex gap-4">
                {links.map((link, index) => {
                    return (
                        <Link link={link} key={index}/>
                    )
                })}
            </div>
        </>
    );
}

export default Links;