import classes from "./MainContainer.module.css";

import BookData from "../BookData/BookData";

import { FaMagnifyingGlass } from "react-icons/fa6";

function MainContainer() {
  return (
    <div className={classes["mainContainer"]}>
      <h3>
        "A reader lives a thousand lives before he dies." -
        <span> George R.R. Martin</span>
      </h3>
      <div className={classes["container"]}>
        <form className={classes["searchBar"]}>
          <input name="userSearch" placeholder="Search Your Book" />
          <FaMagnifyingGlass className={classes["icon"]} />
        </form>
        <BookData />
      </div>
    </div>
  );
}

export default MainContainer;
