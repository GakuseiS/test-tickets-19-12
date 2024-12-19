import cn from "classnames";
import { useFilters } from "./useFilters";
import { Filter } from "./components/filter";
import { Ticket } from "./components/ticket";
import { Checkbox } from "../../ui/checkbox";
import { CURRENCIES, FILTERS } from "../../utils/constants";
import styles from "./filters.module.scss";

export const FiltersPage = () => {
  const {
    tickets,
    isAll,
    selectedFilters,
    onAllClick,
    onOnlyOneClick,
    onFilterChoose,
  } = useFilters();

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <span className={styles.title}>ВАЛЮТА</span>
        <div className={styles.currencies}>
          {CURRENCIES.map((currency, idx) => (
            <div
              key={idx}
              className={cn(
                styles.currency,
                currency === "RUB" && styles.selected
              )}
            >
              {currency}
            </div>
          ))}
        </div>
        <span className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <Checkbox
          onClick={onAllClick}
          isChecked={isAll}
          id="all"
          label={"Все"}
        />
        {FILTERS.map((filter) => (
          <Filter
            key={filter.id}
            onFilterChoose={onFilterChoose}
            selectedFilters={selectedFilters}
            filter={filter}
            onOnlyOneClick={onOnlyOneClick}
          />
        ))}
      </div>
      <div className={styles.tickets}>
        {tickets?.map((ticket, idx) => (
          <Ticket key={idx} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};
