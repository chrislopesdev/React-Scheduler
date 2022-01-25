import React, {useEffect} from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Status from './Status';
import Confirm from './Confirm';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';

import './styles.scss';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";

export default function Appointment(props) {

  const {mode, transition, back} = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
  const interview = {
    student: name,
    interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(result => {
      transition(SHOW);
    })
  }

  function deleteInterview(interviewId) {
    transition(DELETING, true);
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
  }

  function onConfirm() {
    transition(CONFIRM, true);
  }

  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW);

    }
    if (!props.interview && mode === SHOW) {
      transition(EMPTY);
    }
    
  }, [mode, props.interview, transition]);

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer || {interviewer:{name:''}}}
          onDelete={onConfirm}
          // onEdit={props.onEdit}
          />
          )}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back()} onSave={save} />}
      {mode === SAVING && <Status message={'Saving'}/>}
      {mode === CONFIRM && <Confirm message={'Are you sure you would like to delete?'} onConfirm={deleteInterview} onCancel={() => back()} />}
      {mode === DELETING && <Status message={'Deleting'} />}
    </article>
  );
};