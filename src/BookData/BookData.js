import { useState } from "react";

import classes from "./BookData.module.css";

import example_cover from "../imgs/example_cover.jpg";

import { FaStar } from "react-icons/fa";

function BookData() {
  const [hashtags, setHashtags] = useState("");
  const [author, setAuthor] = useState("");
  const [pagesAmount, setPagesAmount] = useState("");
  const [dataAdding, setDataAdding] = useState("");
  const [startReadingData, setStartReadingData] = useState("");
  const [endReadingData, setEndReadingData] = useState("");

  function setBooksDataHandler(e) {
    const inputID = e.target.parentNode.getAttribute("data-set");
    if (inputID === "hashtags") {
      const inputElement = e.target.parentNode.querySelector("input");
      setHashtags(inputElement.value);
    }
    if (inputID === "author") {
      const inputElement = e.target.parentNode.querySelector("input");
      setAuthor(inputElement.value);
    }
    if (inputID === "pagesAmount") {
      const inputElement = e.target.parentNode.querySelector("input");
      setPagesAmount(inputElement.value);
    }
    if (inputID === "dataAdding") {
      console.log("Działa?");
      const inputElement = e.target.parentNode.querySelector("input");
      setDataAdding(inputElement.value);
    }
    if (inputID === "startReadingData") {
      const inputElement = e.target.parentNode.querySelector("input");
      setStartReadingData(inputElement.value);
    }
    if (inputID === "endReadingData") {
      const inputElement = e.target.parentNode.querySelector("input");
      setEndReadingData(inputElement.value);
    }
  }

  return (
    <div className={classes["bookDataContainer"]}>
      <div
        className={classes["bookCover"]}
        style={{ backgroundImage: `url(${example_cover})` }}
      ></div>
      <div className={classes["bookData-text"]}>
        <h3>"Atomowe Nawyki"</h3>
        <div className={classes["rating"]}>
          <FaStar className={classes["icon-star"]} />
          <FaStar className={classes["icon-star"]} />
          <FaStar className={classes["icon-star"]} />
          <FaStar className={classes["icon-star"]} />
          <FaStar className={classes["icon-star"]} />
        </div>
        <div className={classes["input-container"]} data-set="hashtags">
          <p>#Hashtags:</p>
          {hashtags && <p>{hashtags}</p>}
          {!hashtags && <input type="text"></input>}
          {!hashtags && (
            <button
              className={classes["bookData-btn"]}
              onClick={setBooksDataHandler}
            >
              Add
            </button>
          )}
        </div>
        <div className={classes["input-container"]} data-set="author">
          <p>Autor:</p>
          {author && <p>{author}</p>}
          {!author && <input type="text"></input>}
          {!author && (
            <button
              className={classes["bookData-btn"]}
              onClick={setBooksDataHandler}
            >
              Add
            </button>
          )}
        </div>
        <div className={classes["input-container"]} data-set="pagesAmount">
          <p>Liczba Stron:</p>
          {pagesAmount && <p>{pagesAmount}</p>}
          {!pagesAmount && <input type="number"></input>}
          {!pagesAmount && (
            <button
              className={classes["bookData-btn"]}
              onClick={setBooksDataHandler}
            >
              Add
            </button>
          )}
        </div>
        <div className={classes["input-container"]} data-set="dataAdding">
          <p>Data dodania:</p>
          {dataAdding && <p>{dataAdding}</p>}
          {!dataAdding && <input type="date"></input>}
          {!dataAdding && (
            <button
              className={classes["bookData-btn"]}
              onClick={setBooksDataHandler}
            >
              Add
            </button>
          )}
        </div>

        <div className={classes["input-container"]} data-set="startReadingData">
          <p>Start czytania:</p>
          {startReadingData && <p>{startReadingData}</p>}
          {!startReadingData && <input type="date"></input>}
          {!startReadingData && (
            <button
              className={classes["bookData-btn"]}
              onClick={setBooksDataHandler}
            >
              Add
            </button>
          )}
        </div>
        <div className={classes["input-container"]} data-set="endReadingData">
          <p>Koniec czytania:</p>
          {endReadingData && <p>{endReadingData}</p>}
          {!endReadingData && <input type="date"></input>}
          {!endReadingData && (
            <button
              className={classes["bookData-btn"]}
              onClick={setBooksDataHandler}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookData;
