import "./Footer.css"

function Footer(){
    return (
        <>
        <footer>
            <div className="footer-conteiner">
                <span className="my-page"><a href="">My page</a></span>
                <div>
                    <div className="contact">
                        <h5>Contact</h5>
                        <ul>
                            <li>Via Roma, 1 - Roma (RM)</li>
                            <li> Cel. 123456789 </li>
                        </ul>
                    </div>
                    <div className="list">
                        <h5><a href="##">My Page</a></h5>
                        <ul>
                            <li><a href="##">Explore</a></li>
                            <li><a href="##">why</a></li>
                            <li><a href="##">How</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr/>
            <div className="social">
                <span>© 2023 Bricks Design Kit. All rights reserved</span>
                <div>
                  <a href="##">  <i className="fa-brands fa-facebook-f"></i></a>
                  <a href="##">  <i className="fa-brands fa-tiktok"></i></a>
                  <a href="##">  <i className="fa-brands fa-instagram"></i></a>
                  <a href="##">  <i className="fa-brands fa-linkedin"></i></a>
                  <a href="##">  <i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            
        </footer>
      
        </>
    ) 
    
}
export default Footer;