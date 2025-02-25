import styles from "./Header.module.css";

import todoLogo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={todoLogo} alt="logo da aplicação" />
    </header>
  );
}
