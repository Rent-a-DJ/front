import * as React from 'react';
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';
import {PickersDay, PickersDayProps} from '@mui/x-date-pickers/PickersDay';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
import {useState} from "react";

type CustomPickerDayProps = PickersDayProps<Date> & {
  dayIsBetween: boolean;
  isInvalid: boolean;
};
const dates = [
  "27-05-2022", "02-05-2022", "15-05-2022"
]
const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isInvalid',
})<CustomPickerDayProps>(({ theme, dayIsBetween, isInvalid }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isInvalid && {
    backgroundColor: "red",
    '&:hover, &:focus': {
      backgroundColor: "red",
    },
  }),
})) as React.ComponentType<CustomPickerDayProps>;
export default function ReservationSelector() {
  const [value, setValue] = useState<Date | null>(new Date());
  const dateFormats = dates.map(date => (new Date(Number(date.split("-")[2]), Number(date.split("-")[1]) - 1, Number(date.split("-")[0]))));

  const renderDays = (date: Date, selectedDates: Array<Date | null>, pickersDayProps: PickersDayProps<Date>) => {
    const elementInList = dateFormats.find((element) => (isSameDay(date, element)));

    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = startOfWeek(value);
    const end = endOfWeek(value);

    const dayIsBetween = isWithinInterval(date, { start, end });
    const isInvalid = elementInList != undefined;

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isInvalid={isInvalid}
      />
    );
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderDay={renderDays}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );
}
