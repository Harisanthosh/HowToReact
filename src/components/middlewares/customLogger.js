// function customLogger(store) {
//   return function(next) {
//     return function(action) {
//       console.log("prevState:", store.getState());
//       console.log(action);
//       // Use this next to block it from going to the reducers
//       next(action);
//       console.log(action);
//       console.log("newState", store.getState());
//       console.log("=========================");
//     };
//   };
// }

const customLogger = store => next => action => {
  console.log("prevState:", store.getState());
  console.log(action);
  // Use this next to block it from going to the reducers
  next(action);
  console.log(action);
  console.log("newState", store.getState());
  console.log("=========================");
};

export default customLogger;
