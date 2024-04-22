
export const Card = ({ cardArray: { id, title, image, paragraph, alt } }) => {

  return (
    <>
    <div>
      <div key={id}>
        <img src={`image`} alt="{alt}" />
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
    </>
  )

}
