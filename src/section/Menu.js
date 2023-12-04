/* eslint-disable jsx-a11y/alt-text */
import { FaHouse, FaChartPie, FaPen, FaStar } from "react-icons/fa6";
import { FaBox, FaUserFriends } from "react-icons/fa";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";

const Menu = () => {
  const menu = [
    { icon: <FaHouse />, title: "dashboard " },
    { icon: <FaUserFriends />, title: "clients " },
    { icon: <FaBox />, title: "products " },
    { icon: <FaChartPie />, title: "charts " },
    { icon: <FaPen />, title: "posts " },
    { icon: <FaStar />, title: "favorite " },
    { icon: <IoMdSettings />, title: "setting " },
    { icon: <IoIosLogOut />, title: "Logout " },
  ];
  return (
    <>
      <div className="flex justify-center bg-[#123] h-[100vh] w-[80px] md:hover:w-[350px] duration-[.3s] p-6 overflow-hidden md:w-[100px] md:justify-normal">
        <ul className="relative h-[95vh] ">
          <li className="flex items-center gap-8">
            <picture className="w-[45px] h-[45px] rounded-full overflow-hidden border-white border-[3px] shrink-0 ">
              <img className="w-full " src={require("../user-200x300.webp")} />
            </picture>
            <h2 className="hidden text-white text-2xl font-bold md:block">fares_sonar</h2>
          </li>
          {menu.map((item) => (
            <li className="w-full">
              <a
                href="http://www.googl.com"
                className="flex items-center gap-10 text-white bg my-4 p-2 rounded-lg transition-all duration-[.3s] hover:bg-[#ffffff55] "
              >
                <i className="text-3xl">{item.icon}</i>
                <p className="text-lg hidden md:block">{item.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
