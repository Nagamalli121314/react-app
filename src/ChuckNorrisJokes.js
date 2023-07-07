import React, { useEffect, useState } from 'react';
import CategoryCard from './components/categoryCard/categoryCard';
import { Grid } from '@mui/material';
import CategoryModal from './components/categoryModal/categoryModal';
import Container from '@mui/material/Container';



function ChuckNorrisJokes() {
  const [categories, setCategories] = useState([]);
  const [randomJoke, setRandomJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(null);

  const handleOpen = (value) => {
    console.log(value);
    setCategory(value);
    setOpen(prev => !prev);
  };
  const handleClose = () => {
    setOpen(prev => !prev);
  };
  console.log("open", open);


  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(categories => setCategories(categories))
      .catch(error => console.log(error));
  };

  const getRandomJoke = (category) => {
    setLoading(true);
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(response => response.json())
      .then(jokeData => {
        setRandomJoke(jokeData.value);
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <header>
        <h1>Chuck Norris</h1>
      </header>
      <nav  >

      </nav>
      <main>
        <Grid container spacing={2} sx={{ flexGrow: 1, alignItems: "stretch" }}>
          {categories.map(itemcategory => (

            <Grid item sm={3}>
              <CategoryCard category={itemcategory} handleClick={handleOpen} > </CategoryCard>
            </Grid>
          ))}
        </Grid>


        {/* <div>{loading ? 'Loading...' : randomJoke}</div> */}
        <CategoryModal open={open} handleClose={handleClose} category={category} joke={randomJoke} NextJoke={getRandomJoke} />

      </main>

    </Container>
  );
}

export default ChuckNorrisJokes;
