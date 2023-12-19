"use client"
import TableThree from "@/components/Tables/TableThree";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumb";
import BreadcrumbItem from "@/components/Breadcrumbs/BreadcrumbItem";


const Chart = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          <Breadcrumbs  title={"Фінанси"} link={"finances"}/>
        <div className="col-span-12">
            <TableThree />
        </div>
      </div>
    </>
  );
};

export default Chart;
