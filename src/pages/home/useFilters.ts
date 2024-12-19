import { useState, useEffect } from "react";
import { resData } from "../../state/tickets";
import { TTicket } from "../../state/tickets.type";

export const useFilters = () => {
  const [tickets, setTickets] = useState<TTicket[]>(resData.tickets.sort((a, b) => a.price - b.price));
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);
  const [isTotalSelected, setTotalSelected] = useState<boolean>(true);

  useEffect(() => {
    if (isTotalSelected) return;
    if (selectedFilters.length) {
      getFilteredData(selectedFilters);
    } else {
      setTotalSelected(true);
      setTickets(resData.tickets);
    }
  }, [selectedFilters, isTotalSelected]);

  const onAllClick = () => {
    setTotalSelected(true);
    setSelectedFilters([]);
    setTickets(resData.tickets);
  };

  const onOnlyOneClick = (id: number) => {
    setSelectedFilters([id]);
    setTotalSelected(false);
  };

  const onFilterChoose = (id: number) => {
    const tempArray = selectedFilters;
    const index = tempArray.indexOf(id);
    if (index !== -1) {
      tempArray.splice(index, 1);
    } else {
      tempArray.push(id);
    }
    setTotalSelected(false);
    setSelectedFilters([...tempArray]);
  };

  const getFilteredData = (filters: number[]) => {
    const temp = resData?.tickets?.filter((ticket) => filters.includes(ticket.stops));
    setTickets(temp);
  };

  return {
    tickets,
    isAll: isTotalSelected,
    selectedFilters,
    onAllClick,
    onOnlyOneClick,
    onFilterChoose,
  };
};
