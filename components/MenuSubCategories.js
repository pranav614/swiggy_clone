import React from "react";
import SubDataArray from "./SubDataArray";

const MenuSubCategories = (props) => {
  const data = props;
  const clicked = () => {
    props.setShowContainer();
  };

  const insideData = data.categories.card?.card?.itemCards;
  if (!insideData) {
    return (
      <div>
        <p>Please check the url</p>
      </div>
    );
  }

  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accodian-header" onClick={clicked}>
            <button className=" titleAccodian" type="button">
              {data?.categories?.card?.card?.title} (
              {data?.categories?.card?.card?.title.length})
            </button>
            <p>
              {props.showItem ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
              )}
            </p>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            {props.showItem && (
              <div className="accordion-body">
                {insideData.map((res) => (
                  <SubDataArray key={res.card.info.id} arrayRes={res} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuSubCategories;
