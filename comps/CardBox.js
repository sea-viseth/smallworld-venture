function CardBox({ title, des, src }) {
  return (
    <div className="card-box-info">
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>{des}</p>
    </div>
  );
}

export default CardBox;
