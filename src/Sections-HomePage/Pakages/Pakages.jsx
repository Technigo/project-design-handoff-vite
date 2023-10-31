import "./pakages.css"

export const Pakages = () => {
  return (
    <section className="pakages-section">
        <div className="pakages-wrapper">

            <div className="pakage-img-container">
                <p>BECOME A JEDI</p>
            <img className="become-jedi"  src="./src/assets/Images/pakage-become-jedi.png" alt="" />
            
            </div>          

            <div className="pakage-img-container">
                <p>JOIN THE DARK SIDE</p>   
            <img className="join-darkside" src="src/assets/Images/pakage-way-darkside.png" alt="" />
            
            </div>  

            <div className="pakage-img-container">
                <p>THE WAY OF MANDALORE</p>
            <img className="way-mandalore" src="src/assets/Images/pakage-mandelore.png" alt="" />
            
            </div>
        </div>
    </section>
  )
}
