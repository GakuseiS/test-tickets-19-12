import cn from "classnames";
import { useFilters } from "./useFilters";
import { Filter } from "./components/filter";
import { Ticket } from "./components/ticket";
import { Checkbox } from "../../ui/checkbox";
import { CURRENCIES, FILTERS } from "../../utils/constants";
import styles from "./home.module.scss";

export const HomePage = () => {
  const { tickets, isTotalSelected, selectedFilters, onTotalClick, onOnlyClick, onFilterChoose } = useFilters();

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <span className={styles.title}>ВАЛЮТА</span>
        <div className={styles.currencies}>
          {CURRENCIES.map((currency, idx) => (
            <div key={idx} className={cn(styles.currency, currency === CURRENCIES[0] && styles.selected)}>
              {currency}
            </div>
          ))}
        </div>
        <span className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <Checkbox id="total" label="Все" onClick={onTotalClick} checked={isTotalSelected} />
        {FILTERS.map((filter) => (
          <Filter
            key={filter.id}
            onFilterChoose={onFilterChoose}
            selectedFilters={selectedFilters}
            filter={filter}
            onOnlyOneClick={onOnlyClick}
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
