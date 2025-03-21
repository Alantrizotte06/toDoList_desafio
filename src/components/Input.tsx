import styles from "./Input.module.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Input({ ...rest }: Props) {
  return (
    <input
      className={styles.container}
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  );
}
