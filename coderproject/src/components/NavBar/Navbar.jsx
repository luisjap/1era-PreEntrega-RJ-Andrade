import React from "react"
import CartWidget from "../CartWidget/CartWiget";
import "./Navbar.css"

const Navbar = () => {

    return (

        <>



<div>
<header>


            <h1>LOGO</h1>

            <ul>
                <li>
                    <a>Inicio</a>
                </li>
                <li>
                    <a>Productos</a>
                </li>
                <li>
                    <a>Contacto</a>
                </li>

            </ul>


            <CartWidget />
           

            </header>
            </div>

            
        </>

    )
}

export default Navbar;