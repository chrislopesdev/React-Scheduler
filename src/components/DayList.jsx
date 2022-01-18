import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const {days, day, setDay} = props;

  const parsedDayList = 
    Array.isArray(days) &&
    days.map((day) => {
      return <DayListItem 
              key={day.id} {...day}
              selected={day.name === props.day} 
              setDay={setDay} />});

  return (
    <ul>
      {parsedDayList}
    </ul>
  );
}