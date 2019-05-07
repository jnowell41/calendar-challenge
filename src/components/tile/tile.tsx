import * as React from "react";
import { ICalendarEvents } from "../../reducers/calendarReducer";
import styles from "./tile.module.scss";

export interface IProps {
  cards: ICalendarEvents;
}

export interface IState {}

class Tile extends React.Component<IProps, IState> {
  public render() {
    return (
      <article className={styles.calendarItem}>
        <p>Hellllllllo</p>
        <div>{this.props.cards.summary}</div>
        <div>{this.props.cards.items}</div>
      </article>
    );
  }
}

export default Tile;
