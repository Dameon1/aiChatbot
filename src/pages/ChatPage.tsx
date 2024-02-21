//import React from 'react';
//import { useContext } from "react";
import { Avatar, Box } from "@mui/material";
import { useAuth} from "../context/AuthContext";

const Chat = () => {
   //const useAuth = () => useContext(AuthContext)
  const auth = useAuth();
    console.log(auth);
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box sx={{ display: { md: "flex", xs: "none" } }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              my: 2,
              color: "black",
              fontWeight: 700,
              bgcolor: "white",
              mx: "auto",
            }}
          >
            {
            //auth?.user?.name[0]
          }
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
