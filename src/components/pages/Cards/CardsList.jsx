import React, { useEffect } from "react";
import PropTypes from "prop-types";

const propTypes = {
  cards: PropTypes.array,
  nextPage: PropTypes.func,
  isFetching: PropTypes.bool,
};

const CardsList = ({ cards, nextPage, isFetching }) => {
  // Paginate when user scrolls to the end
  const handleScroll = (e) => {
    if (((window.innerHeight + window.scrollY) >= document.body.scrollHeight) && !isFetching) {
      nextPage();
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // isFetching is used to update event listener 
    // to prevent pagination while one is in flight
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  return (
    <div className="flex flex-1">
      <ul className="bg-gray-500 pt-24 flex flex-row flex-wrap justify-evenly">
        {cards.map(
          (card) =>
          // Skip cards without images and basic lands
            !!card.imageUrl && card.supertypes[0] !== "Basic" &&(
              <li key={card.id} className="bg-gray-500 my-5 mx-10">
                <img src={card.imageUrl} alt={card.name} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

CardsList.propTypes = propTypes;
export default CardsList;
