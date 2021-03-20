import React, { useEffect, useState } from "react";
import css from "./gps.module.css";

export default function Gps() {
  const [coords, setCoords] = useState({});
  useEffect(() => {
    const geo = navigator.geolocation;

    geo.getCurrentPosition((position) => {
      const { latitude, altitude, accuracy } = position.coords;
      setCoords({ latitude, altitude, accuracy });
      console.log(position.coords);
    });
  }, []);

  return (
    <div>
      <h2>Coordenadas</h2>
      <pre className={css.json}>{JSON.stringify(coords, null, 4)}</pre>
    </div>
  );
}
