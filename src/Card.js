import "./Card.css";
export default function Card(props){
return(
  <div className="container">
    <div className="image_container"><img src={props.image}/></div>
    <div className="words">
    <span><i class="fas fa-map-marker-alt"></i>{props.country}<a href={props.maps}>view on Google Maps</a>
    </span>
    <h1>{props.place}</h1>
    <span className="date">{props.date}</span>
    <p>{props.description}</p>
    </div>
  </div>
)
}