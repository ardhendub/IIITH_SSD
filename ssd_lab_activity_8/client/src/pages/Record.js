import React from 'react'

const Record = ({key,exam,course,question,roll,stuComment,taComment})=>{
    return (<div>
        Exam Name: {exam}<br/>
        Course Name: {course}<br/>
        Question No: {question}<br/>
        TA roll: {roll}<br/>
        Student Comment: {stuComment}<br/>
        TA COmment: {taComment}<br/>
    </div>)
}

export default Record