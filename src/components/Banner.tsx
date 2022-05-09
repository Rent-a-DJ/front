import logo from "../../../../OneDrive/Documents/GitHub/project-music-front/src/assets/logo.png"
import "../styles/Banner.css"

function Banner(){
    const name ="Rent a DJ"
    return <div className="rentADj-banner">
        <img src ={logo} alt="hippocampe DJ" className="hippo-logo"/>
        <h1 className="rentADj-title">{name}</h1>
        
    </div>
}

export default Banner