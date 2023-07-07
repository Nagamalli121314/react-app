import { IconButton, Modal, styled } from "@mui/material";


export const Popup = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}))

export const Paper = styled('div')(({ theme }) => ({
    position: 'relative',
    background: 'linear-gradient(90deg,#2c5364,#203a43,#0f2027)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    outline: 'none',
    width:'700px',
    textalign:'center',
    color:'white',

}))

export const CloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),

}))
export const Overlay = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
}))
export const Content = styled('div')(({ theme }) => ({
    color:'white',
    textalign:'center',
    padding:'20px 10px',
    border:'1px solid black'

}))

