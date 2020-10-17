import React, { useState, useEffect } from "react";
import { getCards } from "../../utils/cards";

const Cards = () => {
  const [loading, setLoading] = useState(false);
  // const [ cards, setCards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getCards();
      console.log(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return loading ? (
    <p>loading</p>
  ) : (
    <div className="flex flex-1 bg-gray-500 h-screen"></div>
  );
};

export default Cards;
