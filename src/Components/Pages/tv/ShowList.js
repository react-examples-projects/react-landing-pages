import React from "react";
import css from "./Tv.module.css";

export default function ShowList({ shows }) {
  return (
    <ul className={css.showList}>
      {shows.map((show) => {
        return <li>{show.show.name}</li>;
      })}
    </ul>
  );
}
