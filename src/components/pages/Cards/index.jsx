import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useInfiniteQuery } from "react-query";
import { getCards } from "../../../utils/cards";
import { ApplicationContext } from "../../contexts/AppContext";

import Filter from "./Filter";
import CardsList from "./CardsList";

const Cards = React.memo(() => {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState({});

  const { setAuthenticated } = useContext(ApplicationContext);

  const {
    data,
    isError,
    error,
    isFetching,
    isFetchingMore,
    fetchMore,
  } = useInfiniteQuery(["cards", filter], getCards);

  useEffect(() => {
    if (isError) {
      toast.error(error.error);
      switch (error.status) {
        case 401:
          localStorage.clear();
          setAuthenticated(false);
          break;
        default:
          break;
      }
    }
  }, [isError, error, setAuthenticated]);

  useEffect(() => {
    setCards([]);
  }, [filter]);

  useEffect(() => {

    // Sets the cards from inital cache regardless of fetching
    if (data && data.flat().length !== cards.length) {
      setCards(data.flat());
    }
    // Set cards queried after the first and every subsequent request
    else if (data && !isFetching && !isFetchingMore && cards.length !== data.flat().length) {
      // Add paginated cards
      setCards(data.flat());
    }     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const nextPage = () => {
    fetchMore(data.length + 1)
  };

  if (isError) {
    return <div />;
  }

  return (
    <div className="pt-24 bg-gray-500 flex-1">
      <Filter setFilter={setFilter} />
      {(isFetching && !data) ? (
        <div className="flex flex-1 bg-gray-500 justify-center items-center pt-48">
          <FontAwesomeIcon spin icon={faSpinner} size="6x" />
        </div>
      ) : (
        <CardsList isFetchingMore={isFetchingMore} nextPage={nextPage} cards={cards} />
      )}
    </div>
  );
});

export default Cards;
