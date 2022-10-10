import React from 'react'
import { useState } from 'react';
// import jwt from 'jsonwebtoken'
// const jwt = require('jsonwebtoken')

const Dash = ()=>{

    const roll = sessionStorage.getItem("curr_roll")
    const mode = sessionStorage.getItem("order")

    const [userdata,setUserData] = useState('')

    // console.log(roll,mode)

    async function addQuery(event){
        event.preventDefault()
        window.location.href='/addQuery'
      }

    async function Result(){
        const response = await fetch('http://localhost:3005/api/getStuQuery',{
                method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                body: JSON.stringify({
                  roll
                })
            })
            // console.log(response)
            const data = await response.json()
            console.log(data.data)
            return data.data
    }

    if(roll!=null){
        if(mode==="TA"){
            return (<div>
                <h1>Students Corner For TAs</h1>

            </div>)
        }
        else if(mode==="student"){
            // console.log("this is a Student")

            // const response = fetch('http://localhost:3005/api/getStuQuery',{
            //     method: 'POST',
            //           headers: {
            //               'Content-Type': 'application/json',
            //           },
            //     body: JSON.stringify({
            //       roll
            //     })
            // })
            // var data =[]
            Result()
            // console.log(data)
            // const data = response.json()

            // console.log("this is response",data)

            return (<div>
                <table><tr>
                    <td><h1>Feedbacks</h1></td>
                    <td><button type='button' onClick={addQuery}>Add New Query</button></td>
                    </tr></table>
                    <br/>
            </div>
            )
        }
    }
    
}

export default Dash