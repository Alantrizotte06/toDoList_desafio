import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.content}>
      <img src="/src/assets/clipboard.png" />
      <p>
        <strong>Vocês ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
