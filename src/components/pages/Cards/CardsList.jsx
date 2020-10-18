import React, { useEffect } from "react";
import PropTypes from "prop-types";

const propTypes = {
  cards: PropTypes.array,
  nextPage: PropTypes.object,
};

const CardsList = ({ cards, nextPage}) => {
  // Paginate when user scrolls to the end
  const handleScroll = (e) => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      console.log("bottom");
      nextPage();
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-3 bg-gray-500 pt-5">
      <ul className="flex flex-row flex-wrap justify-evenly">
        {cards.map(
          (card) =>
            !!card.imageUrl && (
              <li key={card.id} className="my-5">
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
