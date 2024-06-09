import React from "react";
import n from './Nothing.module.css';

const Nothing = () => {
  return (
    <div>
      <div className={n.error404}>
        <h1>Пока ничего нет</h1>
      </div>
    </div>
  );
};

export default Nothing;
