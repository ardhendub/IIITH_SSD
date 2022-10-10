import React from 'react'
import { useState } from 'react';

const AddQuery = ()=>{

    const [exam, setExam] = useState('')
    const [course, setCourse] = useState('')
    const [question, setQuestion] = useState('')
    const [taroll, setTARoll] = useState('')
    const [comments, setComments] = useState('')

    const roll = sessionStorage.getItem("curr_roll")

    async function addComment(event){
        event.preventDefault()
        const response = await fetch('http://localhost:3005/api/addComment',{
          method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
          body: JSON.stringify({
            roll,exam,course,question,taroll,comments
          }),
        })
    
        const data = await response.json();
        // if(data.user){
        //   alert('SignUp Sucessful!!');
        // }
        // else{
        //   alert('Duplicate User');
        // }
        console.log(data);
      }

    return (<div>
        <h1> Query Form</h1>
        <form>
            <table>
                <tr>
                    <td>Exam Name</td>
                    <td><input onChange={(e)=>setExam(e.target.value)} type="text" placeholder="exam"></input></td>
                </tr>
                <tr>
                    <td>Course Name</td>
                    <td><input onChange={(e)=>setCourse(e.target.value)} type="text" placeholder="course"></input></td>
                </tr>
                <tr>
                    <td>Question No</td>
                    <td><input onChange={(e)=>setQuestion(e.target.value)} type="text" placeholder="question number"></input></td>
                </tr>
                <tr>
                    <td>TA's Roll</td>
                    <td>
                        <select onChange={(e)=>setTARoll(e.target.value)}>
                            <option value="none" selected="selected" hidden>Select an Option</option>
                            <option value="101">101</option>
                            <option value="102">102</option>
                            <option value="103">103</option>
                            <option value="104">104</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Comments</td>
                    <td><textarea onChange={(e)=>setComments(e.target.value)} placeholder="enter comments" rows="5" cols="50"></textarea></td>
                </tr>
            </table>
            <button type='button' onClick={addComment}>Submit</button>
        </form>
    </div>)
}

export default AddQuery