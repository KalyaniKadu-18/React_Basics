import React from 'react';
import Student from '../src/pages/Student.jsx';
import UserContext from '../context/UserContext.js';
import Teacher from '../src/pages/Teacher.jsx';
import Demo from '../src/pages/Demo.jsx';

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
      <Demo/>
    </div>
  )
}

export default App