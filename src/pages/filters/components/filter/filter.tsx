import { FC, MouseEvent, useState } from "react";
import { Checkbox } from "../../../../ui";

interface FilterProps {
  filter: {
    id: number;
    name: string;
  };
  selectedFilters: number[];
  onFilterChoose: (id: number) => void;
  onOnlyOneClick: (id: number) => void;
}

export const Filter: FC<FilterProps> = ({
  onFilterChoose,
  selectedFilters,
  filter,
  onOnlyOneClick,
}) => {
  const [display, setDisplay] = useState("notdisplayed");
  const showOnlyButton = (evt: MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    setDisplay("displayed");
  };

  const hideOnlyButton = (evt: MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    setDisplay("notdisplayed");
  };

  return (
    <>
      <Checkbox
        id={`${filter.id}`}
        isChecked={selectedFilters.includes(filter.id)}
        label={filter.name}
        onClick={() => onFilterChoose(filter.id)}
        onMouseEnter={showOnlyButton}
        onMouseLeave={hideOnlyButton}
      >
        <div
          className={display}
          onClick={(evt) => {
            evt.stopPropagation();
            onOnlyOneClick(filter.id);
          }}
        >
          ТОЛЬКО
        </div>
      </Checkbox>
    </>
  );
};
