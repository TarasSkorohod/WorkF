import { Package } from "@/types/package";
import Dropdown from "@/components/Tables/Dropdown";
import HeaderTable from "@/components/Tables/HeaderTable";
import {useState} from "react";
import Link from "next/link";

const packageData: Package[] = [
  {
    name: "Free package",
    rating: 1,
    status: "Редагувати",
  },
  {
    name: "Standard Package",
    rating: 1,
    status: "Редагувати",
  },
  {
    name: "Business Package",
    rating: 1,
    status: "Редагувати",
  },
  {
    name: "Standard Package",
    rating: 1,
    status: "Редагувати",
  },
  {
    name: "Standard Package",
    rating: 1,
    status: "Оцінити",
  },
];

const TableThree = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <HeaderTable
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
      />
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                <Dropdown title="Фінанси" />
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                <Dropdown title="Оцінка" />
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                <Dropdown title="Статус" />
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <Link href={"/online-service"}>
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                </Link>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.rating}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-6 px-4 dark:border-strokedark">
                  <button
                      className={`inline-flex rounded-full py-3 px-3 text-sm font-medium ${
                          packageItem.status === "Редагувати"
                              ? ""
                              : packageItem.status === "Оцінити"
                                  ? "text-dangerText bg-danger"
                                  : "text-dangerText bg-danger"
                      }`}
                      style={{ borderRadius: '10px' }}
                  >
                    {packageItem.status}
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
