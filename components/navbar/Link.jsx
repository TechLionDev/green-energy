const Link = ({link}) => {
    return (
        <>
            <span className="hover:italic">
                <a href={link.url}>{link.name}</a>
            </span>
        </>
    );
}

export default Link;