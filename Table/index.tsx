import { FC } from "react";
import { IProps } from "./types";
import { tableOneDisplayConstants } from "../utils/constants";
import styles from "../styles/Home.module.css";
import Column from "./Column";

const Table: FC<IProps> = ({ data, columns }: IProps) => {
  const firstColumn = columns[0];

  const tableOneKeys = Object.keys(tableOneDisplayConstants);
  const isTableOne = tableOneKeys.every((k) => columns.some((c) => c === k));

  let newColumns = [...columns];
  newColumns.shift();

  return (
    <div className={styles.rootContainer}>
      <Column isTableOne={isTableOne} column={firstColumn} data={data} />
      <div className={styles.scrollableContainer}>
        {newColumns.map((col) => (
          <Column
            key={Math.random()}
            isTableOne={isTableOne}
            column={col}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
