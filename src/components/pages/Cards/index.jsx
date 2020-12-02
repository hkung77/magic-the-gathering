import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { usePaginatedQuery } from "react-query";
import { getCards } from "../../../utils/cards";
import { ApplicationContext } from "../../contexts/AppContext";

import Filter from "./Filter";
import CardsList from "./CardsList";

const Cards = () => {
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState({});

  const { setAuthenticated } = useContext(ApplicationContext);

  const {
    isLoading,
    latestData,
    isError,
    error,
    isFetching,
  } = usePaginatedQuery(["cards", page, filter], getCards);

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
    if (latestData && !isFetching) {
      // Add paginated cards
      setCards([...cards, ...latestData]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latestData]);

  useEffect(() => {
    setCards([]);
  }, [filter]);

  const nextPage = () => {
    // Pass fresh state in event listeners to avoid stale data in event
    // (https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener)
    setPage((page) => page + 1);
  };

  if (isError) {
    return <div />;
  }

  return (
    <div className="pt-24 bg-gray-500 flex-1">
      <Filter setFilter={setFilter} />
      {(isLoading && !latestData) || (isFetching && cards.length === 0) ? (
        <div className="flex flex-1 bg-gray-500 justify-center items-center pt-48">
          <FontAwesomeIcon spin icon={faSpinner} size="6x" />
        </div>
      ) : (
        <CardsList isFetching={isFetching} nextPage={nextPage} cards={cards} />
      )}
    </div>
  );
};

export default Cards;
