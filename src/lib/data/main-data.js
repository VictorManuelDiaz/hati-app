
/*****************************************FUNCTIONS FOR TESTING*****************************************/

export const selectContact = (index, contacts) => {
  let helperArray = contacts;
  let itemIndex = helperArray.indexOf(index);
  if (helperArray.includes(index)) {
    helperArray.splice(itemIndex, 1);
  } else {
    helperArray.push(index);
  }
  return helperArray;
}


export const validateMeetFields = (date, timeRange, user, profession) => {
  let dateE = false, timeRangeE = false, userE = false, professionE = false;

  dateE = date === '' ? true : false;
  timeRangeE = timeRange === '' ? true : false;
  userE = user == '' ? true : false;
  professionE = profession == '' ? true : false;

  if (!dateE && !timeRangeE && !userE && !professionE) return false;
  else return true;
}
