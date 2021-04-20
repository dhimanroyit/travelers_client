import React from 'react';
import {useRouteMatch, Switch, Route} from 'react-router-dom';
import { faPlus, faThLarge, faThList, faUserCog } from '@fortawesome/free-solid-svg-icons'
import HeaderDashBoard from '../../HeaderDashBoard/HeaderDashBoard'
import SideBar from '../../SideBar/SideBar'
import OrderList from './../../OrderList/OrderList';
import AddService from '../../AddService/AddService';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import ManageServices from '../../ManageServices/ManageServices';

function Admin() {
  const {path, url} = useRouteMatch();
  const sidebarData = [
    {id: 'a1', title: 'order list', path: `${url}/orderlist`, icon: faThList},
    {id: 'a2', title: 'add service', path: `${url}/addservice`, icon: faPlus},
    {id: 'a3', title: 'make admin', path: `${url}/makeadmin`, icon: faUserCog},
    {id: 'a4', title: 'manage services', path: `${url}/manageservices`, icon: faThLarge},
  ]
  return (
    <section className="bg-gray-300">
      <SideBar menuData={sidebarData} />
      
      <div className="ml-64 min-h-screen">
        <HeaderDashBoard />
        <Switch>
          <Route path={`${path}/orderlist`}>
            <OrderList />
          </Route>
          <Route path={`${path}/addservice`}>
            <AddService />
          </Route>
          <Route path={`${path}/makeadmin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/manageservices`}>
            <ManageServices />
          </Route>
        </Switch>
      </div>
    </section>
  )
}

export default Admin
