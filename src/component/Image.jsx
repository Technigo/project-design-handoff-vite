

export const Image = ({ className, link, imgText}) => {
  return (
    <img 
      src={link}
      alt={imgText}
      className={className}
    />
  )
}

export default Image