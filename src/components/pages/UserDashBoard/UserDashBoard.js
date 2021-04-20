import React from 'react'
import {useRouteMatch, Switch, Route} from 'react-router-dom';
import SideBar from '../../SideBar/SideBar';
import HeaderDashBoard from '../../HeaderDashBoard/HeaderDashBoard';
import { faCommentDots, faShoppingCart, faThList } from '@fortawesome/free-solid-svg-icons';

function UserDashBoard() {
  const {path, url} = useRouteMatch();
  const sidebarData = [
    {id: 'b1', title: 'book', path: `${url}/book`, icon: faShoppingCart},
    {id: 'b2', title: 'booking list', path: `${url}/bookinglist`, icon: faThList},
    {id: 'b3', title: 'review', path: `${url}/review`, icon: faCommentDots},
  ]
  return (
    <section className="bg-gray-300">
      <SideBar menuData={sidebarData} />
      
      <div className="ml-64 min-h-screen">
        <HeaderDashBoard />
        <Switch>
          <Route path={`${path}/book`}>
          </Route>
          <Route path={`${path}/bookinglist`}>
          </Route>
          <Route path={`${path}/review`}>
          </Route>
        </Switch>
      </div>
    </section>
  )
}

export default UserDashBoard
