"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import TableTwo from "@/components/Tables/TableTwo";
import TableThree from "@/components/Tables/TableThree";

const Dashboard: React.FC = () => {
  return (
    <>
        <div>
            <div>
                <TableOne />
            </div>
        </div>

    </>
  );
};

export default Dashboard;
