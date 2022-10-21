import React, { Component, useState } from "react";
import DashBoardCard from "../../components/dashoardcard/DashBoardCard";
import profile from "../../assets/image/profile.jpg";
import './Dashboard.css';
import TeachersInfo from "../../components/teacherInfo/TeachersInfo";
const Dashboard = () => {


  return (
    <>
      <section>
        <div className="dashboard">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-12">
                <h4>Dashboard</h4>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-4 col-md-12">
               
              </div>
              <div className="col-lg-7 col-md-12 right-section-teacher-info text-center">
               

              </div>
            </div>
            <div className="row mt-5">
            <div className="col-lg-4 col-md-12">
               
    
              </div> 
              <div className="col-lg-7 col-md-12 right-section-teacher-info text-center">
               
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
