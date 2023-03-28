import "./Navbar.css"

function Navbar(){
    return (
        <>
        <nav>
        <a href="##"> My page</a>
        <div className="menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7H21" stroke="#1D1B1F" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 12H21" stroke="#1D1B1F" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 17H21" stroke="#1D1B1F" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                
        </div>
        <div>
            <a href="##">How</a>
            <a href="##">Why</a>
            <a href="##">Home</a>
        </div>
    </nav>
        </>
    ) 
    
}
export default Navbar;