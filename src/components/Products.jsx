import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({category, sort}) => {
  const [products, setProducts] = useState([]);
  useEffect(
    ()=>
    {
      const getProducts = async ()=>
      {
        try
        {
          const response = await axios.get(category? `http://localhost:5000/api/products?category=${category}`:"http://localhost:5000/api/products");
          console.log(response);
          setProducts(response.data);
        }
        
        catch(err)
        {

        };

      }
      getProducts()
    },[category]
  )
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
