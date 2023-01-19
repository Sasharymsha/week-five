import { useState } from "react";
import { data } from "./data";
import { info } from "./info";
import './App.css';

function App() {
    const [painting, setPainting] = useState(data) ;
    const [person, setPerson] = useState(0);
    const {id, personName, description, image} = info[person];
    const [showText , setShowText] = useState(false);
      
  const buyPainting = (id) => {
    let newPaint = painting.filter(painting => painting.id !== id)
    setPainting(newPaint)
    }
    const showTextClick = (element) => {
      element.showMore = !element.showMore
      setShowText(!showText)
    }
    const previousPerson = () => {
      setPerson ((person => {
        person --;
        if (person <0){
          return info.length -1;
        }
        return person;
      }))
    }
    const nextPerson = () => {
      setPerson ((person => {
        person ++;
        if (person > info.length - 1) {
          person = 0;
        }
        return person;
      }))
    }
return(
  <div>
    <div className="container">
      <h1>Abstract painting gallery</h1>
    </div>
    <div className="container">
      <h2> You can buy {painting.length} paintings</h2>
    </div>
    {painting.map((element => {
    const {id,artistName,description,price,image,showMore} = element;

return(<div key={id}>
    <div className="container">
      <h2>{id}-{artistName}</h2>
    </div>
      <div className="container">
        <img src ={image} alt="painting" width="700px"/>
      </div>
      <div className="container">
              <p>{showMore ? description : description.substring(0,100) + "..."}
              <button onClick = {() => showTextClick(element)(!showMore)}>{showMore ? "show less" : "show more"}</button></p>
              </div>
      <div className="container">
        <h3>{price}</h3>
      </div>
      <div className="container">
        <button onClick = {() => buyPainting(id)}>BUY</button>
      </div>
        </div>)
      }))}
      <div className="container">
        <button onClick ={() => setPainting([])}>BUY ALL</button>
      </div>
      <div className="container">
    <h1>The 5 best abstract artists of all time</h1>
      </div>
      <div className="container">
        <h2>{id} - {personName}</h2>
      </div>
      <div className="container">
        <img src = {image} width = "500px" alt="person"/>
      </div>
      <div className="container">
        <p>{description}</p>
      </div>
      <div className="container">
        <button onClick = {previousPerson}>Previous</button>
        <button onClick = {nextPerson}>Next</button>
      </div>
        </div>
    
      )
    }
    
    export default App;