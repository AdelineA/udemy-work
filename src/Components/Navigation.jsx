import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'



export default function Navigation() {
  return (
    <header class="relative px-10 flex flex-col">
      <nav class="flex nav1">
         <svg class="w-20 h-20" viewBox="0 0 91 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 8.112L7.024 4.056 0 8.112V4.056L7.025 0l7.026 4.056v4.056h-.001z" fill="#A435F0"/><path d="M0 11.518h3.68v8.941c0 2.31 1.725 3.436 3.345 3.436 1.634 0 3.346-1.156 3.346-3.467v-8.91h3.68v9.154c0 2.128-.669 3.77-2.007 4.896-1.339 1.125-3.011 1.673-5.05 1.673-2.037 0-3.71-.547-5.017-1.673C.669 24.443 0 22.862 0 20.763v-9.245zM45.866 22.63c-1.114.992-2.383 1.478-3.83 1.478-2.64 0-4.41-1.504-4.61-3.833h11.89s.08-.752.08-1.458c0-2.19-.7-4.015-2.13-5.505-1.398-1.49-3.222-2.22-5.443-2.22-2.341 0-4.258.73-5.779 2.22-1.49 1.49-2.25 3.436-2.25 5.87v.12c0 2.403.76 4.319 2.25 5.749 1.49 1.429 3.467 2.159 5.87 2.159 2.794 0 5.017-1.102 6.685-3.002l-2.733-1.578zm-6.994-7.463c.82-.639 1.825-.973 2.95-.973 1.064 0 1.946.334 2.707 1.004.726.61 1.118 1.359 1.152 2.22H37.52c.118-.89.568-1.64 1.353-2.25zM82.91 29.276C81.417 32.801 79.855 34 77.46 34H75.8v-3.262h1.342c.824 0 1.59-.31 2.32-1.994l.73-1.686-6.296-15.54h3.741l4.471 11.192 4.593-11.192h3.74l-7.53 17.758zM28.377 5.649v7.257c-1.206-1.08-3.082-1.723-4.896-1.723-2.16 0-3.984.76-5.474 2.31-1.46 1.521-2.19 3.406-2.19 5.687 0 2.282.73 4.167 2.19 5.718 1.49 1.521 3.315 2.282 5.474 2.282 2.49 0 4.064-.979 4.896-1.746v1.411h3.65V5.65h-3.65zm-1.095 16.878c-.882.882-2.007 1.339-3.315 1.339-1.308 0-2.372-.457-3.254-1.339-.85-.882-1.277-2.007-1.277-3.345 0-1.339.426-2.464 1.277-3.346.882-.882 1.946-1.338 3.254-1.338s2.433.456 3.315 1.338c.912.882 1.37 2.007 1.37 3.346 0 1.338-.458 2.463-1.37 3.345zM68.222 11.214c-2.772 0-4.213 1.15-5.2 2.258-.395-.753-1.507-2.258-4.105-2.258-2.196 0-3.49 1.11-4.136 1.9V11.52h-3.618v15.327h3.618v-8.82c0-2.068 1.278-3.558 2.98-3.558 1.735 0 2.738 1.308 2.738 3.406v8.971h3.619v-8.82c0-2.098 1.246-3.558 3.04-3.558 1.734 0 2.737 1.308 2.737 3.405v8.972h3.65v-9.488c0-3.996-2.148-6.142-5.323-6.142z" fill="#000"/>
         </svg>
         <div class="flex w-full py-7">
           <NavLink to="#" class="py-1 px-8 text-sm font-normal">Categories</NavLink> 

           <NavLink class="flex">
           {/* <div class="absolute inset-y-2 flex flex-wrap items-center pl-3 pointer-events-none">
             <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div> */}
            <input type="search" id="default-search" class="block w-full p-2 pl-12 text-sm text-gray-900 border border-gray-200 rounded-full bg-white " placeholder="Search for anything" required/>
            </NavLink>
            <div class="div1">
               <NavLink to="#" class="pl-2 px-2 py-3 text-sm font-normal">Udemy Business</NavLink> 
              <NavLink to="#" class="pl-2 px-2 py-3 text-sm font-normal">Tech on Udemy</NavLink> 
              <NavLink to="#" class="pl-2 px-2 py-3 text-sm font-normal">My learning</NavLink>
            </div>
            
             
              
          </div>

      </nav>
      <Navbar  classname="nav2" collapseOnSelect expand="lg" bg="white" variant="white ">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Development" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Business" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Finance&Accounting" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="IT&Software" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Office productivity" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Personal Development" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Design" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Marketing" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Health & Fitness" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Music" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </header>
  
    
  )
}