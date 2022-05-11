import React, { useState, useEffect } from "react";
import { Shoecard } from "./components/Shoecard";
import BrandSelect from "./components/Select";
import { Container, Stack } from "@mui/material";
// import {Title} from './components/Title' ;
// import { createTheme } from '@mui/material/styles';
import { Header } from "./components/Header";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllShoes } from "./services/profileService";

function App() {
  const [shoes, setShoes] = useState(null);

  useEffect(() => {
    async function getShoes() {
      if (!shoes) {
        const response = await getAllShoes();
        setShoes(response);
      }
    }

    getShoes();
  }, [shoes]);

  const filterShoes = (brand) => {
    async function getShoes() {
      const response = await getAllShoes();
      const filteredShoes = response.filter((shoe) => shoe.brand === brand);
      setShoes(filteredShoes);
 
    } 
    getShoes()
  };

  return (
    // <Createtheme>
    <>
      <Header />
      <Container maxWidth="sm" Shoes>
        <h1>Shoes</h1>

        <BrandSelect filterShoes={filterShoes} />
        <Stack spacing={2}>
          {shoes && shoes.length > 0 ? (
            shoes.map((item) => <Shoecard shoe={item} />)
          ) : (
            <p>No shoes found</p>
          )}
        </Stack>
      </Container>
    </>
    // </Createtheme>
  );
}

export default App;
