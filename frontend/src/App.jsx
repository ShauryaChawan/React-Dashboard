import React from "react";
import {
  CustomerDetailsCard,
  DailySalesTrendCard,
  LocationCard,
  TopSoldProductsCard
} from "./components/cards/cards";

import Header from "./components/header/Header";
import Stats from "./components/stats/Stats";

const App = () => {
  return (
    <>
      {/* Top */}
      <div className="top">
        {/* Header */}
        <Header/>
        {/* Stats */}
        <Stats/>
        {/* Body */}
      </div>

      <div className="body">
        {/* Location Card */}
        <LocationCard/>
        {/* Top Sold Products Card */}
        <TopSoldProductsCard/>
        {/* Customer Details Card */}
        <CustomerDetailsCard/>
        {/* Daily Sales Trend Card */}
        <DailySalesTrendCard/>
      </div>
    </>
  );
};

export default App;
