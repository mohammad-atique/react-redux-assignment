
import './App.css';

function App() {
  const operatingSystem = ["Android", "Blackberry", "iPhone", "Windows Phone"];
   const company = [{
      name: "Samsung",
      type: "square"
   },
   {
      name: "HTC",
      type: "square"
   },
   {
      name: "Micromax",
      type: "disc"
   },
   {
      name: "Apple",
      type: "circle"
   }];
  return (
    <div className="App">
      <Title title="Mobile Operating System" />
         {operatingSystem.map(e => {
            return <List name={e} />
         })}

         <Title title="Mobile Manufacturers" />
         {company.map(e => {
            return <ListType name={e.name} type={e.type} />
         })}
    </div>
  );
}
const Title = (props)=>{
  return <h1>{props.title}</h1>
}
const List = (props)=>{
  return <li className='list'>{props.name}</li>
}
const ListType = (props)=>{
  return <li className={props.type}>{props.name}</li>
}
export default App;
