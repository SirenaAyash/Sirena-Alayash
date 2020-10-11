
import React from 'react'
import {Menu} from "./MenuItem";
import './Navbar.css';

class Navbar extends React.Component
{
    render()
        {
            return(
                <nav className="NavbarItems">
                     <ul>
                        {Menu.map((item,index) =>{

                            return(
                            <li key={index} ><a className="item.cName" href="item.url">{item.title}</a></li>
                            ) 
                             })}
                    </ul> 
                 </nav>  
                     )
        }
}
export default Navbar


