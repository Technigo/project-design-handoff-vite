

export const TrainerCard = ({ trainer }) => {
  return (
    <>
      <img src={trainer.image} alt={trainer.name} />
      <p>{trainer.name}</p>
    </>
  )
}
