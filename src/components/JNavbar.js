import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

function JNavbar(props) {
  const icon_search = '<use xlink:href="#icon-search"></use>'
  const icon_user = '<use xlink:href="#icon-user"></use>'
  const icon_bag = '<use xlink:href="#icon-bag"></use>'
  const LOGO = '<use xlink:href="#LOGO"></use>'

  const [sideBar, setSideBar] = useState(false)
  const [sidenavwidth, setSidenavwidth] = useState('0px')

  function SideNav() {
    setSideBar(!sideBar)
    if (sideBar) {
      setSidenavwidth('0px')
      props.SetMainBlur('0px')
    } else {
      setSidenavwidth('250px')
      props.SetMainBlur('3px')
    }
  }
  
  /*useEffect(() => {
    const openNav = document.querySelector('#openNav')
    const closeNav = document.querySelector('#closeNav')
    const maincontent = document.querySelector('main')
    openNav.addEventListener('click', () => {
      document.getElementById('mySidenav').style.width = '250px'
      maincontent.style.filter = 'blur(5px)'
    })
    closeNav.addEventListener('click', () => {
      document.getElementById('mySidenav').style.width = '0'
      maincontent.style.filter = 'blur(0px)'
    })
  }, [])*/

  return (
    <>
      <header className="ju4t-nav fixed-top">
        <Navbar collapseOnSelect expand="lg" fixed="top" className=" navbar ">
          <div className="container">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand className="ml-5 ml-md-0" href="/">
              <svg dangerouslySetInnerHTML={{ __html: LOGO }} />
            </Navbar.Brand>

            <div className="d-md-none d-flex">
              <div className="navbar-icon-btn">
                <div
                  id="mySidenav"
                  className="sidenav"
                  style={{ width: sidenavwidth }}
                >
                  <Nav.Link
                    onClick={() => {
                      SideNav()
                    }}
                    id="closeNav"
                    to="/"
                    className="closebtn"
                  >
                    &times;
                  </Nav.Link>
                  <a href="#/">註冊/登入</a>
                  <a href="#/">會員相關1</a>
                  <a href="#/">會員相關2</a>
                  <a href="#/">會員相關3</a>
                </div>

                <div id="user-content">
                  <span
                    id="openNav"
                    onClick={() => {
                      SideNav()
                    }}
                    style={{ fontSize: '12px', cursor: 'pointer' }}
                  >
                    <button
                      className="btn btn-sm"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        style={{ width: '20px', height: '20px' }}
                        dangerouslySetInnerHTML={{ __html: icon_user }}
                      />
                    </button>
                  </span>
                </div>
              </div>

              <div className="navbar-icon-btn nav-bag">
                <button className="btn btn-sm " type="submit">
                  <svg
                    style={{ width: '20px', height: '20px' }}
                    dangerouslySetInnerHTML={{ __html: icon_bag }}
                  />
                  <a href="#/" className=" nav-bag-link">
                    Bag(10)
                  </a>
                </button>
              </div>
            </div>

            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="collapse navbar-collapse
              col-md-9 ml-md-auto px-0"
            >
              <Nav className="d-flex navbar-nav justify-content-center  col-md-9 ">
                <Nav.Item className="mx-4 mt-1">
                  <Nav.Link as={NavLink} to="/home">
                    產品
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-4 mt-1">
                  <Nav.Link as={NavLink} to="/about">
                    客製化工作室
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-4 mt-1">
                  <Nav.Link as={NavLink} to="/login">
                    人氣王
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-4 mt-1">
                  <Nav.Link as={NavLink} to="/product">
                    期間限定活動
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Nav className="navbar-nav   col-md-3 px-0">
                <Nav.Item className="navbar-icon-btn ml-auto d-md-block d-none">
                  <form className="  form-inline my-2 my-lg-0">
                    <div className="input-group search-group">
                      <input
                        className="form-control search-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      {/* <button className="btn btn-sm" type="submit">
                        <svg
                          dangerouslySetInnerHTML={{ __html: icon_search }}
                        />
                      </button> */}
                    </div>
                  </form>
                </Nav.Item>

                <Nav.Item className="navbar-icon-btn ml-3 d-md-none d-block">
                  <form className="  form-inline my-2 my-lg-0">
                    <input
                      className="search-mobile-version"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            <div className="d-md-flex d-none">
              <div className="dropdown navbar-icon-btn">
                <button
                  className="btn btn-sm"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    style={{ width: '20px', height: '20px' }}
                    dangerouslySetInnerHTML={{ __html: icon_user }}
                  />
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#/">
                    註冊/登入
                  </a>
                  <a className="dropdown-item" href="#/">
                    Another action
                  </a>
                </div>
              </div>

              <div className="navbar-icon-btn ml-2 nav-bag">
                <button className="btn btn-sm " type="submit">
                  <svg
                    style={{ width: '20px', height: '20px' }}
                    dangerouslySetInnerHTML={{ __html: icon_bag }}
                  />
                  <a href="#/" className=" nav-bag-link">
                    Bag(10)
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Navbar>

        <svg display="none">
          <symbol
            id="icon-search"
            width="20"
            height="20"
            viewBox="0 0 19.71 19.86"
            fill="none"
            stroke="#707070"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          >
            <path
              id="ic-actions-search"
              className="cls-1"
              d="M8.44,1.25A7.19,7.19,0,1,1,1.25,8.44,7.19,7.19,0,0,1,8.44,1.25Zm5,12.35,5,5"
            />
          </symbol>

          <symbol
            id="icon-user"
            width="20"
            height="20"
            viewBox="0 0 19.71 19.86"
            fill="none"
            stroke="#707070"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          >
            <path
              id="ic-actions-user"
              className="cls-1"
              d="M1.25,18.89,2,16.6a7.66,7.66,0,0,1,14.79,0l.71,2.29M9.09,1.25A4.85,4.85,0,1,1,4.24,6.1,4.85,4.85,0,0,1,9.09,1.25Z"
            />
          </symbol>

          <symbol
            id="icon-bag"
            width="20"
            height="20"
            viewBox="0 0 19.71 19.86"
            fill="none"
            stroke="#707070"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          >
            <path
              id="ic-shopping-bag"
              className="cls-1"
              d="M13.67,18.61H3.12a1.94,1.94,0,0,1-1.51-.74,3.56,3.56,0,0,1-.36-1.63l.4-9.65A1.93,1.93,0,0,1,3.49,5.11H13.3a1.92,1.92,0,0,1,1.85,1.48l.36,9.65a1.93,1.93,0,0,1-1.43,2.32A2.7,2.7,0,0,1,13.67,18.61ZM4.11,5.11,5,3.35A3.88,3.88,0,0,1,8.4,1.25h0a3.87,3.87,0,0,1,3.41,2.1l.87,1.76"
            />
          </symbol>

          <symbol
            id="LOGO"
            width="85"
            height="27"
            viewBox="0 0 85.428 27.534"
            fill="#af7960"
            stroke="#af7960"
            strokeWidth="2"
          >
            <path
              id="Path_374"
              data-name="Path 374"
              d="M923.638,979.595a6.77,6.77,0,0,1-1.429,4.617,5.233,5.233,0,0,1-4.149,1.624,6.478,6.478,0,0,1-1.807-.221,4.28,4.28,0,0,1-1.248-.561,10.46,10.46,0,0,1-1.145-.952l-1.308,1.275a7.524,7.524,0,0,0,5.517,2.126,8.068,8.068,0,0,0,3.957-.936,6.408,6.408,0,0,0,2.612-2.644,8.221,8.221,0,0,0,.914-3.937V962.5h-1.914Z"
              transform="translate(-912.552 -962.502)"
            />
            <path
              id="Path_375"
              data-name="Path 375"
              d="M969.922,979.016a8.306,8.306,0,0,1-.726,3.58,5.611,5.611,0,0,1-10.217,0,8.3,8.3,0,0,1-.726-3.58V962.5h-1.665v16.752a9.336,9.336,0,0,0,.953,4.269,7.092,7.092,0,0,0,2.672,2.934,7.727,7.727,0,0,0,7.763,0,7.127,7.127,0,0,0,2.658-2.934,9.339,9.339,0,0,0,.954-4.269V962.5h-1.665Z"
              transform="translate(-934.587 -962.502)"
            />
            <path
              id="Path_376"
              data-name="Path 376"
              d="M1012.809,973.255h-1.373v7.676h-6.484l5.078-8.625H1004.7l4.14-8.778-1.139-.851-5.328,11.3h5.031l-3.638,6.18-.385.654c-.016-.012.117-.2.1-.208l-.214.333V981l-.015.026h0l.015,1.471h8.171v5.184h1.373v-5.184h2.561V980.93h-2.561Z"
              transform="translate(-956.37 -962.676)"
            />
            <path
              id="Path_377"
              data-name="Path 377"
              d="M1045.074,962.5v1.681h6.636V987.5h1.7V964.183h6.667V962.5Z"
              transform="translate(-977.075 -962.502)"
            />
          </symbol>
        </svg>
      </header>
    </>
  )
}
export default JNavbar
