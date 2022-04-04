import React from 'react';
import Sidebar from '../components/Sidebar';
const About = () => {
  return (
    <div>
      <Sidebar width={'100%'} height={"100px"} background={"yellow"}>
          <h1>NavBar</h1>

        </Sidebar>
      
      <Sidebar width={300} height={"100vh"} background={"lightgreen"}>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
        </Sidebar>
        

    </div>
  )
}

export default About