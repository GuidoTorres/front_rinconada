import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../../data/SidebarData";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="logo">logo</div>

      <div className="areas">
        <ul>
          {SidebarData.map((item, i) => {
            return (
              <Link className="link" key={i} to={item.path}>
              <span  >
                {item.icon}
                <li >{item.title}</li>
              </span>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
