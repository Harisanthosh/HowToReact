// Redux: State management library
// Immutability
// In JS all primitive types are immutable, whereas arrays are mutable
// Primitive - By value
// c=[...a] //use clone operator to preserve
// At the heart of Redux we have reducers

// Pure function
// the function should always give the same result, render should also be a pure function
// The tenets are :
// Does not mutate its arguments (array/object)
// Does not depend or change global variables
// No input/output
// No Db or network call
// No call to Date.now() or Math.random()

//Flux
// Instead of MVC we should use Flux pattern
// Action -> Dispatcher -> Store -> View -> Action
// Store is where all the state of the application is centrally stored
// Dispatcher dispatches all the actions to the store
// Store will be in a centralized place, all views will be subscribed to the Store which will updated when the store updates
// Redux is from a different community
// Reducer is not a part of Flux

//Reducer - Redux
// Reducer accepts PrevState and action from Store and provide a new state which will be updated in the store
