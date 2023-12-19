"use client"
import TableThree from "@/components/Tables/TableThree";
import BreadcrumbItem from "@/components/Breadcrumbs/BreadcrumbItem";
import OnlineService from "@/components/onlineService/OnlineService";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumb";


const Chart = () => {
  return (
    <>
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
            <Breadcrumbs  title={"Обслуговування"} link={"online-service"}/>
            <div className="col-span-12">
                <OnlineService />
            </div>
        </div>
    </>
  );
};

export default Chart;
