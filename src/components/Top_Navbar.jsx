import React from 'react'
import { MdLocationOn, MdEmail } from "react-icons/md";
import FontSizeChanger from 'react-font-size-changer';

export default function Top_Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light main_top_nav">
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div id="google_translate_element"></div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav_list">

              {/* Font Size Changer */}
              <li>
                <FontSizeChanger
                  targets={['body,h1,h2,h3,h4,h5,h6,p,a,input']}
                  options={{
                    stepSize: 1,
                    range: 8
                  }}
                  customButtons={{
                    up: <button className='nav_font_size_item'>A+</button>,
                    down: <button className='nav_font_size_item'>A-</button>,
                    style: {
                      border: "none"
                    },
                    buttonsMargin: 1
                  }}
                />
              </li>

              {/* DTE CODE */}
              <li>
                <p className="nav_dte_code">DTE CODE : 6004</p>
              </li>

              {/* location redirector */}
              <li class=" nav_location">
                <a href="https://g.page/GCOEARA?share"><MdLocationOn /></a>
              </li>

              {/* mail redirector */}
              <li class="nav_mail">
                <a href="mailto:office.gcoeavasari@dtemaharashtra.gov.in"><MdEmail /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
