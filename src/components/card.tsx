interface CardProps {
  text?: string | null;
}

function CardComponent({ text }: CardProps) {
  return (
    <>
      <div className="card">
        <p>{text ? text : "This is a card"}</p>
      </div>
    </>
  );
}

export default CardComponent;
