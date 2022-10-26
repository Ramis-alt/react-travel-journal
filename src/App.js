
// import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Mydata from './data';

export default function App() {
  const cardData = Mydata.map(cards => {
    return <Card 
      key={cards.id}
      item={cards}
    />
  })
  return (
    <div className="App">
      <Navbar />
      {cardData}
    </div>
  );
}


