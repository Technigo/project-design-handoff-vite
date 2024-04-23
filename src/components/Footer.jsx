
import { FooterCard } from "./FooterCard"; 

export const Footer = () => {
const getLinks = () => {
    return links.links.map((item) => (
        <FooterCard key={item} />
    ))
}
  return (
    <>
    <div>{getLinks()}</div>
    </>
  )
}
