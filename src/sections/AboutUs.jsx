import "./about-us.css"

export const AboutUs = () => {
    const aboutArray = [
        "/about/About1.png",
        "/about/About2.png",
        "/about/About3.png",
        "/about/About4.png",
        "/about/About5.png",
        "/about/About6.png",
        "/about/About7.png",
        "/about/About8.png",
        "/about/About9.png",
        "/about/About10.png",
        "/about/About11.png",
    ]

    return(
        <div className="grid-parent">
            <div className="about-us section">
                <h1 className="about-us-header">About <span className="about-us-header italic-red"> Us</span>
                </h1>

                <div className="about-scroll">
                    {aboutArray.map((item, index) => 
                        <img 
                            className="about-pic" 
                            key={index} 
                            src={item} 
                        />)}
                </div>

                <p className="quotation">
                    &quot; It&apos;s amazing to think that a fitness center can be so much more than just exercise. &quot;
                </p>
            </div>
        </div>
    )
}