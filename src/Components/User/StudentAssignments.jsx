import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import Sidebar from './Sidebar'




const StudentAssignments = () => {

    const studentId=localStorage.getItem('studentId')
    const [assignmentData, setAssignmentData]=useState([]);
    const [assignmentStatus, setAssignmentStatus]=useState('');

   
      const markAsDone = (assignment_id,title,detail,student,teacher) =>{
        const _formData=new FormData();
        _formData.append('student_status',true);
        _formData.append('title',title);
        _formData.append('detail',detail);
        _formData.append('student',student);
        _formData.append('teacher',teacher);

       
    }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
       
       <aside style={{ flex: '0 0 250px' }}>
        <Sidebar />
      </aside>
            <section className='col-md-9'>
                <div className='card'>
                    <h5 className='card-header'><i class="bi bi-journal-minus"></i> My Assignment</h5>
                    <div className='card-body table-responsive'>
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Details</th>
                                    <th>Created By</th>
                                    <th>Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {assignmentData.map((row,index) => 
                                <tr>
                                    <td>{row.title}</td>
                                    <td>{row.detail}</td>
                                    <td><Link to={`/teacher-detail/`+row.teacher.id}>{row.teacher.full_name}</Link></td>
                                    <td>
                                        {row.student_status===false &&
                                            <button onClick={()=>markAsDone(row.id,row.title,row.detail,row.student.id,row.teacher.id)} className="btn btn-success btn-sm">Mark as Done</button>
                                        }
                                        {row.student_status===true &&
                                            <span className='badge bg-success rounded-pill'>Completed</span>
                                        }
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
       
    </div>
  )
}

export default StudentAssignments
