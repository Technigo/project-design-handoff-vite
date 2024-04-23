
export const FooterCard = () => {
  return (
    <>
    <ul>
    {linkSet.items.map((item)=> {
        return(
        <li key={item}></li>
        )

    })}
    </ul>

    </>
  )
}
