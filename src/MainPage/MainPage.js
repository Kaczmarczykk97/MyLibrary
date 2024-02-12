import classes from "./MainPage.module.css";

import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";

function MainPage() {
  return (
    <div className={classes["mainPage"]}>
      <Header />
      <MainContainer />
    </div>
  );
}

export default MainPage;
