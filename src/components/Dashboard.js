import React, { useEffect, useRef, forwardRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './pages/page-account-settings.css'

const Dashboard = ({ user, setIsLoggedIn, isLoggedIn }) => {
  const navigate = useNavigate()
  const toggleMenu = useRef(null)


  console.log('user dash', isLoggedIn)

  useEffect(()=>{
    console.log('dash level', isLoggedIn)
    
    if(!isLoggedIn) {
      navigate('/login')
    }


  },[navigate, isLoggedIn])


  const menuToggler = () => {
    let toggler = toggleMenu.current.closest("html").classList
    let transition = toggleMenu.current.closest(".layout-page").previousSibling.classList
    let smoothen = toggleMenu.current.closest(".layout-container").nextSibling.classList
    console.log('transition= ', transition)

    if(toggler.contains('layout-menu-expanded')){
      toggler.add('layout-transitioning')
      toggler.remove('layout-menu-expanded')
      setTimeout(() => toggler.remove('layout-transitioning'), 1000)
    }else{
      toggler.add('layout-transitioning')
      toggler.add('layout-menu-expanded')
      setTimeout(() => toggler.remove('layout-transitioning'), 1000)
    }
  }
  

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">

          <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
              <a href="index.html" className="app-brand-link">
                <span className="app-brand-logo demo">
                  <img src="assets/img/new/image3.png" alt="image"/>
                </span>
              </a>

              <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none" onClick={menuToggler}>
                <i className="bx bx-chevron-left bx-sm align-middle"></i>
              </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">

              <li className="menu-item active">
                <a href="index.html" className="menu-link">
                  <img className="menu-icon tf-icons" src="assets/img/new/fingerprint.svg" alt="image"/>
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>

              <li className="menu-item">
                <a href="index.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>
              
              <li className="menu-item">
                <a href="index.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>

              <li className="menu-item">
                <a href="index.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>

              <li className="menu-item">
                <a href="index.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>

              <li className="menu-item">
                <a href="index.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>

              <li className="menu-item">
                <a href="index.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>

              <li className="menu-item">
                <a href="index.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>

            </ul>
          </aside>

          <div className="layout-page">

                <div className="row mt-3 mb-4 px-0 px-lg-3 mb-lg-0 mx-auto mx-lg-0">

                  <div className="col-12 col-lg-5 order-2 order-lg-1 mx-auto mx-lg-0 mt-lg-0 mt-3">
                    <div className="navbar-nav  align-items-lg-start align-items-center">

                      <div className="row">
                        <div className="col-12 text-lg-start text-center">
                          <h2>Statements</h2>
                        </div>
                        <div className="col-12 head-div">
                          <div className="btn-group" id="dropdown-icon-demo">
                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <img src="assets/img/new/calendar.svg" alt="image"/> August 2023
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center"><i className="bx bx-chevron-right scaleX-n1-rtl"></i>Action</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center"><i className="bx bx-chevron-right scaleX-n1-rtl"></i>Another action</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center"><i className="bx bx-chevron-right scaleX-n1-rtl"></i>Something else here</a>
                              </li>
                              <li>
                                <hr className="dropdown-divider"/>
                              </li>
                              <li>
                                <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center"><i className="bx bx-chevron-right scaleX-n1-rtl"></i>Separated link</a>
                              </li>
                            </ul>
                          </div>
                          &nbsp; 
                          <span className='text-center'><a href="#">+Add Filter</a></span>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  <div className="col-12 col-lg-7 order-1 order-lg-2 align-items-center mx-auto mx-lg-0 me-auto">

                    <nav id="main-nav" className="layout-navbar container-xxl navbar navbar-expand-xl justify-content-sm-between navbar-detached bg-navbar-theme">

                      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none" ref={toggleMenu} onClick={menuToggler}>
                        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                          <i className="bx bx-menu bx-sm"></i>
                        </a>
                      </div>
          
                      <div className="navbar-nav-right d-flex align-items-start " id="navbar-collapse">

                        <ul className="navbar-nav flex-row justify-content-between align-items-center ms-auto">
                      
                          <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                              <div className="dropdown-img avatar">
                                <img src="assets/img/new/Group.svg" alt="" className="img-fluid" />
                              </div>
                            </a>
                            
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                      <div className="avatar avatar-online">
                                        <img src="assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1">
                                      <span className="fw-semibold d-block">John Doe</span>
                                      <small className="text-muted">Admin</small>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <div className="dropdown-divider"></div>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bx bx-user me-2"></i>
                                  <span className="align-middle">My Profile</span>
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bx bx-cog me-2"></i>
                                  <span className="align-middle">Settings</span>
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <span className="d-flex align-items-center align-middle">
                                    <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                    <span className="flex-grow-1 align-middle">Billing</span>
                                    <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                  </span>
                                </a>
                              </li>
                              <li>
                                <div className="dropdown-divider"></div>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="/logout">
                                  <i className="bx bx-power-off me-2"></i>
                                  <span className="align-middle">Log Out</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
          
                          <li id="nav-search-div" className="nav-item d-flex align-items-center mx-3 mx-lg-5 ps-lg-3 pe-lg-5 py-1 w-lg-100 px-lg-0 px-1">
                            <i className="bx bx-search fs-4 lh-0"></i>
                            <input
                              id="nav-search"
                              type="text"
                              className="form-control pe-auto pe-lg-5 border-0 shadow-none"
                              placeholder="Search..."
                              aria-label="Search..."
                            />
                          </li>
          
                          <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                              <div className="dropdown-img avatar">
                                <img src="assets/img/new/notification.svg" alt="" className="img-fluid" />
                              </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <div className="d-flex">
                                    <div className="flex-shrink-0 me-3">
                                      <div className="avatar avatar-online">
                                        <img src="assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1">
                                      <span className="fw-semibold d-block">John Doe</span>
                                      <small className="text-muted">Admin</small>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <div className="dropdown-divider"></div>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bx bx-user me-2"></i>
                                  <span className="align-middle">My Profile</span>
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bx bx-cog me-2"></i>
                                  <span className="align-middle">Settings</span>
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <span className="d-flex align-items-center align-middle">
                                    <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                    <span className="flex-grow-1 align-middle">Billing</span>
                                    <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                  </span>
                                </a>
                              </li>
                              <li>
                                <div className="dropdown-divider"></div>
                              </li>
                              <li>
                              <Link className="dropdown-item" to="/logout">
                                  <i className="bx bx-power-off me-2"></i>
                                  <span className="align-middle">Log Out</span>
                              </Link> 
                              </li>
                            </ul>
                          </li>
          
                        </ul>
                      
                      </div>

                    </nav>
                  </div>

                </div>





            <div className="content-wrapper">

              <div className="container-xxl flex-grow-1 container-p-y">

                <div id="dash-card" className="card text-white my-3">
                  <div className="card-body">
                    <div className="row gap-0 row-gap-3">
                      
                      <div className="col-lg-4 col-12 d-flex align-items-center justify-content-start flex-row px-auto">
                        <div className="row">
                          <div className="col-4">
                            <img className="img-fluid me-2" src="assets/img/new/person.svg" alt="image"/>
                          </div>
                          <div className="col-8">
                            <p className="text-dark">Owner(Payee Name)</p>
                            <h5 className="text-dark"><b>Michael Kings</b></h5>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-4 col-12 px-5 d-flex align-items-center">
                        <div className="row">

                          <div className="col-12">
                            <p className="d-flex flex-md-row flex-column align-items-center justify-content-between mb-1 mt-1">
                              <span className="owner-field">Owner's Email:</span>
                              <span className="owner-text text-dark"><b>michael.kings@email.com</b></span>
                            </p>
                          </div>

                          <hr className="card-line mx-auto"/>

                          <div className="col-12">
                            <p className="d-flex flex-md-row flex-column justify-content-between align-items-center mb-1 mt-1">
                              <span className="owner-field">Owner's Phone:</span>
                              <span className="owner-text text-dark"><b>+234&nbsp;568 890 3456</b></span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <hr className="card-line mx-auto d-block d-lg-none w-75"/>
                      
                      <div className="col-lg-4 col-12 px-5 d-flex align-items-center">
                        <div className="row">

                          <div className="col-12">
                            <p className="d-flex flex-md-row flex-column align-items-center justify-content-between mb-1 mt-1">
                              <span className="owner-field">Owner's Email:</span>
                              <span className="owner-text text-dark"><b>michael.kings@email.com</b></span>
                            </p>
                          </div>

                          <hr className="card-line mx-auto"/>

                          <div className="col-12">
                            <p className="d-flex flex-md-row flex-column justify-content-between align-items-center mb-1 mt-1">
                              <span className="owner-field">Owner's Phone:</span>
                              <span className="owner-text text-dark"><b>+234&nbsp;568 890 3456</b></span>
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    
                    <div className="card mb-4">
                      <div className="card-header bg-dark text-white d-flex flex-lg-row flex-column align-items-center justify-content-between">
                        <h5 className="my-auto text-white mb-3 mb-lg-0">Table Header &amp; Footer</h5>

                        <div>
                          <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                              Secondary
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                              <li>
                                <hr className="dropdown-divider"/>
                              </li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                          </div>
                          
                          <div className="btn-group ms-3">
                            <button type="button" className="btn btn-outline-secondary btn-icon rounded-pill dropdown-toggle hide-arrow text-white" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                              <li>
                                <hr className="dropdown-divider"/>
                              </li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr className="dash-head">
                              <th>Project</th>
                              <th>Client</th>
                              <th>Users</th>
                              <th>Status</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>
                            
                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>
                          </tbody>

                          <tfoot className="table-border-bottom-0 p-3">
                            <tr>
                              <th colSpan="3">Total Revenue</th>
                              <th>Status</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>

                    
                    <div className="card mb-4">
                      <div className="card-header bg-dark text-white d-flex flex-lg-row flex-column align-items-center justify-content-between">
                        <h5 className="my-auto text-white mb-3 mb-lg-0">Table Header &amp; Footer</h5>

                        <div>
                          <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                              Secondary
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                              <li>
                                <hr className="dropdown-divider"/>
                              </li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                          </div>
                          
                          <div className="btn-group ms-3">
                            <button type="button" className="btn btn-outline-secondary btn-icon rounded-pill dropdown-toggle hide-arrow text-white" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                              <li>
                                <hr className="dropdown-divider"/>
                              </li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr className="dash-head">
                              <th>Project</th>
                              <th>Client</th>
                              <th>Users</th>
                              <th>Status</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>
                            
                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>
                          </tbody>
                          <tfoot className="table-border-bottom-0 p-3">
                            <tr>
                              <th colSpan="3">Total Revenue</th>
                              <th>Status</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    
                    
                    <div className="card mb-4">
                      <div className="card-header bg-dark text-white d-flex flex-lg-row flex-column align-items-center justify-content-between">
                        <h5 className="my-auto text-white mb-3 mb-lg-0">Table Header &amp; Footer</h5>

                        <div>
                          <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                              Secondary
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                              <li>
                                <hr className="dropdown-divider"/>
                              </li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                          </div>
                          
                          <div className="btn-group ms-3">
                            <button type="button" className="btn btn-outline-secondary btn-icon rounded-pill dropdown-toggle hide-arrow text-white" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                              <li>
                                <hr className="dropdown-divider"/>
                              </li>
                              <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr className="dash-head">
                              <th>Project</th>
                              <th>Client</th>
                              <th>Users</th>
                              <th>Status</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>

                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>
                            
                            <tr>
                              
                              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                              
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>
                              <td>Albert Cook</td>

                            </tr>
                          </tbody>
                          <tfoot className="table-border-bottom-0 p-3">
                            <tr>
                              <th colSpan="3">Total Revenue</th>
                              <th>Status</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

              <div className="footer-auth px-lg-5 px-3">
                <span><p>&copy; Padimi 2023</p></span>
                <span>
                  <p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>
                      help@padimi.com
                  </p>
                </span>
              </div>

              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>

        <div className="layout-overlay layout-menu-toggle" onClick={menuToggler}></div>
      </div>
    </>
  )
}

export default Dashboard