import Links from "./Links";

const Navbar = () => {
  let links = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Contact",
      url: "/contact"
    }
  ];
  return (
    <>
      <nav className='p-6 flex w-full justify-between'>
        <div className='flex justify-start items-center font-bold'>
          <img src='/Logo.png' alt='logo' className='h-12' />
          <p>Green Energy</p>
        </div>
        <div className='flex justify-end items-center'>
          <Links links={links} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
