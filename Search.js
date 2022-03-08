import React, {useState} from 'react';
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Search.css";
import {Button} from "@material-ui/core";


function Search() {

    const [startDate, setStartDate] = useState (new Date());
    const [endtDate, setEndDate] = useState (new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endtDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate); 
    }
  return (


    <div className='search'>
        <DateRangePicker 
         ranges={[selectionRange]}
         onChange= {handleSelect}
         minDate= {new Date()}
         rangeColors={["rgb(1,23,36)"]}
        />
        <div className='flex'>
        <Button> Cancel</Button>
          <Button> Book Date</Button>
        </div>
         
    </div>
  )
}

export default Search;