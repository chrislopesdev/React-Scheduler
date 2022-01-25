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

// Nosa's Function:

// export function getAppointmentsForDay(state, day) {
// const { days, appointments } = state;
// console.log('state', state)
//   const filteredDay = days.find(item => day === item.name);
//   if (days.length < 1 || filteredDay === undefined) {
//     return [];
//   }
//   const daysAppointment = filteredDay.appointments.map(id => appointments[id]);
//   return daysAppointment;
// }

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