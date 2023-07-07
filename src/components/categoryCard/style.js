import { Typography, styled } from "@mui/material"

export const Card = styled('div')(({ theme }) => ({
  textAlign: "center",
  background: "white",
  boxShadow: "0px 0px 1px 2px #000",
  padding: "12px 12px",
  margin: "12px 12px",
  fontWeight: "blod",
  lineHeight: "2px",
  borderRadius: "0.375rem",
  height:"200px",
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontsize: "20px",
  color: "#1e3a8a",
  padding: "24px 0px 0px",
  textTransform: "capitalize",
}))

export const Discription = styled(Typography)(({ theme }) => ({
  fontsize: "12px",
  color: "#6b21a8",
  textTransform: "capitalize",
}))

export const overlay = styled(Typography)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 9999,
}))
