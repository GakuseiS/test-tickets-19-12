import { useState, useEffect } from "react";
import { ticketsData } from "../../state/tickets";
import { TTicket } from "../../state/tickets.type";

export const useFilters = () => {
  const [tickets, setTickets] = useState<TTicket[]>(ticketsData.tickets.sort((a, b) => a.price - b.price));
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);
  const [isTotalSelected, setTotalSelected] = useState<boolean>(true);

  useEffect(() => {
    if (isTotalSelected) return;
    if (selectedFilters.length) {
      getFilteredData(selectedFilters);
    } else {
      setTotalSelected(true);
      setTickets(ticketsData.tickets);
    }
  }, [selectedFilters, isTotalSelected]);

  const onTotalClick = () => {
    setTotalSelected(true);
    setSelectedFilters([]);
    setTickets(ticketsData.tickets);
  };

  const onOnlyClick = (id: number) => {
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
    const temp = ticketsData?.tickets?.filter((ticket) => filters.includes(ticket.stops));
    setTickets(temp);
  };

  return {
    tickets,
    isTotalSelected,
    selectedFilters,
    onTotalClick,
    onOnlyClick,
    onFilterChoose,
  };
};
