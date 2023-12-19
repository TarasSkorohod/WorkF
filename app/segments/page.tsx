"use client"

import TableTwo from "@/components/Tables/TableTwo";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumb";

const Chart = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          <Breadcrumbs  title={"Сегменти"} link={"segments"}/>
          <div className="col-span-12">
            <TableTwo />
        </div>
      </div>
    </>
  );
};

export default Chart;
