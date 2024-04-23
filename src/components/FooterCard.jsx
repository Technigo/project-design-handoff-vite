import links from "../json/links.json";

export const FooterCard = () => {
  return (
    <>
    <ul>
    {links.map((item)=> {
        return(
        <li key={item}> {links.items} </li>
        );
    })}
    </ul>
    </>
  )
}
