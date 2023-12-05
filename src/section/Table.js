const Table = () => {
  const table = [
    { name: "Tv", price: `$${142}`, count: 654 },
    { name: "iPhone", price: `$${165}`, count: 764 },
    { name: "Tablet", price: `$${123}`, count: 344 },
    { name: "Computer", price: `$${100}`, count: 987 },
    { name: "HeadPhone", price: `$${190}`, count: 812 },
    { name: "Watch", price: `$${242}`, count: 445 },
    { name: "Power", price: `$${156}`, count: 367 },
  ];
  return (
    <>
      <table className="w-full text-center border-separate border-spacing-[14px]">
        <thead>
          <tr>
            <th className="bg-[#0080ff] rounded-lg h-[40px] ">Products</th>
            <th className="bg-[#0080ff] rounded-lg h-[40px] ">Price</th>
            <th className="bg-[#0080ff] rounded-lg h-[40px] ">Count</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item) => (
            <tr>
              <td className="bg-[#123] rounded-lg h-[40px] hover:bg-[#125]">
                {item.name}
              </td>
              <td className="bg-[#123] rounded-lg h-[40px]">
                <span className="p-1 bg-green-500 rounded-lg  ">
                  {item.price}
                </span>
              </td>
              <td className="bg-[#123] rounded-lg h-[40px]">
                <span className="p-1 bg-orange-500 rounded-lg">
                  {item.count}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
