import React, { Component, useState } from "react";
import profile from "../../assets/image/awais.jpg";
import Users from "../../components/user/Users";
import StudentForm ,{studentList} from "../../components/studentform/StudentForm";
import "./Students.css";
const Students = () => {
  const [studentsRecord, setStudentsRecord] = useState(studentList );

const handleStudentShowData=()=>{
  setStudentsRecord(studentList);
}



  return (
    <>
      <section>
        <div className="student_records">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-12">
                <h4>Students</h4>
              </div>
            </div>
            <div className="row">
              {/* <!-- Tabs navs --> */}
              <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    Add Student
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="ex1-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                    onClick={handleStudentShowData}
                  >
                    View Student Lists
                  </a>
                </li>
              </ul>
              {/* <!-- Tabs navs --> */}

              {/* <!-- Tabs content --> */}
              <div className="tab-content" id="ex1-content">
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <StudentForm/>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <div className="col-lg-12">
                    <table className="table ">
                      <thead>
                        <tr>
                        <th>id</th>
                        <th>Student Name</th>
                        <th>Image</th>
                        <th>Father Name</th>
                        <th>CNIC</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Student Id</th>
                        <th>Password</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentsRecord.map((e, idx) => (
                          <Users
                            key={idx}
                            id={e.id}
                            image={e.image}
                            studentName={e.studentName}
                            fatherName={e.father}
                            cnic={e.cnic}
                            address={e.address}
                            age={e.age}
                            studentId={e.regId}
                            password={e.password}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* <!-- Tabs content --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Students;
