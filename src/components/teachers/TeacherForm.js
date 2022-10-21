import React, { Component, useEffect, useState } from "react";
import NewInput from "../newInput/Newinput";
import gettingTeacherData from "../../controller/teacherData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./TeacherForm.css";

function TeacherList() {
  let items = localStorage.getItem("newState");
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
}

const TeacherForm = () => {
  const [teacherName, setTeacherName] = useState("");
  const [teaherCnic, setTeacherCnic] = useState("");
  const [passcode, setPasscode] = useState("");
  const [qualification, setQualification] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [teachRegId, setTeachRegId] = useState("");
  const [newState, setNewState] = useState([]);
  const handleTeacher = (e) => {
    e.preventDefault();
    // setIsUpdating(true);
    // setTimeout(() => {
    //   setIsUpdating(false);
    // }, 2000);

    gettingTeacherData(newState,setNewState);


    console.log(gettingTeacherData,"teacher data")

    // const newTeacherList = [
    //   ...newState,
    //   {
    //     id: newState.length + 1,
    //     teacherName,
    //     teaherCnic,
    //     qualification,
    //     course,
    //     passcode,
    //     image
    //   },
    // ];
    if (teacherName == " " || teaherCnic == " "|| qualification =="" || course =="" || passcode=="" ||image=="") {
      toast.warning("Teacher Data Not Added !", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.success("Teacher Data Added Successfully !", {
        position: "top-center",
        autoClose: 2000,
      });
  
    }

    // console.log("just updating, ", newTeacherList);
 

    // setNewState(newTeacherList);
    // setTeacherName("");
    // setTeacherCnic("");
    // setQualification("");
    // setCourse("");
    // setPasscode("");
    // setTeachRegId("");
    // setImage("");
  };

  // useEffect(() => {
  //   localStorage.setItem("newState", JSON.stringify(newState));
  //   console.log(newState, "<==record");
  //   console.log("after update data , ", TeacherList());
  // }, [newState]);



  return (
    <>
      <form onSubmit={handleTeacher} className="text-center">
        <div className="row justify-content-center mt-3">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="mb-4">
              <NewInput
                type="text"
                className="form-control"
                labelName="Teacher Name"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <NewInput
                type="number"
                className="form-control"
                labelName="CNIC"
                value={teaherCnic}
                onChange={(e) => setTeacherCnic(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <NewInput
                type="text"
                className="form-control"
                labelName="Last Qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <NewInput
                type="text"
                className="form-control"
                labelName="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <NewInput
                type="file"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <NewInput
                type="text"
                className="form-control"
                labelName="Teacher Reg Id"
                value={teachRegId}
                onChange={(e) => setTeachRegId(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <NewInput
                type="text"
                className="form-control"
                labelName="Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
              />
            </div>
          </div>
        </div>
        {isUpdating ? (
          <button className="buttonload teacher_button">
            <i className="fa fa-spinner fa-spin"></i>Saving Teacher Data
          </button>
        ) : (
          <button className="teacher_button">Save Teacher Data</button>
        )}
      </form>
      <ToastContainer />
    </>
  );
};
export default TeacherForm;
export { TeacherList };
