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