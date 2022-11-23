import Nav from 'react-bootstrap/Nav';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineSend,AiOutlineDown } from 'react-icons/ai'
import Video from './assets/trip start video.mp4'
import './Teamup.css'

// function {
//     var i;
//     var q;
//       for (var i = 0; i < q ; i++) {
//         // 做某件事
//       }
// }

// var testInput = document.getElementById("testInput");
// var submitBtn = document.querySelector(".submitBtn");

// function FsubmitBtn(value) {
//   var str = "";
//   var submitValue = testInput.value;
//   str = submitValue;
//   alert(str);
// }
// submitBtn.addEventListener("click", FsubmitBtn);


export default function Teamup() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Nav  defaultActiveKey="/" as="ul">
        <h2>Team up</h2>
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
      <div className='Home'>
        <video autoPlay loop muted id='video'>
          <source src={Video} type='video/mp4' />
        </video>

        <center>
          <div className="content">


            <div name='book' className='search'>
              <div class="mb-3">
                <h1 for="exampleInputPassword1" class="form-label">Choose destination (city)</h1>
                <div>
                  <select className="form">
                    <option value="1">花蓮</option>
                    <option value="1">臺北</option>
                    <option value="1">臺中</option>
                    <option value="1">臺東</option>
                    <option value="1">臺南</option>
                    <option value="1">高雄</option>
                  </select>
                </div>

              </div>

              <h1 for="start">Start date:</h1>
              <input type="date" id="start" name="trip-start" value="2022-11-14">
              
              </input>

              <h1 for="start">End date:</h1>
              <input type="date" id="end" name="trip-end" value="2022-11-14">
              </input>
              <div>
                <h1 for="tentacles">Number of guests :</h1>
                <input type="number" id="tentacles" name="tentacles" min="1" max="100">
                </input>
                {/* q */}

              </div>
              <h1 for="tentacles">Are you ready?</h1>
              <div>

              </div>

              <div>
                <div class="mb-3">
                  {/* <button class="btn btn-primary" href="#home" type="submit" onclick="myFunction()">Team up</button>    */}
                  <a href="#Send" class="btn btn-primary" type="submit" >Team up</a>
                </div>
              </div>

            </div>
          </div>
        </center>

      </div>

      {/* ----------------------------------------------- */}

      <div class="fixed-top text-center w-100">   </div>
      {/* ------------------------------------------------- */}
      <div class="full-page" id="Send">

        {/* - */}


        <div class="vh-100 d-flex justify-content-center align-items-center ">
          <div class="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
            <h2 class="text-center mb-4 text-primary">Guest Invitation (Sending URL)</h2>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Guest Email address</label>
                <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              </div>

              <div class="d-grid">
                <button class="btn btn-primary" type="submit">Send</button>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Guest Email address</label>
                <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              </div>

              <div class="d-grid">
                <button class="btn btn-primary" type="submit">Send</button>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Guest Email address</label>
                <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              </div>

              <div class="d-grid">
                <button class="btn btn-primary" type="submit">Send</button>
              </div>

            </form>

            <div class="d-grid">

        <a class="btn " type="submit" href="#wait">
                <div>
                      <AiOutlineDown className='icon' href="#wait" >        </AiOutlineDown>
                      </div>
                      <div>
                      <AiOutlineDown className='icon' href="#wait" >        </AiOutlineDown>
                      </div>
                      <div>
                      <AiOutlineDown className='icon' href="#wait" >        </AiOutlineDown>
                        </div>
                      </a>
                      </div>    
            
                        
          </div>
        </div>

      </div>
      {/* --------------------------------- */}


    <div class="full-page" id="wait">

      <div class="vh-100 d-flex justify-content-center align-items-center ">
          <div class="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
            <h2 class="text-center mb-4 text-primary">Team request (Waiting...)</h2>
            <form>

            <div class="d-grid" >
            <h2 >Guest 1 (Joined the Team ... )</h2>
            <h2>
            <progress class="mb-3" value="100" max="100">Joined the Team</progress>  
            </h2>
            </div>

            <div class="d-grid">
            <h2 >Guest 2 (Filling application ...)</h2>
            <h2>
            <progress class="mb-3" value="50" max="100">Joined the Team</progress>  
            </h2>
            </div>

            <div class="d-grid">
            <h2 >Guest 3 (Invited ... )</h2>
            <h2>
            <progress class="mb-3" value="20" max="100">Joined the Team</progress>  
            </h2>
            </div>

            <div class="d-grid">
                
                <a href="#Good" class="btn btn-primary" type="submit" >Go</a>
              </div>

            </form>
            </div>
        </div>


      <a href="#Good" class="btn btn-info">Good</a>
      </div>

{/* --------------------------------- */}
      <div class="full-page" id="Good">
        Good
      </div>



      {/* ------------------------------------------------------------------------------------------------------ */}

      


    </main>
  );
}