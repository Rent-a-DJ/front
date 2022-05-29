import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {makeStyles} from "@mui/styles";
import logo from "../assets/logo.png";
import {Paper, Theme} from "@mui/material";
import {useState} from "react";


const useStyles = makeStyles((theme: Theme) => ({
    fontLogo: {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
    },
    linkStyle : {
        textDecoration: "none",
        variant:"body2",
    },
    imgUploader: {

    }
}));
const CreateItemAdmin = () => {
    const classes = useStyles();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [isAvailable, setIsAvailable] = useState<any | null>(null);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");



    return (
        <div>
            <img src={logo} className={classes.fontLogo} alt="Login"/>
            <div style={{position: "relative", top: "55%", left: "35%"}}>
                <Grid container className={"login"}>
                    <Grid item xs={10} sm={5} md={3}>
                        <Paper
                            style={{
                                padding: "3vh",
                                opacity: "0.9",
                            }}
                        >
                            <form onSubmit={(e) => e.preventDefault()}>
                                <Grid
                                    container
                                    alignItems="center"
                                    direction="column"
                                    spacing={2}
                                >
                                    <Grid item container>
                                        <TextField
                                            className={classes.imgUploader}
                                            id="image"
                                            label="Images"
                                            variant="outlined"
                                            type="file"
                                            fullWidth
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container>
                                        <TextField
                                            id="name"
                                            label="Nom"
                                            variant="outlined"
                                            fullWidth
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container>
                                        <TextField
                                            id="category"
                                            label="Catégorie"
                                            variant="outlined"
                                            fullWidth
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container>
                                        <TextField
                                            id="isAvailable"
                                            label="Disponible ?"
                                            variant="outlined"
                                            fullWidth
                                            autoFocus
                                            value={isAvailable}
                                            onChange={(e) => setIsAvailable(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container>
                                        <TextField
                                            id="price"
                                            label="Prix"
                                            variant="outlined"
                                            fullWidth
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container>
                                        <TextField
                                            id="description"
                                            label="Description"
                                            variant="outlined"
                                            fullWidth
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container direction="row-reverse" spacing={2}>
                                        <Grid item container>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                fullWidth
                                            >
                                                Créer mon item
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default CreateItemAdmin;
