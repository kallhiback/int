import React, { useState } from "react";
import './App.css';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [cards, setCards] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if(inputValue !== ''){
      const newCard = {
        content: inputValue,
      };
      setCards([...cards, newCard]);
      setInputValue('');
    } else {
      alert('plohoi malchick')
    }
  };

  function handleBlackChange()  {
    const body = document.querySelector('body')
    if(body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'white'
    } else {
      body.style.backgroundColor = 'black'
    }
  }

  return (
    <div className="zam">
      <div className="inputs">
        <div className="input">
          <input
            placeholder="Добавить заметку.."
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            onClick={handleButtonClick}
            style={{
              width: "50px",
              height: "29px",
              border: "2px solid rgb(0, 184, 190)",
              borderLeft: "0px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              backgroundColor: "white",
              cursor: "pointer"
            }}
          >
            Add
          </button>
          <button className="whack" onClick={handleBlackChange}></button>
        </div>  
      </div>
        <div className="cards">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
