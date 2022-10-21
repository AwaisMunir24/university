import React, { Component } from 'react'

const axios = require('axios').default;


const staticTeacher={
    id:1,
    teacherName:"abc",
    cnic:"33100-0000-0",
    qualification:"master",
    course:"cs201",
    teacherId:123,
}




const  gettingTeacherData= (previousData,setArray)=>{

axios.get('/user?id12345')
.then(function (response ){
    //handle success
    console.log(response);
    setTimeout(()=>{

    },2000)
    setArray([...previousData,{...staticTeacher}])
    console.log(previousData,"<==");
})
.catch(function (error){
    //handle error
    console.log(error,"error");
})



}
export default gettingTeacherData