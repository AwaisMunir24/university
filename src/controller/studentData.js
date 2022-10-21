import React, { Component } from 'react'

const axios = require('axios').default;

const staticStudent={
    id:1,
    studentName:"Noreena",
    fatherName:"zafar",
    cnic:1234568798,
    address:"shalimar park ",
    age:27,
    studentId:"bc190202899",

}
const gettStudentData=(previousData,setArray)=>{
    axios.get('/user/54321')
    .then(function(response){
        //handle success 
        setTimeout(() => {
            
        }, 2000);
        console.log(error)
        setArray([...previousData,{...staticStudent}])
        console.log(previousData ,"<===student")

    })   
    .catch(function (error){
        //handle error
        console.log(error)
    })
}
export default gettStudentData