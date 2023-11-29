

import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import Course from '../../assets/myCrz.jpg';


const MyCourses = () => {
  const studentId = localStorage.getItem('studentId');
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    // Fetch data or perform other necessary actions
    // ...

    // Update courseData state
    // setCourseData(updatedData);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ flex: '0 0 250px' }}>
        <Sidebar />
      </aside>
      <section style={{ flex: '1' }}>
        <div className='card'>
        <img src={Course} alt='logo' className='img-fluid' style={{ maxWidth: '20%' , alignItems:'center' }} />

          <h4 className='card-header'>
            <i className="bi bi-journals" /> My Courses
          </h4>
          <div className='card-body table-responsive'>
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  <th className='text-center'>Created By</th>
                  <th className='text-center'>Course Name</th>
                  <th className='text-center'>Instructor</th>
                  <th className='text-center'>Materials</th>
                </tr>
              </thead>
              <tbody>
                {courseData.map((row, index) => (
                  <tr key={index}>
                    <td className='text-center'>
                      <Link to={`/teacher-detail/${row.course.teacher.id}`}>
                        <img className='imgmeet' src={row.course.teacher.profile_img} alt={`Teacher ${row.course.teacher.full_name}`} />
                      </Link>
                    </td>
                    <td className='text-center'>
                      <Link to={`/detail/${row.course.id}`}>{row.course.title}</Link>
                    </td>
                    <td className='text-center'>{row.course.teacher.full_name}</td>
                    <td className='text-center'>
                      <Link to={`/user/study-material/${row.course.id}`} className='btn text-white btn-sm btn-info mb-2 me-2'>
                        Study Material
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyCourses;
