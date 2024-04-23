export const FooterCard = ({items}) => {
  return (
    <>
    <ul>
    {items.map((item, index)=> {
        return(
        <li key={index}> {item} </li>
        );
    })}
    </ul>
    </>
  )
}
