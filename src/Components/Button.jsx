import { useNavigate} from "react-router-dom"





/* eslint-disable react/prop-types */



export const Button = ({label, size }) => {
    const nav = useNavigate()
 
  return (
   
    <div>
        
        <button onClick={()=>{nav("/contact")}} className={`join-btn ${size}`}>{label}</button>

        
    </div>
    

  )
}

