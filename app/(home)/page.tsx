// Home.js
import React from "react";
import Booking from "../_components/booking-item";
import Header from "../_components/header";
import ModeToggle from "../_components/model-toggle";

const Home = () => {
  return ( 
    <>
      <Header />
      <Booking />
      <ModeToggle />
    </>
  );
}
 
export default Home;
