import React from 'react';
import {useLocation} from 'react-router-dom';

function HeaderDashBoard({title, avater}) {
  const {pathname} = useLocation();
  let header;
  if(pathname === "/admin/orderlist") {
    header = 'Order List';
  } else if(pathname === "/admin/addservice") {
    header = 'Add Service';
  } else if(pathname === "/admin/makeadmin") {
    header = 'Make Admin';
  } else if(pathname === "/admin/manageservices") {
    header = 'Manage Services';
  } else if(pathname === "/user/book"){
    header = 'Book';
  } else if(pathname === "/user/bookinglist") {
    header = 'booking list';
  } else if(pathname === "/user/review") {
    header = 'review';
  } else if(pathname === "/user") {
    header = 'user';
  } else {
    header = 'Admin'
  }
  return (
    <header className="px-8 py-5 flex justify-between items-center bg-white">
      <h1 className="text-xl capitalize font-bold">{header}</h1>
      <p className="">Dhiman Roy</p>
    </header>
  )
}

export default HeaderDashBoard
