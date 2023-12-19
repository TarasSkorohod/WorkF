import Image from "next/image";
import { Product } from "@/types/product";
import HeaderTable from "@/components/Tables/HeaderTable";
import {useState} from "react";
import Dropdown from "@/components/Tables/Dropdown";
import Link from "next/link";
import BreadcrumbItem from "@/components/Breadcrumbs/BreadcrumbItem";


const productData: Product[] = [
  {
    name: "Фінанси",
    countCase: 12,
    work: 4,
    middle: 22,
    deadline: "17.12.2023",
  },
  {
    name: "Рітейл",
    countCase: 23,
    work: 3,
    middle: 2.2,
    deadline: "17.12.2023",
  },
  {
    name: "Послуги",
    countCase: 33,
    work: 1,
    middle: 2.2,
    deadline: "17.12.2023",
  },
  {
    name: "Apple Watch Series 7",
    countCase: 34,
    work: 12,
    middle: 2.2,
    deadline: "17.12.2023",
  },
  {
    name: "Apple Watch Series 7",
    countCase: 33,
    work: 296,
    middle: 2.2,
    deadline: "17.12.2023",
  },
];

const TableTwo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="rounded-sm border  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <HeaderTable
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
        />
      </div>

      <div className="grid grid-cols-6 bg-gray-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">
            <Dropdown title="Сегмент" />
          </p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">   <Dropdown title="Кількість кейсів" /></p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">   <Dropdown title="Оцінені роботи" /></p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">   <Dropdown title="Середнє значення" /></p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">   <Dropdown title="Дедлайн" /></p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={"/finances"}>
                <p className="text-sm text-black dark:text-white">
                  {product.name}
                </p>
              </Link>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.countCase}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.work}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.middle}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">{product.deadline}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
