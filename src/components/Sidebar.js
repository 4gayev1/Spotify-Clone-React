import React from "react";
import Logo from "../img/logo.svg";
import Menu from "./Sidebar/Menu";
import Playlists from "./Sidebar/Playlists";
import { Icon } from "icons";
import Download from "./Sidebar/Download";

const Sidebar = () => {
  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <a href="#" className="mb-5 px-6">
        <img src={Logo} className="h-10" />
      </a>
      <Menu />
      <nav>
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon name="plus" size={12} />{" "}
              </span>
              Create Playlists
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 to-blue-300 text-white bg-white opacity-60 group-hover:opacity-100 rounded-sm text-black">
                <Icon name="heart" size={12} />
              </span>
              Liked Songs
            </a>
          </li>
        </ul>
      </nav>

      <Playlists />
      <Download />
    </aside>
  );
};

export default Sidebar;
