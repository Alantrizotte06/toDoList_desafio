import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Header as ListHeader } from "./components/list/Header";
import { Item } from "./components/list/Item";
import { Empty } from "./components/list/Empty";

import styles from "./App.module.css";
import "./global.css";

export interface ITask {
  id: number;
  text: string;
  isCheck: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Verificando o status de cada uma das tarefas utilizando o metodo reduce.
  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isCheck) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0); // <- aqui definimos o valor de 0 para a verificação.

  // função acionada quando usuário clicar para criar uma nova tarefa.
  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    // criação de um objeto de nova tarefa a ser adicionada a lista.
    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isCheck: false, // <- false indica que a tarefa não esta concluida.
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  // função acionada quando usuário clicar para remover tarefa selecionada.
  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Deseja mesmo apagar essa tarefa ?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCheck: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}
