import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, idPath, path }) => {
  const { pathname } = useLocation();

  const isHome = pathname == "/";

  const finalItens = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares:</h2>

        {isHome ? (
          <Link to={`/${path}`} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((CurrentValue, index) => index < finalItens)
          .map((currObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currObj}
              key={`${index}-${title}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
