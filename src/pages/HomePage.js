import { useEffect, useState } from "react";
import { API_HOST } from "../api/config";
import ProductList from "../components/home/ProductiList";

const HomePage = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default HomePage;
