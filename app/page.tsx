import Dashboard from "@/components/Dashboard/Dashboard";
import { Metadata } from "next";
import BreadcrumbItem from "@/components/Breadcrumbs/BreadcrumbItem";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumb";
import TableTwo from "@/components/Tables/TableTwo";

export const metadata: Metadata = {
  title: "DZWINER",
  description: "DZWINER",
  // other metadata
};

export default function Home() {
  return (
    <>
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
            <BreadcrumbItem href="/" label="Головна" />

            <div className="col-span-12">
                <Dashboard />
            </div>
        </div>
    </>
  );
}
