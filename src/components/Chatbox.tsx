import * as React from "react";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  flex: {},
}));

const Chatbox = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        zIndex: 100,
        position: "fixed",
        bottom: "40px",
        right: "20px",
        width: "300px",
        height: "400px",
        backgroundColor: "#F0F9FF",
        borderRadius: "5px",
        opacity: "0.9",

      }}
    >
      <IconButton color="primary" aria-label="upload picture" component="span">
        <CloseIcon />
      </IconButton>
      <div
        style={{
          overflowY: "scroll",
          scrollBehavior: "smooth",
          height: "250px",
        }}
      >
        <p style={{ margin: "10px 10px 0 10px", color: "red" }}>Admin</p>
        <div
          style={{
            margin: "0px 10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          Bonjour
        </div>

        <p
          style={{
            margin: "10px 10px 0 10px",
            color: "blue",
            textAlign: "right",
          }}
        >
          Moi
        </p>
        <div
          style={{
            margin: "0px 10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
            textAlign: "right",
          }}
        >
          Bonjour
        </div>

        <p style={{ margin: "10px 10px 0 10px", color: "red" }}>Admin</p>
        <div
          style={{
            margin: "0px 10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          Bla-bla-bla-bla
        </div>

        <p
          style={{
            margin: "10px 10px 0 10px",
            color: "blue",
            textAlign: "right",
          }}
        >
          Moi
        </p>
        <div
          style={{
            margin: "0px 10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
            textAlign: "right",
          }}
        >
          Bla-bla-bla-bla
        </div>

        <p style={{ margin: "10px 10px 0 10px", color: "red" }}>Admin</p>
        <div
          style={{
            margin: "0px 10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          Bla-bla-bla-bla
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <input
          type="text"
          id="inputText"
          placeholder="Quel est votre problème ?"
          style={{ width: "90%", height: "60px", margin: "10px" }}
        />
        <button style={{ margin: "0 10px", width: "93%" }}>Envoyer</button>
      </div>
    </div>
  );
};
export default Chatbox;
