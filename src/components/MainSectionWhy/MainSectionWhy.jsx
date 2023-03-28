import "./MainSectionWhy.css"

function MainSectionWhy() {
    return (
      <>
         <section className="why_use">
            <h2>Why use our MyPage? </h2>
            <div className="flex_col">
               
                <div className="flex_row">
                    
                    <div className="sinistra">
                        <div>
                            <span><img src="/pejman-honarpajuh/modulo-1/img/Vector.png" alt=""/></span>
                            <h3>Minimal But complete</h3>
                        </div>
                        <p>It is minimal but complete
                            It contains all the sections and components
                            a landing page needs with a minimal and essential design.
                            We go straight to people's hearts.
                        </p>
                    </div>
                    <div className="sinistra">
                        <div>
                            <span><img src="/pejman-honarpajuh/modulo-1/img/Vector_2.png" alt=""/></span>
                            <h3>Responsive design</h3>
                        </div>
                        <p>Optimized to be responsive,
                            ensuring that the landing pages created with it will
                            look great on any device, including desktop, tablet,
                            and mobile.
                        </p>
                      
                    </div>
                </div>
                <div className="flex_row">
                    <div className="destra">
                        <div>
                            <span><img src="/pejman-honarpajuh/modulo-1/img/Vector_1.png" alt=""/></span>
                            <h3>Accessible and iclusive</h3>
                        </div>
                        <p>
                            All the code and design has been overhauled,
                            if you just change the contents and the order of
                            the sections everything will remain accessible.
                        </p>
                    </div>
                    <div className="destra">
                        <div>
                            <span><img src="/pejman-honarpajuh/modulo-1/img/Vector_3.png" alt=""/></span>
                            <h3>Open-source</h3>
                        </div>
                        <p>The product allows users to create different versions
                            of their landing pages, and easily test which version
                            performs better by using A/B testing.
                        </p>
                    </div>
                </div>
            </div>
        </section>
     
      </>
    );
  }
  
  export default MainSectionWhy;