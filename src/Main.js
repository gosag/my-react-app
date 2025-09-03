import "./Main.css";
import data from "./data"
import Card from "./Card"
import Header from "./Header"
export default function Main(){
  const cards=data.map(items=>{
    return(
      <Card
      image={items.image}
      country={items.country}
      place={items.place}
      date={items.date}
      description={items.description}
      maps={items.maps}
      />
    )
  })
return (
<div>
  <Header/> 
  {cards}
  
</div>
)
}