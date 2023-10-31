import "./pakages.css"

export const Pakages = () => {
  return (
    <section className="pakages-section">
        <div className="pakages-wrapper">

            <div className="pakage-img-container">
                <p>BECOME A JEDI</p>
            <img className="become-jedi"  src="/Images/pakage-become-jedi.png" alt="" />
            
            </div>          

            <div className="pakage-img-container">
                <p>JOIN THE DARK SIDE</p>   
            <img className="join-darkside" src="/Images/pakage-darkside.png" alt="" />
            
            </div>  

            <div className="pakage-img-container">
                <p>THE WAY OF MANDALORE</p>
            <img className="way-mandalore" src="/Images/pakage-mandelore.png" alt="" />
            
            </div>
        </div>
    </section>
  )
}
