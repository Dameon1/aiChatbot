import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Typography
        sx={{
          display: { md: "block", sm: "block", xs: "none" },
          mr: "auto",
          fontWeight: "500",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "20px", color: "white" }}>aiChatbot by D-GPT</span>
        <span style={{ fontSize: "10px", color: "red" }}> presented by</span>
        
        
      </Typography>
      <Link to="/">
        <img
          width={"50px"}
          height={"30px"}
          alt="Verizon Logo"
          src="https://th.bing.com/th/id/R.1628d13ee9da3d748fa655cf2b7816a4?rik=Lf64g%2fGVifFQyw&riu=http%3a%2f%2fseekvectorlogo.com%2fwp-content%2fuploads%2f2018%2f02%2fverizon-vector-logo.png&ehk=Pl%2bEg4fmI5VBeD8XWRC8BaaDbUyNzi6C9vaN5CgFyPs%3d&risl=&pid=ImgRaw&r=0"
        />
      </Link>
    </div>
  );
};

export default Logo;
