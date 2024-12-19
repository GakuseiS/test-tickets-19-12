import { useState, useEffect } from "react";
import { resData } from "../../state/tickets";
import { TData } from "../../state/tickets.type";

export const useFilters = () => {
  const [tickets, setTickets] = useState<TData[]>();
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);
  const [isAll, setIsAll] = useState(true);

  const onAllClick = () => {
    setIsAll(true);
    setSelectedFilters([]);
    setTickets(resData.tickets);
  };

  const onOnlyOneClick = (id: number) => {
    setSelectedFilters([id]);
    setIsAll(false);
  };

  const onFilterChoose = (id: number) => {
    const tempArray = selectedFilters;
    const index = tempArray.indexOf(id);
    if (index !== -1) {
      tempArray.splice(index, 1);
    } else {
      tempArray.push(id);
    }
    setIsAll(false);
    setSelectedFilters([...tempArray]);
  };

  const getFilteredData = (filters: number[]) => {
    const temp = resData?.tickets?.filter((ticket) =>
      filters.includes(ticket.stops)
    );
    setTickets(temp);
  };

  useEffect(() => {
    setTickets(resData.tickets.sort((a, b) => a.price - b.price));
  }, []);

  useEffect(() => {
    if (!isAll) {
      if (selectedFilters.length) {
        getFilteredData(selectedFilters);
      } else {
        setIsAll(true);
        setTickets(resData.tickets);
      }
    }
  }, [selectedFilters, isAll]);

  return {
    tickets,
    isAll,
    selectedFilters,
    onAllClick,
    onOnlyOneClick,
    onFilterChoose,
  };
};
