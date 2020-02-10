1. What problem does the context API help solve?

Context API is essentially a way to create global state variables that can be passed around components in a React Application. Context API helps to solve the problem of prop drilling in a React App. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions in Redux are information that describes events that occured in the UI. An action is an object that is dispatched to the reducers and tell the reducer how to update the state tree. Reducers are functions that take in the current state tree and an action as arguments. Reducers use the switch case to check the action type based on the dispatched action and then update the state tree according to the action type and action payload. The store gets updated by the reducer and holds the updated state. The store is considered the single source of truth because the store holds the state object for the entire application in a centralized location.  

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application level state is accessible by all components in the application. Component state is component specific. Component level state has to be passed manually to the component that needs it. Component state can be used in a component that has a form for example. State in that component can be held and managed specifically by the component that is using it. Application level state can be used in situations where multiple components are using the same state variables. Instead of passing each state variable manually to each component, application state can be used to update state across multiple components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware in a react application. When an action creator is called, redux-thunk intercepts and acts on the returned data. If the data returned is an action, it forwards the action to the reducer. If the data returned is a function, then it invokes the thunk and passes the dispatch function as an argument to it. Redux-thunk allows async functions like API calls to be used in the application.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is Context API because of its simplicity in a React App. It doesn't require as much boilerplate setup as required in a Redux Application. Another reason I prefer Context API is that more developers in industry appear to be using it over Redux. Many others are transitioning from Redux to Context API.
