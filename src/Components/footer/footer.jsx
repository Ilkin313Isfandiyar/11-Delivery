import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div>
                    <footer>

            <div class="footer-content">

              <h3>Footer Example</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam           vitae felis scelerisque, gravida sapien non, cursus augue. Aenean id        pretium turpis. Suspendisse eros nunc, sollicitudin nec.</p>

              <ul class="socials">

                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>

                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>

                <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>

              </ul>

            </div>

            <div class="footer-bottom">

              <Link className='link11' to='/'><p>11 Delivery <span id="year"></span></p></Link>

              <div class="footer-menu">

                <ul class="f-menu">

                  <Link className='linkElement' to='/'><li>Home</li></Link>

                  <Link className='linkElement' to='/orders'><li>Orders</li></Link>

                  <Link className='linkElement' to='/createorder'><li>Create Order</li></Link>

                  <Link className='linkElement' to='/contact'><li>Contact</li></Link>

                  <Link className='linkElement' to='/login'><li>Login</li></Link>

                </ul>

              </div>

            </div>

            </footer>
    </div>
  )
}
