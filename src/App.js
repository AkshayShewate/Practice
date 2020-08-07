import React from "react";
import "./App.css";
// import firebase from './firebase'

import TimesList from './components/times-list'
import AddTimeEntryForm from './components/add-time-entry-from'

// firebase.firestore().collection('times').add({
//   title:'kk',
//   time_seconds: 45
// })

function App() {
  return (
    <div>
      <h1>Here is akshay</h1>
      <TimesList/>
      <AddTimeEntryForm/>
   </div>
  );
}

export default App;