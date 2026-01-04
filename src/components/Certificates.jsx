import '../styles/Certificates.css';
import GameDev from '../Assets/GameDevMSU.JPG';
import AI from '../Assets/AIForEveryone.JPG';
import Cpp from '../Assets/CISCO-CPP.JPG';
import Ccna from '../Assets/CISCO-Networking.JPG';
import Py from '../Assets/freecodecamp.png';
import MetaReact from '../Assets/metaReact.JPG';


function Certificates() {


  return (
    <>
        <div className="cert">
          <div className="blocks">
            <div className="img"><img src={GameDev} alt="GameDev Certificate" /></div>
            <div className="c-name"><h4>Game Design and Development Specialization by MSU, USA</h4></div>
          </div>
          <div className="blocks">
            <div className="img"><img src={Py} alt="Python Certificate" /></div>
            <div className="c-name"><h4>Scientific Computing with Python by FreeCodeCamp</h4></div>
          </div>
          <div className="blocks">
            <div className="img"><img src={Cpp} alt="CPP Certificate" /></div>
            <div className="c-name"><h4>Programming Essentials in C++ by CISCO</h4></div>
          </div>
          <div className="blocks">
            <div className="img"><img src={Ccna} alt="Networking Certificate" /></div>
            <div className="c-name"><h4>Introduction to Networks CCNA by CISCO</h4></div>
          </div>
          <div className="blocks">
            <div className="img"><img src={AI} alt="AI Certificate" /></div>
            <div className="c-name"><h4>Introduction to AI by Google</h4></div>
          </div>
          <div className="blocks">
            <div className="img"><img src={MetaReact} alt="React Certificate" /></div>
            <div className="c-name"><h4>Advance React Specialization from Meta</h4></div>
          </div>
        </div>
    </>
  )
}



export default Certificates;