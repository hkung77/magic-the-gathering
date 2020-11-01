import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { usePaginatedQuery } from "react-query";
import { getCards } from "../../../utils/cards";
import { ApplicationContext } from "../../contexts/AppContext";

import Filter from './Filter';
// import CardsList from "./CardsList";

const Cards = () => {
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState({}) 

  const { setAuthenticated } = useContext(ApplicationContext);

/*
  const {
    isLoading,
    latestData,
    isError,
    error,
    isFetching,
  } = usePaginatedQuery(["cards", page], getCards);

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

  const nextPage = () => {
    // Pass fresh state in event listeners to avoid stale data in event
    // (https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener)
    setPage((page) => page + 1);
  };

  if (isError) {
    return <div />;
  }
*/
const handleSearch = () => {};

  // return isLoading && !latestData ? (
  //   <div className="flex flex-1 bg-gray-500 justify-center items-center">
  //     <FontAwesomeIcon spin icon={faSpinner} size="6x" />
  //   </div>
  // ) : (
 return (
  <>
  <Filter handleSearch={handleSearch}/>
    {/* <CardsList isFetching={isFetching} nextPage={nextPage} cards={cards} /> */}
    </>
  );
};

export default Cards;
