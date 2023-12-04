import { Box } from "../components/index";
import { Table } from "./index";
import { FaChartBar, FaBox } from "react-icons/fa6";

const Content = () => {
  return (
    <>
      <div className="w-[100%] mx-4 ">
        <div className="flex items-center justify-between text-white bg-[#0481ff] my-6  p-2 rounded-lg ">
          <p className="font-normal">Dashboard</p>
          <i>
            <FaChartBar />
          </i>
        </div>

        <div className="flex flex-wrap grow justify-between items-center gap-2">
          <Box />
        </div>

        <div className="flex items-center justify-between text-white bg-[#0481ff] my-6  p-2 rounded-lg ">
          <p className="font-normal">Products</p>
          <i>
            <FaBox />
          </i>
        </div>

        <Table />
      </div>
    </>
  );
};

export default Content;
