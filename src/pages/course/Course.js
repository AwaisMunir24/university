import React, { Component, useState } from "react";
import "./Course.css";
import CourseForm, { CourseList } from "../../components/courseForm/CourseForm";
import CourseListing from "../../components/courselist/CourseList";
const Course = () => {
  const [courselisting, setCourseListing] = useState(CourseList);

  const CourseShowList = () => {
    setCourseListing(CourseList);
  };

  return (
    <>
      <section>
        <div className="course_section">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-12">
                <h4>Course</h4>
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
                    Course
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
                    onClick={CourseShowList}
                  >
                    Course List
                  </a>
                </li>
              </ul>
              {/* <!-- Tabs navs -->  */}

              {/* <!-- Tabs content --> */}
              <div className="tab-content" id="ex1-content">
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <CourseForm />
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
                          <th>#</th>
                          <th>Course title</th>
                          <th>Course Code</th>
                          <th>Subject Code</th>
                          <th>Teacher</th>
                          <th>Credit Hours</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courselisting.map((e, idx) => (
                          <CourseListing
                            key={idx}
                            id={e.id}
                            coursetitle={e.title}
                            coursecode={e.code}
                            subjectcode={e.subCode}
                            teacher={e.teacher}
                            credithours={e.creditHours}
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
export default Course;
