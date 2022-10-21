import React, { Component } from "react";
const TeacherTable = (props) => {
  const {
    id,
    teacherprofile,
    teachername,
    cnic,
    qualification,
    course,
    passcode,
    pressDlt
  } = props;

  console.log(teacherprofile);
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>
          <div>
            <img src={teacherprofile} alt="iamge" />
          </div>
        </td>
        <td>
          <h4>{teachername}</h4>
        </td>
        <td>
          <p>{cnic}</p>
        </td>
        <td>
          <p>{qualification}</p>
        </td>
        <td>
          <p>{course}</p>
        </td>
        <td>{passcode}</td>
       
        <td>
          {" "}
          <select
            className="form-select form-select-lg mb-0 select_option_teacher"
            aria-label=".form-select-lg example"
          >
            <option selected className="">
              Select Status
            </option>
            <option value="blocked">Blocked</option>
            <option value="notblocked">Not Blocked</option>
          </select>
        </td>
        <td>
          <i className="fa-solid fa-circle-minus" onClick={pressDlt}></i>
        </td>
      </tr>
    </>
  );
};
export default TeacherTable;
