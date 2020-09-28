import React from 'react';

import './App.scss'

//fonts
import './assets/fonts/stylesheet.css'

import {Sidebar} from "./components/Sidebar/Sidebar";
import {SidebarItem} from "./components/Sidebar/SidebarItem/SidebarItem";
import {SidebarMenu} from "./components/Sidebar/SidebarMenu/SidebarMenu";
import {Chat} from "./components/Chat/Chat";

function App() {
  return (
    <div className='app'>
      <Sidebar>
        <SidebarMenu name='sidebar menu 1'>
          <SidebarItem name='test'>

          </SidebarItem>
          <SidebarItem name='test1'>

          </SidebarItem>
          <SidebarItem name='test2'>

          </SidebarItem>
          <SidebarItem name='test3'>

          </SidebarItem>
        </SidebarMenu>
      </Sidebar>

      <Chat>

      </Chat>
    </div>
  );
}

export default App;
