import React from "react";
import './style.css';
const studentList = [
  {
    id: 1,
    name: "Nguyen Van A",
    age: 22,
    address:"Ha Noi"
  },
  {
    id: 2,
    name: "Nguyen Van B",
    age: 23,
    address:"TP Ho Chi Minh"
  },
  {
    id: 3,
    name: "Nguyen Van C",
    age: 12,
    address:"Hai Phong"
  },
];

const StudentInfoComponent = () => {
  return (
    
      <table border={1}>
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
        </thead>
        <tbody>
            {studentList.map((student => (
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>

                    </tr>
            )))}
        </tbody>
      </table>
    
  );
};

export default StudentInfoComponent;
