import React from "react";
import Hero from "../../components/hero/Hero";
import Food from "../../components/food/Food";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Hero title={"class component"} />
      <button className="border bg-blue-300 rounded-md px-2 py-1">
        <Link to="/food">Go to foods</Link>
      </button>
    </>
  );
};

export default Home;
