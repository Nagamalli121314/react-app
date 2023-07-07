import React from 'react';
import { Popup, Paper, CloseButton, Content } from './style';
import { Button } from '@mui/material';
// import CloseIcon from '@material-ui/icons/Close';

const CategoryModal = (props) => {
  const { open, handleClose, category, joke, NextJoke } = props;
  const handleClick = (value) => {
    NextJoke(value)
    return;

  }

  return (
    <>
      {/* {open && (
      <Overlay onClick={handleClose}></Overlay>
    )} */}


      <Popup
        open={open}
        onClose={handleClose}
      >
        <Paper >
          <CloseButton
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            x
            {/* <CloseIcon /> */}
          </CloseButton>
          <Content>
            <center>
              <h1>{category}</h1>
              <h5>
                {joke}
              </h5>
              <Button variant="contained" onClick={handleClick(category)}>Next Button</Button>
            </center>

          </Content>
        </Paper>
      </Popup>
    </>
  );
};

export default CategoryModal;