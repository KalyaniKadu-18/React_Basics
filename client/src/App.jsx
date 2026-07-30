import React from 'react';
import Student from '../pages/Student.jsx';
import UserContext from '../context/UserContext.js';
import Teacher from '../pages/Teacher.jsx';

function App() {

const user = {
  Name : "Kalyani",
  Rollno : 101
};

const teacher = {
  name : "Sabiha",
  field: "IT"
}

  return (
    <div>
      <UserContext.Provider value={{user,teacher}}>
        <Student />
        <Teacher/>
      </UserContext.Provider>
    </div>
  )
}

export default App