

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Calendar from 'react-calendar';
// import Sidebar from './Sidebar';
// import Dash from '../../assets/dash.jpg';
// import 'react-calendar/dist/Calendar.css';

// const Dashboard = () => {
//   const [dashbarData, setDashbarData] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const studentId = localStorage.getItem('studentId');

//   useEffect(() => {
//     // Fetch data or perform other necessary actions
//     // ...

//     // Update dashbarData state
//     // setDashbarData(updatedData);

//   }, []);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     // You can perform actions based on the selected date
//   };

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       <aside style={{ flex: '0 0 250px' }}>
//         <Sidebar />
//       </aside>
//       <section style={{ flex: '1' }}>
//         <div className='container mt-4'>
//           <div className='row mt-3'>
//             <img src={Dash} alt='logo' className='img-fluid' style={{ maxWidth: '20%', alignItems: 'center' }} />
//             <h4>Dashboard</h4>
//             <div className='col-md-8 pt-3'>

//             <div className='col-md-4 pt-3'>
//           <div className='card border-primary' style={{ borderRadius: '10px' }}>
//             <h5 className='card-header text-white' style={{ borderRadius: '10px'  , backgroundColor: '#2962ff'}}>Enrolled Courses</h5>
//             <div className='card-body'>
//               <h3>
//                 <Link to="/my-courses" className='text-warning'>
//                   {dashbarData.enrolled_courses} <i className="bi bi-cart-check-fill"></i>
//                 </Link>
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className='col-md-4 pt-3'>
//           <div className='card border-primary' style={{ borderRadius: '10px' }}>
//             <h5 className='card-header text-white' style={{ borderRadius: '10px' , backgroundColor: '#2962ff'}}>Completed Assignment</h5>
//             <div className='card-body'>
//               <h3><Link to="/my-assignments">{dashbarData.complete_assignments} <i className="bi bi-journal-check"></i></Link></h3>
//             </div>
//           </div>
//         </div>

//         <div className='col-md-4 pt-3'>
//           <div className='card border-primary' style={{ borderRadius: '10px' }}>
//             <h5 className='card-header text-white' style={{ borderRadius: '10px' , backgroundColor: '#2962ff'}}>Pending Assignment</h5>
//             <div className='card-body'>
//               <h3><Link to="/my-assignments" className='text-danger'>{dashbarData.pending_assignments} <i className="bi bi-journal-x"></i></Link></h3>
//             </div>
//           </div>
//         </div>
//               {/* Your existing content */}
//             </div>
//             <div className='col-md-4 pt-3'>
//               <div className='card border-primary' style={{ borderRadius: '10px' }}>
//                 <h5 className='card-header text-white' style={{ borderRadius: '10px', backgroundColor: '#2962ff' }}>Calendar</h5>
//                 <div className='card-body'>
//                   <Calendar
//                     onChange={handleDateChange}
//                     value={selectedDate}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import Sidebar from './Sidebar';
import Dash from '../../assets/dash.jpg';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const [dashbarData, setDashbarData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const studentId = localStorage.getItem('studentId');

  useEffect(() => {
    // Fetch data or perform other necessary actions
    // ...

    // Update dashbarData state
    // setDashbarData(updatedData);

  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can perform actions based on the selected date
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ flex: '0 0 250px' }}>
        <Sidebar />
      </aside>
      <section style={{ flex: '1' }}>
        <div className='container mt-4'>
          <div className='row mt-3'>
            <img src={Dash} alt='logo' className='img-fluid' style={{ maxWidth: '20%', alignItems: 'center' }} />
            <h4>Dashboard</h4>
            <div className='col-md-8 pt-3'>

            <div className='col-md-4 pt-3'>
          <div className='card border-primary' style={{ borderRadius: '10px' }}>
            <h5 className='card-header text-white' style={{ borderRadius: '10px'  , backgroundColor: '#2962ff'}}>Enrolled Courses</h5>
            <div className='card-body'>
              <h3>
                <Link to="/my-courses" className='text-warning'>
                  {dashbarData.enrolled_courses} <i className="bi bi-cart-check-fill"></i>
                </Link>
              </h3>
            </div>
          </div>
        </div>

        <div className='col-md-4 pt-3'>
          <div className='card border-primary' style={{ borderRadius: '10px' }}>
            <h5 className='card-header text-white' style={{ borderRadius: '10px' , backgroundColor: '#2962ff'}}>Completed Assignment</h5>
            <div className='card-body'>
              <h3><Link to="/my-assignments">{dashbarData.complete_assignments} <i className="bi bi-journal-check"></i></Link></h3>
            </div>
          </div>
        </div>

        <div className='col-md-4 pt-3'>
          <div className='card border-primary' style={{ borderRadius: '10px' }}>
            <h5 className='card-header text-white' style={{ borderRadius: '10px' , backgroundColor: '#2962ff'}}>Pending Assignment</h5>
            <div className='card-body'>
              <h3><Link to="/my-assignments" className='text-danger'>{dashbarData.pending_assignments} <i className="bi bi-journal-x"></i></Link></h3>
            </div>
          </div>
        </div>
              {/* Your existing content */}
            </div>
            <div className='col-md-4 pt-3' style={{ marginTop: '-200px' }}>
              <div className='card border-primary' style={{ borderRadius: '10px' }}>
                <h5 className='card-header text-white' style={{ borderRadius: '10px', backgroundColor: '#2962ff' }}>Calendar</h5>
                <div className='card-body' style={{ paddingTop: '10px' }}>
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    style={{ fontSize: '12px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

