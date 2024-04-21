import { Button } from "./Button.jsx"

export const Header = () => {
  return (
    <>
      <img
        className=''
        src='../assets/woman-dancing.jpg'
        alt='woman dancing'
      />
      <h1>The Zumba Hall</h1>
      <p>
        Join our training centre and get fit through <span>Dance</span>!
      </p>
      <Button />
    </>
  )
}
