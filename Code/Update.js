function handler(input) {
    // Get oldID & newID from input
    const oldID = Array.isArray(input[0].oldID) ? input[0].oldID : [];
    const newID = Array.isArray(input[1].newID) ? input[1].newID : [];
  
    // Function filterNewEntries filter newID not exist oldID
    return filterNewEntries(oldID, newID);
  }
  
  function filterNewEntries(oldID, newID) {
    // If oldID is empty, return newID
    if (oldID.length === 0) {
      return newID;
    }
  
    // if userId & courseId in newID exist in oldID then skip, else push to result
    const result = newID.filter((item) => {
      return !oldID.some((oldItem) => {
        return oldItem.userId === item.userId && oldItem.courseId === item.courseId;
      });
    });
  
    console.log(result);
    return result;
  }
  