import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';

export default function Form(props) {
  const [student, setStudent] = useState(props.student || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState('');
  const [errorInterviewer, setErrorInterviewer] = useState('');

  const reset = () => {
    setStudent('');
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      props.onSave();
    }
  };

  function validate() {
    if (student === '') {
      setError('Student name cannot be blank');
      return;
    }

    if (!interviewer) {
      setErrorInterviewer('You must select an interviewer');
      return;
    }

    setError('');
    props.onSave(student, interviewer);
  }

  return (
    <main className='appointment__card appointment__card--create'>
      <section className='appointment__card-left'>
        <form autoComplete='off' onSubmit={(e) => e.preventDefault()}>
          <input
            className='appointment__create-input text--semi-bold'
            name='name'
            type='text'
            placeholder='Enter Student Name'
            onKeyDown={handleEnterKey}
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            data-testid={'student-name-input'}
          />
          <section className='appointment__validation'>{error}</section>
          <InterviewerList
            interviewers={props.interviewers}
            onChange={setInterviewer}
            value={interviewer}
          />
          <section className='appointment__validation'>
            {errorInterviewer}
          </section>
        </form>
      </section>
      <section className='appointment__card-right'>
        <section className='appointment__actions'>
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={validate}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
