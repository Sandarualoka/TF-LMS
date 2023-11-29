import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Fav from '../../assets/fav.jpg';
import { useState } from 'react'




const FavoriteCourses = () => {

    const studentId=localStorage.getItem('studentId')
    const [courseData,setCourseData]=useState([])

  return (
    <div  style={{ display: 'flex', minHeight: '100vh' }}>
        
        <aside style={{ flex: '0 0 250px' }}>
        <Sidebar />
      </aside>
            <section className='col-md-9'>
                <div className='card'>
                <img src={Fav} alt='logo' className='img-fluid' style={{ maxWidth: '20%' , alignItems:'center' }} />
                    <h5 className='card-header'><i class="bi bi-heart-fill text-danger"></i> Favorite Courses</h5>
                    <div className='card-body table-responsive'>
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th className='text-center'>ThumbNail</th>
                                    <th className='text-center'>Name</th>
                                    <th className='text-center'>created By</th>
                                </tr>
                            </thead>
                            <tbody>
                            {courseData.map((row,index) =>
                                <tr>
                                <td className='text-center'><Link to={`/detail/`+row.course.id}><img className='round' width="80 " src={row.course.featured_img}/></Link></td>
                                <td className='text-center'><Link to={`/detail/`+row.course.id}>{row.course.title}</Link></td>
                                <td className='text-center'><Link to={`/teacher-detail/`+row.course.id}>{row.course.teacher.full_name}</Link></td>
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

export default FavoriteCourses
