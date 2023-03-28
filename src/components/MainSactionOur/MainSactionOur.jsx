import "./MainSactionOur.css"

function MainSactionOur(){
    return (
        <>
       <section className="our-customers">
            <h2>Our customers love us</h2>
            <div>
                <div className="flex-cont">
                    <img className="col-1" src="/pejman-honarpajuh/modulo-1/img/f_sinistra.svg" alt=""/>
                    <div className="aticol one">
                        <p>The perfect repo for an inclusive and captivating landing page!</p>
                        <a href="">Luigi</a>
                        <span>Designer at CatCare</span>
                    </div>
                    <div className="aticol two">
                        <p>In the company we were looking for a tool that would help us create
                            minimal landing pages and at the same time with a beautiful design
                            and MyPage is all of this.</p>
                        <a href="">Marta</a>
                        <span>Developer at VeggyFood</span>
                    </div>
                    <div className="aticol tree">
                        <p>MyPage has revolutionized our workflow, we always use it as a
                            starting point for our clientss</p>
                        <a href="">Rahul</a>
                        <span>Designer at PeaceLove</span>
                    </div>
                    <img className="col-1" src="/pejman-honarpajuh/modulo-1/img/f_destra.svg" alt=""/>
                </div>
            </div>
        </section>
       
        </>
    ) 
    
}
export default MainSactionOur;