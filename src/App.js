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
        <SidebarMenu name='home'>
          <SidebarItem name='welcome' id='1'/>
        </SidebarMenu>
        <SidebarMenu name='info'>
          <SidebarItem name='info test'/>
        </SidebarMenu>
        <SidebarMenu name='work'>
          <SidebarItem name='work test'/>
          <SidebarItem name='work test'/>
          <SidebarItem name='work test'/>
          <SidebarItem name='work test'/>
          <SidebarItem name='work test'/>
        </SidebarMenu>
      </Sidebar>

      <Chat/>

    </div>
  );
}

export default App;
