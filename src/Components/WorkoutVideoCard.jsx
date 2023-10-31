

export const WorkoutVideoCard = ({ video }) => {
  return (
    <>
      <img src={video.image} alt={video.title} />
      <p>{video.title}</p>
    </>
  )
}
