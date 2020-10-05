import React from 'react';

import {useStore} from "./hooks/store";

import './App.scss'

//fonts
import './assets/fonts/stylesheet.css'

import {Sidebar} from "./components/Sidebar/Sidebar";
import {SidebarItem} from "./components/Sidebar/SidebarItem/SidebarItem";
import {SidebarMenu} from "./components/Sidebar/SidebarMenu/SidebarMenu";
import {Chat} from "./components/Chat/Chat";
import {Redirect} from "react-router-dom";

function App() {
  const {state, actions} = useStore()

  return (

    <div className='app'>
      <Sidebar>
        {state.server.map(s=> <SidebarMenu name={s.name} key={s.id}>
          {s.rooms && s.rooms.map(r=> <SidebarItem key={r.id} name={r.name} id={r.id}/>)}
        </SidebarMenu>)}
      </Sidebar>

      <Chat/>

    </div>
  );
}

export default App;
