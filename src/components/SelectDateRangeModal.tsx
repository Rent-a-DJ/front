import React, {useContext, useEffect, useState} from "react";
import Modal from "react-modal";
import {Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {DateRange, Range, RangeKeyDict} from 'react-date-range';
import Button from "@material-ui/core/Button";
import {toast} from 'react-toastify';
import DateRangeContext from "../contextes/DateRangeContext";
import {fr} from "date-fns/locale";

const useStyles = makeStyles((theme: Theme) => ({
  cardGrid: {
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: "column",
    paddingTop: "50%",
    flexgrow: 1,
  },
  modal: {
    maxHeight: "80vh",
  },
  modalBody: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  modalForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
  },
  center: {
    marginTop: "3rem",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    textAlign: "center"
  }
}));

const SelectDateRangeModal = () => {
  const [modalIsOpen, setIsOpenModal] = useState(false)
  const [selectionRange, setSelectionRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const dateRangeContextValue = useContext(DateRangeContext);

  useEffect(() => {
    setIsOpenModal(!dateRangeContextValue.dateRange[0] || !dateRangeContextValue.dateRange[1]);
  }, [dateRangeContextValue])

  const handleSelect = (ranges: RangeKeyDict) => {
    setSelectionRange(ranges.selection)
  }

  const handleSubmit = () => {
    if (!selectionRange.startDate || !selectionRange.endDate)
      toast.error("Sélectionnez une période");
    else
      dateRangeContextValue.setDateRange([selectionRange.startDate, selectionRange.endDate])
  }

  const classes = useStyles();
  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="Buy modal"
      ariaHideApp={true}
    >
      <div className={classes.modalBody}>
        <h1 className={classes.title}>Sélectionner les dates de reservation</h1>

        <div className={classes.center}>
          <DateRange
            date={new Date()}
            ranges={[selectionRange]}
            onChange={handleSelect}
            locale={fr}
          />
        </div>
        <div className={classes.center}>
          <Button variant="contained" onClick={handleSubmit}>Continuer la navigation</Button>
        </div>
      </div>
    </Modal>
  )
}
export default SelectDateRangeModal;
