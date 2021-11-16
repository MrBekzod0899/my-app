import logo from '../../images/SchoolLogo.jpg'
import React, { Component } from 'react'
import { NavbarBrand,Navbar, NavbarToggler, Collapse, Nav, NavItem, CardBody} from 'reactstrap'
import { NavLink } from 'react-router-dom';
import './navbar.css'
import 'aos'
import Aos from 'aos';
import 'aos/dist/aos.css'
 class NavbarHeader extends Component {
    
     constructor(props){
         super(props);
           this.state={
               isOpen:false,
               a:11,
               scrolltop:0
               
           }
     }
     toggle=()=>{
      this.setState({
          isOpen:!this.state.isOpen
      })
     }
     componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
        Aos.init({
            duration:2000
        })
      }
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
      
      listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop      
        this.setState({
          scrolltop: winScroll,
        })

        console.log(this.state.scrolltop)
      }
     
      render() {
        return (
                <Navbar 
                color="dark" dark expand="lg"
                className={this.state.scrolltop>80 ? "bigNavbar": ""}
                >
                    <NavbarBrand >
                        <img className="img-fluid" src={logo}/>
                    </NavbarBrand>
                    <NavbarToggler  toggle={this.toggle}/>
                   <Collapse isOpen={this.state.isOpen} navbar   
                    >
                        <Nav 
                         className="navbar" navbar
                         data-aos="zoom-in"
                         >
                            <NavItem>
                                <NavLink to={'/'}>Bosh Sahifa</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/maktab-hayoti'} >Maktab hayoti</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/qabul'} >Qabul</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/yangiliklar'} >Yangiliklar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/mamuriyat'}>Maktab ma'muriyati</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'alochilar'} >Maktab a'lochilari</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
        )
    }
}
export default NavbarHeader
