import { IoMdSearch } from "react-icons/io";
import Logo from "./../../assets/logo.png";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  return (
    <div className="dark:bg-gray-900 bg-white shadow-md dark:text-white duration-200 relative z-40">
      {/* upper  */}
      <div className="bg-primary/40 py-2">
        <div className="container flex items-center justify-between">
          <div className="">
            <a href="#" className="flex font-bold text-2xl sm:text-3xl gap-2">
              <img src={Logo} alt="*" className="w-10" />
              Shopsy
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="search"
                placeholder="search"
                className="dark:bg-black px-2 py-1 rounded-full w-[200px] sm:w-[200px] group-hover:w-[300px] border border-gray-300 transition-all focus:border-orange-300 focus:outline-none focus:border-1  duration-300"
              />
              <IoMdSearch className="absolute top-1/2 right-3 -translate-y-1/2 group-hover:text-primary text-gray-500" />
            </div>
            <button
              onClick={() => alert("You haven't ordered yet!")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white px-4 py-1 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-500">
                Order
              </span>
              <FaCartShopping className="drop-shadow-md text-xl text-white cursor-pointer" />
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="hover:text-primary duration-200 inline-block px-4"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group">
            <a href="" className="flex items-center gap-[2px] py-2">
              Trending products
              <span>
                <FaCaretDown className=" group-hover:rotate-180 transition-all duration-200" />
              </span>
            </a>
            <div className="bg-white rounded-md p-2 text-black w-[200px] z-[9999] hidden group-hover:block absolute shadow-lg">
              <ul>
                {DropdownLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className="w-full p-2 inline-block hover:bg-primary/20 rounded-md"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
