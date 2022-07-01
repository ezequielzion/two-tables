import { FC } from "react";
const { flag } = require("country-emoji");
import styles from "../../styles/Home.module.css";
import { ITableOneObj, ITableTwoObj } from "../../utils/types";
import {
  ITEM,
  COUNTRY,
  MOVIE_RATING,
  tableOneDisplayConstants,
  tableTwoDisplayConstants,
  INVENTORY,
} from "../../utils/constants";
import { IProps } from "./types";

const Column: FC<IProps> = ({ isTableOne, column, data }: IProps) => {
  const columnStyles = `
    ${styles.column}
    ${column === INVENTORY ? styles.inventoryColumn : ""}
  `;

  const rowStyles = `
    ${styles.row}
    ${column === ITEM ? styles.itemRow : ""}
  `;

  return (
    <div className={columnStyles}>
      <div className={`${styles.header} ${styles.row}`}>
        {isTableOne
          ? tableOneDisplayConstants[column as keyof ITableOneObj]
          : tableTwoDisplayConstants[column as keyof ITableTwoObj]}
      </div>
      {data.map((d) => (
        <div key={Math.random()} className={rowStyles}>
          {column === COUNTRY
            ? flag(d[column as keyof (ITableOneObj | ITableTwoObj)])
            : column === MOVIE_RATING
            ? "⭐".repeat(+d[column as keyof (ITableOneObj | ITableTwoObj)])
            : d[column as keyof (ITableOneObj | ITableTwoObj)]}
        </div>
      ))}
    </div>
  );
};

export default Column;
