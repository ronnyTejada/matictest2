import React, { useState } from "react";

const Exercise2 = () => {
  const [text, setText] = useState("");

  let wordCounts = {};
  const countWord = () => {
    let arr = text.split(" ");
    let word = [];
    arr.forEach((letra) => {
      if (letra !== " ") {
        word.push(letra);
      } else {
        console.log(word, "daw");
      }
    });

    word.forEach((item) => {
      let filter = item.replace(/[^\w\s]/gi, '')

      wordCounts[filter] = (wordCounts[filter] || 0) + 1;
      
    });

    renderResult();
  };

  const renderResult = () => {
  
    for (let word in wordCounts) {
      const text = `${word} = ${wordCounts[word]}<br>`;
      document.getElementById("resultado").innerHTML += text;
    }
    wordCounts={}
  };

  return (
    <div>
      <input
        type="text"
        onChange={(val) => setText(val.target.value.toLocaleLowerCase())}
      />
      <br />
      <button onClick={countWord}>Calcular</button>

      <h4 id="resultado"></h4>
    </div>
  );
};

export default Exercise2;
