import { FC, MouseEventHandler } from "react";
import { Checkbox } from "../../../../ui";
import styles from "./filter.module.scss";

type FilterProps = {
  filter: {
    id: number;
    name: string;
  };
  selectedFilters: number[];
  onFilterChoose: (id: number) => void;
  onOnlyOneClick: (id: number) => void;
};

export const Filter: FC<FilterProps> = ({ onFilterChoose, selectedFilters, filter, onOnlyOneClick }) => {
  const onOnlyClick: MouseEventHandler = (evt) => {
    evt.stopPropagation();
    onOnlyOneClick(filter.id);
  };

  return (
    <div className={styles.container}>
      <Checkbox
        id={`${filter.id}`}
        checked={selectedFilters.includes(filter.id)}
        label={filter.name}
        onClick={() => onFilterChoose(filter.id)}
      >
        <div className={styles.only} onClick={onOnlyClick}>
          ТОЛЬКО
        </div>
      </Checkbox>
    </div>
  );
};
