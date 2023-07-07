import React from 'react';
// import { Typography } from '@mui/material';
import { Card, Title, Discription } from './style';



const CategoryCard = (props) => {
    const { category, handleClick } = props;
    const handleClickCard = (category) => {
        handleClick(category);
      };
    
    return (
        <Card onClick={() => handleClickCard(category)}>
            <Title variant="h5"> {category}</Title>
            <Discription variant="h6"> Unlimited Jokes On {category}</Discription>
        </Card>
    );
};
export default CategoryCard;