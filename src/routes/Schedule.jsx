import Nav from 'react-bootstrap/Nav';
import { BsPerson } from 'react-icons/bs';
import Video from './assets/trip start video.mp4'

export default function Schedule() {
  return (
    <main style={{ padding: "1rem 0" }}>
         <Nav defaultActiveKey="/" as="ul">
      <h2>Schedule</h2>  
        <Nav.Item as="li">
      <Nav.Link href="/Home">Home</Nav.Link>
        </Nav.Item>
        <h2 >l</h2>
      <Nav.Item as="li">
        <Nav.Link href="/Teamup">Team up</Nav.Link>
        </Nav.Item>
        <h2 >l</h2>
      <Nav.Item as="li">
        <Nav.Link href="/Vote">Vote</Nav.Link>
      </Nav.Item>
      <h2 >l</h2>
        <Nav.Item as="li">
      <Nav.Link href="/views">Views</Nav.Link>
        </Nav.Item>
        <h2 >l</h2>
        <Nav.Item as="li">
      <Nav.Link href="/Schedule">Schedule</Nav.Link>
        </Nav.Item>
        <h2 >l</h2>
        
      
      <div className="nav-icons">
      <Nav.Item as="li">
      <Nav.Link href="/Member">
      <BsPerson className='icon' herf="/Member" smooth={true} duration={500} ></BsPerson>
      </Nav.Link>
    </Nav.Item>
      
      
      </div>
      </Nav>

     {/* -------------------------------------------------------------------------------------------------- */}
     

            
      
    {/* ------------------------------------------------------------------------------------------------------ */}




    </main>
  );
}