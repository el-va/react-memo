import { Link, useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";

export function SelectLevelPage() {
  const { level, setLevel } = useState(null);
  const navigate = useNavigate();

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
                onChange={event => setLevel(event.target.value)}
              />
              1
            </label>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <div>
          <label className={styles.checkbox} htmlFor="checkbox">
            Игра на 3 попытки
          </label>
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
