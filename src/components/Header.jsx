import s from "./components.module.css";

const Header = () => {
 return (
  <>
   <header className={s.header}>
    <button type="button" className={s.headerButton}>
     Add product
    </button>
   </header>
  </>
 );
};

export default Header;
