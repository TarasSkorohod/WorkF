import { BRAND } from "@/types/brand";
import Image from "next/image";
import Header from "@/components/Header";
import {useState} from "react";
import HeaderTable from "@/components/Tables/HeaderTable";
import Dropdown from "@/components/Tables/Dropdown";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import BreadcrumbItem from "@/components/Breadcrumbs/BreadcrumbItem";

const brandData: BRAND[] = [
  {
    name: "Група 2023",
    segments: 9,
    sales: 590,
    conversion: 4.8,
  },
  {
    name: "Група 2022",
    segments: 8,
    sales: 467,
    conversion: 4.3,
  },
  {
    name: "Група 2021",
    segments: 7,
    sales: 420,
    conversion: 3.7,
  },
  {
    name: "Група 2020",
    segments: 5,
    sales: 389,
    conversion: 2.5,
  },
  {
    name: "Група 2019",
    segments: 5,
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
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

      <div className="flex flex-col">
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-boxdark sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
              <Dropdown title="Назва" />
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              <Dropdown title="Кількість сегментів" />
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              <Dropdown title="Кількість кейсів" />
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-2 p-2.5 xl:p-5">
              <Link href={"/segments"}>
                <p className="hidden text-black dark:text-white sm:block">
                  {brand.name}
                </p>
              </Link>

            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.segments}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
