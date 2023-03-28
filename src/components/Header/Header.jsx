import "./Header.css"
import Buotton from "../Buotton";
function Header(){
    return (
        <>
          <header>
        <div className="header">
            <h1>Basic landing page for big dream</h1>
            <p>Minimal,responsive and accessibile</p>
            <Buotton/>
        </div>
    </header>
        </>
    ) 
    
}
export default Header;