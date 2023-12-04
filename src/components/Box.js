import { FaUserAlt, FaPen, FaBox, FaDollarSign } from "react-icons/fa";

const Box = () => {
  const dataBox = [
    { icon: <FaUserAlt />, paragraph: "user", span: 100 },
    { icon: <FaPen />, paragraph: "posts", span: 34 },
    { icon: <FaBox />, paragraph: "products", span: 654 },
    { icon: <FaDollarSign />, paragraph: "revenue", span: "$143" },
  ];
  return (
    <>
      {dataBox.map((box) => (
        <div className="flex items-center justify-around grow-[1] basis-[150px] h-[150px] bg-[#123] rounded-lg hover:bg-[#124] ">
          <i className="text-white text-4xl"> {box.icon} </i>
          <div className="text-white text-center">
            <p className="text-lg capitalize"> {box.paragraph} </p>
            <span className="text-2xl"> {box.span} </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Box;
