import "./UserCard.css";

function UserCard({ name, phoneNumber, age, address }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{phoneNumber}</p>
      <p>{age}</p>
      <p>{address}</p>
    </div>
  );
}

export default UserCard;
