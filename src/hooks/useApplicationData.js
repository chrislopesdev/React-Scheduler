import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        const removeSpot = updateSpots(state.day, state.days, 'REMOVE_SPOTS');
        setState({
          ...state,
          days: removeSpot,
          appointments,
        });
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then((response) => {
      const addSpot = updateSpots(state.day, state.days, 'ADD_SPOTS');
      setState({
        ...state,
        days: addSpot,
        appointments,
      });
    });
  }

  const updateSpots = (individualDay, days, variable) => {
    // console.log('day: ', individualDay);
    // console.log('days: ', days);
    // console.log('variable: ', variable);
    if (variable === 'REMOVE_SPOTS') {
      const statesDayArray = days.map((day) => {
        return { ...day, spots: spotsUpdate(individualDay, day, variable) };
      });
      console.log('statesArray', statesDayArray);
      return statesDayArray;
    }
      if (variable === 'ADD_SPOTS') {
      const statesDayArray = days.map((day) => {
        return { ...day, spots: spotsUpdate(individualDay, day, variable) };
      });
      console.log('statesArray', statesDayArray);
      return statesDayArray;
    }
  };

  const spotsUpdate = (individualDay, day, variable) => {
    let spot = day.spots;
    if (individualDay === day.name && variable === 'REMOVE_SPOTS') {
      return spot - 1;
    } else if (individualDay === day.name && variable === 'ADD_SPOTS') {
      return spot + 1;
    } else {
      return spot;
    }
  };

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`),
    ]).then((all) => {
      const [first, second, third] = all;
      setState((prev) => ({
        ...prev,
        days: first.data,
        appointments: second.data,
        interviewers: third.data,
      }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
