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
    filteredAppointments.push(state.appointments[appId])
  }

return filteredAppointments;

  // const selectedDay = state.days.filter(dayObj => dayObj.name === day);
  // console.log('selectedDay: ', selectedDay[0].appointments)
  // if (selectedDay[0].appointments.length === 0) {
  //   return [];
  // }

  // const filteredAppointments = selectedDay[0].appointments.filter(id => id === state.appointments.id)
  // console.log(filteredAppointments)
  // return filteredAppointments;
};