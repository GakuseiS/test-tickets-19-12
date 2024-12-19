import { FC } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { numberWithSpaces } from "../../../../utils/num";
import { nounDeclension } from "../../../../utils/words";
import { LOGO_MAP } from "../../../../utils/logoMap";
import { TTicket } from "../../../../state/tickets.type";
import styles from "./ticket.module.scss";

type TicketProps = {
  ticket: TTicket;
};

export const Ticket: FC<TicketProps> = ({ ticket }) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.price}>
        <img src={LOGO_MAP[ticket.carrier]} width={"120px"} />
        <div className={styles.button}>
          Купить за <br /> {numberWithSpaces(ticket.price)} &#8381;
        </div>
      </div>
      <div className={styles.dash}></div>
      <div className={styles.description}>
        <div className={styles.origin}>
          <div className={styles.time}>{ticket.departure_time}</div>
          <div className={styles.details}>
            <div>{`${ticket.origin}, ${ticket.origin_name}`}</div>
            <div className={styles.date}>{dayjs(ticket.departure_date).locale("ru").format("D MMM YYYY, ddd")}</div>
          </div>
        </div>
        <div className={styles.stops}>
          {`${ticket.stops} ${nounDeclension(ticket.stops, "пересадка", "пересадки", "пересадок")}`}
        </div>
        <div className={styles.destination}>
          <div className={styles.time}>{ticket.arrival_time}</div>
          <div className={styles.details}>
            <div>{`${ticket.destination}, ${ticket.destination_name}`}</div>
            <div className={styles.date}>{dayjs(ticket.arrival_date).locale("ru").format("D MMM YYYY, ddd")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
