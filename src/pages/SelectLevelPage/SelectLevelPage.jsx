import { useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import useLevel from "../../hooks/useLevel";

export function SelectLevelPage() {
  const { changeLevelMode } = useLevel();

  //"hard"?
  const { level, setLevel } = useState("hard");
  const navigate = useNavigate();

  // неправильно
  function changeLevel() {
    setLevel();
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <label className={styles.levelLink}>
              <input
                className={styles.levelLink}
                type="radio"
                value="3"
                checked={level === 3}
                onChange={event => changeLevel(event.target.value)}
              />
              1
            </label>
          </li>
          <li className={styles.level}>
            <label className={styles.levelLink}>
              <input
                className={styles.levelLink}
                type="radio"
                value="6"
                checked={level === 6}
                onChange={event => changeLevel(event.target.value)}
              />
              2
            </label>
          </li>
          <li className={styles.level}>
            <label className={styles.levelLink}>
              <input
                className={styles.levelLink}
                type="radio"
                value="9"
                checked={level === 9}
                onChange={event => changeLevel(event.target.value)}
              />
              3
            </label>
          </li>
        </ul>
        <div>
          <Checkbox onClick={changeLevelMode}>Игра на 3 попытки</Checkbox>
          <input type="checkbox" className={styles.checkbox} id="checkbox" />
        </div>
        <div>
          <button
            onClick={() => {
              navigate(`/game/${level}`);
              // navigate(`/game/3`);
            }}
          >
            Старт
          </button>
        </div>
      </div>
    </div>
  );
}
