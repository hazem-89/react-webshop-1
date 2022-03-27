import React, { Fragment, MouseEventHandler, useState } from 'react'
// import { Link } from 'react-router-dom'
// import classes from './AsideBar.module.css';
import * as AiIcon from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
// import * as MdIcon from 'react-icons/md'
// import * as FcIcon from 'react-icons/fc'
import './AsideBar.css'
const AsideBar = (props: { onClick: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  const [sideBar, setSideBar] = useState(true);

  const showSideBar = () => setSideBar(!sideBar);

  return (


    <>
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
                  {/* {item.icon} */}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
    // <Fragment>

    //   <div className={sideBar ? 'sideBar.active' : 'sideBar'}>
    //     <Link to='#' className={classes['closeMenuBar']}>
    //       <AiIcon.AiOutlineCloseSquare />
    //     </Link>
    //     <div className={classes['nav-contents']}>
    //       <div className={classes['aside-links-container']}>
    //         <div className={classes['link']}>
    //           <AiIcon.AiOutlineHome />
    //           <span >Home</span>
    //         </div>
    //         <span className={classes['link-separator']}></span>

    //         <div className={classes['link']}>
    //           <AiIcon.AiOutlineUser />
    //           <span >User</span>
    //         </div>
    //         <span className={classes['link-separator']}></span>

    //         <div className={classes['link']}>
    //           <FcIcon.FcAbout />
    //           <span >About</span>
    //         </div>
    //         <span className={classes['link-separator']}></span>
    //         <div className={classes['link']}>
    //           <AiIcon.AiOutlineInfoCircle />
    //           <span >Info</span>
    //         </div>
    //         <span className={classes['link-separator']}></span>

    //         <div className={classes['link']}>
    //           <FcIcon.FcFaq />
    //           <span>FAQ</span>
    //         </div>
    //         <span className={classes['link-separator']}></span>

    //         <div className={classes['link']}>
    //           <MdIcon.MdAdminPanelSettings />
    //           <Link to={'/login'}><span style={{ color: 'rgb(240, 41, 41)' }}>Admin</span></Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Fragment>

  )
}

export default AsideBar