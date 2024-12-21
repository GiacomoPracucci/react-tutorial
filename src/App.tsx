import ListGroup from "./components/ListGroup";

function App() {
   let items = [
      'New York',
      'Tokyo',
      'London',
      'Rome',
      'Savgnin'
   ]
   return (   
   <div>
      <ListGroup items={items} heading="Cities"/>
   </div>
   );

}

export default App;