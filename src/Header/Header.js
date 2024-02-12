import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={classes["textContainer"]}>
        <h1>My Library Online</h1>
        <h2>Create Your Own Bookshelf</h2>
        <button>
          <span>Start</span>
          <svg
            viewBox="-5 -5 110 110"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
