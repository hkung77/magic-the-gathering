import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from "react-query";
import { getCards } from "../../utils/cards";

const Cards = () => {
  const [page, setPage] = useState(1);
  // const [ cards, setCards] = useState([]);

  const { isLoading, data } = useQuery("cards", getCards);

  return isLoading && !data ? (
    <div className="flex flex-1 h-screen bg-gray-500 justify-center items-center">
      <FontAwesomeIcon spin icon={faSpinner} size="6x" />
    </div>
  ) : (
    <div className="flex flex-1 bg-gray-500">
      <ul className="flex flex-row flex-wrap justify-evenly">
        {data.map(
          (card) =>
            !!card.imageUrl && (
              <li key={card.id}>
                <img src={card.imageUrl} alt={card.name} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Cards;
