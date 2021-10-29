import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
            <h1>CoolTechies</h1>
            <ul>
              <li>
                Mail: <a href="mailto:xyz@gmail.com">taranjot11111@gmail.com</a>
              </li>
              <li>
                Call: <a href="tel: +123456789012">+91 9205146524</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
