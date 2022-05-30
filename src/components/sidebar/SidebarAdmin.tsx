import React, {useContext} from 'react'
import {makeStyles} from "@mui/styles";
import useSidebarAdmin from "../../hooks/useSidebarAdmin";
import DateRangeContext from "../../contextes/DateRangeContext";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "100%",
    width: "250px",
    backgroundColor: "blue",
  },
  sidebarList: {
    height: "auto",
    width: "100%",
    padding: 0,
  },
  row: {
    width: "100%",
    height: "60px",
    listStyleType: "none",
    margin: 0,
    display: "flex",
    flexDirection: "row",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    '&:hover': {
      background: "#f00",
    },
  },
  icon: {
    flex: "30%",
    display: "grid",
    placeItems: "center",
  },
  title: {
    flex: "70%",
  },
  link: {
    color: "white"
  }
}));

const SidebarAdmin: React.FC = () => {
  const {sidebarAdmin} = useSidebarAdmin();
  const dateRangeContextValue = useContext(DateRangeContext);
  const classes = useStyles();

  const showElements = dateRangeContextValue.dateRange[0] != null && dateRangeContextValue.dateRange[1] != null;


  return (
    <div className={classes.sidebar}>
      <ul className={classes.sidebarList}>
        {showElements && (
          sidebarAdmin.map((value) => {
            return (
              <li
                key={value.title}
                className={classes.row}>
                <Link to={value.link} className={classes.link}>
                  <div className={classes.icon}>{value.icon}</div>
                  <div className={classes.title}>{value.title}</div>
                </Link>
              </li>
            )

          }))}
          </ul>
          </div>
          );
        }


        export default SidebarAdmin;
