import React from "react";
import {
  CustomerDetailsCard,
  DailySalesTrendCard,
  LocationCard,
  TopSoldProductsCard,
} from "./components/cards/cardIndex";
import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import "./App.scss";

const App = () => {
  return (
    <div className="main-container">
      {/* Top */}
      <Header />

      <div className="grid-container">
        <Card>
          <LocationCard />
        </Card>
        <Card>
          <TopSoldProductsCard />
        </Card>
        <Card>
          <CustomerDetailsCard />
        </Card>
        <Card>
          <DailySalesTrendCard />
        </Card>
      </div>
    </div>
  );
};

export default App;
