import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {makeStyles} from "@mui/styles";
import {MenuItem, Paper, Select, Theme, Tooltip} from "@mui/material";
import {FormEvent, useContext, useState} from "react";
import BackupIcon from '@mui/icons-material/Backup';
import CategoriesContext from "../contextes/CategoriesContext";
import useArticle from "../hooks/useArticle";
import {toast} from "react-toastify";


const useStyles = makeStyles((theme: Theme) => ({
  bgImg: {
    width: "100%",
    height: "100%",
    backgroundImage: "url(/logo.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  linkStyle: {
    textDecoration: "none",
    variant: "body2",
  },
  inputStyle: {
    display: "none",
  },
  imgUploader: {
    display: "inlineBlock",
    padding: "6px 12px",
    cursor: "pointer",
  },
  title: {
    marginTop: "1rem",
    textAlign: "center",
    zIndex: 100,
  },
  iconImage: {
    margin: "5px",
    width: "100%",
  },
  imgLabel: {
    width: "100%",
  },
  formContainer: {
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  paper: {
    opacity: "0.9"
  },
  form: {
    height: "100%",
    width: "100%",
    "& > *": {
      marginTop: "3rem"
    }
  },
  marginTopOne: {
    marginTop: "2rem"
  },
  fullWidth: {
    width: "100%"
  }
}));
const CreateItemAdmin = () => {
  const classes = useStyles();
  const categoriesContextValues = useContext(CategoriesContext);
  const [images, setImages] = useState<FileList | null>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState<number>(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const {createArticle} = useArticle();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const articleDto = {
      name,
      category,
      priceByDay: price,
      description
    }

    if (images)
      createArticle(articleDto, images);
    else
      toast.error("Sélectionnez des images");
  }
  return (
    <div className={classes.bgImg}>
      <h1 className={classes.title}>Ajouter un objet</h1>
      <div className={classes.formContainer}>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} className={"fullHeightPercent fullWidth"}>
            <label htmlFor="image" className={classes.imgLabel}>
              <input className={classes.inputStyle}
                     accept="image/*"
                     id="image"
                     multiple type="file"
                     onChange={(e) => setImages(e.target.files)}
              />
              <Button variant="contained" component="span" className={classes.iconImage}>
                <Tooltip title="Ajouter des images" className={classes.imgLabel}>
                  <BackupIcon/>
                </Tooltip>
                Ajouter des images
              </Button>
            </label>
            <div className={classes.marginTopOne}>
              <Select
                labelId="category"
                id="category"
                variant={"outlined"}
                value={category}
                label="Catégorie"
                onChange={(e) => setCategory(+e.target.value)}
                className={classes.fullWidth}
              >
                {
                  categoriesContextValues.categories.map((category) => {
                    return (
                      <MenuItem value={category.id} className={classes.fullWidth}>{category.name}</MenuItem>
                    )
                  })
                }
              </Select>
            </div>
            <div className={classes.marginTopOne}>
              <TextField
                id="name"
                label="Nom"
                variant="outlined"
                fullWidth
                value={name}
                className={"marginTopOne"}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={classes.marginTopOne}>
              <TextField
                id="price"
                label="Prix"
                variant="outlined"
                type={"number"}
                fullWidth
                value={price}
                className={"marginTopOne"}
                onChange={(e) => setPrice(+e.target.value)}
              />
            </div>
            <div className={classes.marginTopOne}>
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className={classes.marginTopOne}>
              <Button
                className={"marginTopOne"}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Créer mon item
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default CreateItemAdmin;
