import React, { useState, useEffect } from "react";
import NewInput from "../newInput/Newinput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CourseForm.css";



function CourseList() {
    let items = localStorage.getItem("courseList");
    if (items) {
      return JSON.parse(items);
    } else {
      return [];
    }
  }
const CourseForm = () => {


  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [subCode, setSubCode] = useState("");
  const [teacher, setTeacher] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [courseList, setCouseList] = useState(CourseList());

  const handleCourse = (e) => {
    e.preventDefault();
    const newCourseList = [
      ...courseList,
      {
        id: courseList.length + 1,
        title,
        code,
        subCode,
        teacher,
        creditHours,
      },
    ];
    if (title == " " || code == " "|| subCode =="" || teacher =="" || creditHours=="") {
        toast.warning("Course Data Not Added !", {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
        toast.success("Course Data Added Successfully !", {
          position: "top-center",
          autoClose: 2000,
        });
      }



    setCouseList(newCourseList);
    setTitle("");
    setCode("");
    setSubCode("");
    setTeacher("");
    setCreditHours("");
  };

  useEffect(() => {
    localStorage.setItem("courseList", JSON.stringify(courseList));
  }, [courseList]);

  return (
    <>
      <form className="text-center" onSubmit={handleCourse}>
        <div className="row justify-content-center mb-3">
          <div className="col-lg-5 col-md-8 col-sm-12">
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Course Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Course Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Subject Code"
                value={subCode}
                onChange={(e) => setSubCode(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Teacher"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="number"
                className="form-control"
                labelName="Credit Hours"
                value={creditHours}
                onChange={(e) => setCreditHours(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button className="course_save">Save Course Data</button>
      </form>
      <ToastContainer />
    </>
  );
};
export default CourseForm;
export { CourseList };
