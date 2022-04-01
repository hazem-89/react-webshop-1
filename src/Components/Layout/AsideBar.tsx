import React, { Fragment, MouseEventHandler, useState } from 'react'
import * as AiIcon from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import './AsideBar.css'


const AsideBar = (props: { onClick: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <Fragment>
      <div className='hamcontainer' onClick={showSideBar} >
        <div className='first'></div>
        <div className='second'></div>
        <div className='third'></div>
      </div>
      <nav className={sideBar ? 'sidebar-menu active' : 'sidebar-menu'}>
        <ul className="aside-items">
          <li className="closeMenuBar">
            <Link to='#' className={'closeMenuBar'} onClick={showSideBar}>
              <AiIcon.AiOutlineCloseSquare />
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.link}>
                  <div className="cName">
                    <span>{item.icon}</span>
                    <h2>{item.title}</h2>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </Fragment>
  )
}

export default AsideBar