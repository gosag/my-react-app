import Main from "./Main";
import "./App.css";
import Card from "./Card"
function App() {
  const date= new Date()
const hour=date.getHours()%12
let timeOfDay;
if(hour<12){
  timeOfDay="Morning"
}
else if(hour>=12 && hour<17){
  timeOfDay="Afteernoon"
}
else{
  timeOfDay="Night"
}
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;


