export function getAppointmentsForDay(state, day) {
  let dayAppointmentsArr = [];
  let filteredAppointments = [];

  for (let objDay of state.days) {
    if (objDay.name === day ) {
      dayAppointmentsArr = objDay.appointments;
    }
  }

  // appointments: [1, 2, 3]
  for (let appId of dayAppointmentsArr) {
    filteredAppointments.push(state.appointments[appId]);
  }

return filteredAppointments;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  let result = {};

  const interviewerId = interview.interviewer;
  result.student = interview.student;
  result.interviewer = state.interviewers[interviewerId];

  return result;
};

export function getInterviewersForDay(state, day) {
  let dayInterviewersArr = [];
  let filteredInterviewers = [];

  for (let objDay of state.days) {
    if (objDay.name === day ) {
      dayInterviewersArr = objDay.interviewers;
    }
  }

  // appointments: [1, 2, 3]
  for (let intId of dayInterviewersArr) {
    filteredInterviewers.push(state.interviewers[intId]);
  }

return filteredInterviewers;
};