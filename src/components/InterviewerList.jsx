import React from 'react';
import InterviewerListItem from './InterviewerListItem';

import './InterviewerList.scss'

export default function InterviewerList(props) {
  const {interviewers, setInterviewer, interviewer} = props;

  const parsedInterviewers = 
    Array.isArray(interviewers) &&
    interviewers.map((interviewerItem) => {
      return <InterviewerListItem
              key={interviewerItem.id} {...interviewerItem}
              selected={interviewerItem.id === interviewer}
              setInterviewer={setInterviewer}
              />
    });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {parsedInterviewers}
      </ul>
    </section>
  );
};