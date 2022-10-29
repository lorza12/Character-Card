import "./styles.css";

const CharacterCard = (props) => (
  <article className="characterCard">
    <div className="characterImagen">
      <img src={props.image} alt={props.name} />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{props.name}</h2>
        <span className="status">
          <span
            className={`status__icon status__${props.status.toLowerCase()}`}
          ></span>
          {props.status} - {props.species}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location:</span>
        <a href={props.locationUrl}>{props.locationName}</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={props.originUrl}>{props.originName}</a>
      </div>
    </div>
  </article>
);

export default CharacterCard;
