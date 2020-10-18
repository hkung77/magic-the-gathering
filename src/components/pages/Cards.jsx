import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { getCards } from "../../utils/cards";
import { ApplicationContext } from "../contexts/AppContext";

const Cards = () => {
  // const [page, setPage] = useState(1);
  // const [ cards, setCards] = useState([]);

  const { setAuthenticated } = useContext(ApplicationContext);

  const { isLoading, data, isError, error } = useQuery("cards", getCards);

  if (isError) {
    toast.error(error.error);
    switch(error.status) {
      case 401: 
        setAuthenticated(false);
        break;
      default:
        break;
    }
  }

  return isLoading && !data ? (
      <div className="flex flex-1 bg-gray-500 justify-center items-center">
      <FontAwesomeIcon spin icon={faSpinner} size="6x" />
    </div>
  ) : (
    <div className="flex flex-1 bg-gray-500 pt-5">
      <ul className="flex flex-row flex-wrap justify-evenly">
        {data.map(
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

export default Cards;
