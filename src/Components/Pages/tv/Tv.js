import { useState } from "react";
import css from "./Tv.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import ShowList from "./ShowList";

let timeId;

export default function Tv() {
  const [shows, setShows] = useState([]);

  async function searchTv({ target }) {
    const res = await fetch(
      "http://api.tvmaze.com/search/shows?q=" + target.value
    );
    const json = await res.json();
    console.log(target.value);
    setShows(json);
  }

  function debounceSearch(e) {
    const value = e.target.value;
    if (timeId) clearTimeout(timeId);
    if (value.length) {
      timeId = setTimeout(() => searchTv(e), 100);
    } else {
      setShows([]);
    }
  }

  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1>Busca tus series</h1>
      </header>
      <div className={css.group}>
        <input
          type="text"
          placeholder="Your movie..."
          className={css.input}
          onChange={debounceSearch}
        />
        <BiSearchAlt2 className={css.icon} />
      </div>
      <ShowList shows={shows} />
    </div>
  );
}
