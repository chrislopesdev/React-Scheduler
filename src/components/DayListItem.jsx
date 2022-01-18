import React from "react";
import classNames from "classnames";

import "./DayListItem.scss";

export default function DayListItem(props) {
  const {name, spots, selected, setDay} = props;
  const dayClass = classNames(
    "day-list__item",
    {"day-list__item--selected": selected,
    "day-list__item--full": spots === 0
    });

  return (
    <li onClick={() => setDay(name)} className={dayClass}>
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{spots} spots remaining</h3>
    </li>
  );
}
