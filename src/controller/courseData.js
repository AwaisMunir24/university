import React, { Component } from 'react'

const axios = require('axios').default;

const staticCourse={
    id:1,
    courseCode:"cs201",
    subjectCode:"abc0201",
    teacherName:"abc",
    creditHours:3
}
const gettingCourseData=(previousData,setArray)=>{
    axios.get('/12345')
    .then(function(response){
        //handle success

        setTimeout(() => {
            
        }, 2000);
        setArray([...previousData,{...staticCourse}])
        console.log(previousData,"<== staticcourse")
    })
    .catch(function (error){
        //handle error
        console.log(error,"error")
    })

}
export default gettingCourseData;