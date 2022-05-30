import * as React from "react";
import {makeStyles} from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {useState} from "react";
import "../styles/chatbot.css"
import CommentIcon from '@mui/icons-material/Comment';

const useStyles = makeStyles((theme) => ({
    commentIcon: {
        zIndex: 100,
        position: "fixed",
        bottom: "25px",
        right: "25px",
        color: "blue",
        fontSize: "large",
    },
}));


const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();

    return (
        <>
            {isOpen ?
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
                className={isOpen ? "" : "hidden"}
            >
                <IconButton color="primary" aria-label="upload picture" component="span"
                            onClick={() => setIsOpen(!isOpen)}>
                    <CloseIcon/>
                </IconButton>
                <div
                    style={{
                        overflowY: "scroll",
                        scrollBehavior: "smooth",
                        height: "250px",
                    }}
                >
                    <p style={{margin: "10px 10px 0 10px", color: "red"}}>Admin</p>
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

                    <p style={{margin: "10px 10px 0 10px", color: "red"}}>Admin</p>
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

                    <p style={{margin: "10px 10px 0 10px", color: "red"}}>Admin</p>
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
                <div style={{width: "100%"}}>
                    <input
                        type="text"
                        id="inputText"
                        placeholder="Quel est votre problème ?"
                        style={{width: "90%", height: "60px", margin: "10px"}}
                    />
                    <button style={{margin: "0 10px", width: "93%"}}>Envoyer</button>
                </div>
            </div>
                :
                <CommentIcon className={classes.commentIcon} onClick={() => setIsOpen(!isOpen)}/>}
        </>
    );
};
export default ChatBox;
