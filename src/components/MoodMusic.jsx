//Mounted in the pages LandingP and AboutP

import "./moodmusic.css"

//Export of a embedded player within an ifram from Spotify
export const MoodMusic = () => {
    return (
        <div className="mood-music">
            <h3>GET IN THE MOOD</h3>
            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/3ZSf1TJZyRb0rnWYuUtdX4?utm_source=generator&theme=0"
                width="80%"
                padding-top="5%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe></div >
    )
}
