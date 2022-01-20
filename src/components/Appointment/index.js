import React from 'react';
import Header from '/src/components/Appointment/Header';
import Show from '/src/components/Appointment/Show';
import Empty from '/src/components/Appointment/Empty';

import './styles.scss';

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer.name} /> : <Empty />}
    </article>
  );
};