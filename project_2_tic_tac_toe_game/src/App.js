import './App.css';





function Square(props){

  return <button className='square'>{props.name}</button>
}

function App() {
  return (
<div className='squareContainer'>


  <Square name="0"/>
  <Square name="1"/>
  <Square name="1"/>
  <Square name="1"/>
  <Square name="0"/>
  <Square name="0"/>
  <Square name="1"/>
  <Square name="0"/>
  <Square name="0"/>
</div>
  );
}

export default App;
