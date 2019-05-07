import * as React from "react";
import styles from "./dayCard.module.scss";
import { connect } from "react-redux";
import { IStore } from "../../reducers";
import { fetchCalendar } from "../../reducers/calendarReducer";
// import { getCalendarEvents } from "../../reducers/calendarReducer";
import { ICalendarEvents } from "../../reducers/calendarReducer";
import Tile from "../tile";

export interface IProps {}
export interface IState {}
export interface IReduxProps {
  fetchCalender: () => void;
  calenderEvents: ICalendarEvents[];
}

class DayCard extends React.Component<IProps & IReduxProps, IState> {
  public componentDidMount = () => {
    this.props.fetchCalender();
  };

  public render() {
    return (
      <div className={styles.calendarCard}>
        {this.props.calenderEvents.map((item, index) => {
          <Tile key={index} cards={item} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReduxProps) => {
  return {
    calendarEvents: state.calendar.calendarEvents,
    ...props
  };
};

const mapDispatchToProps = { fetchCalendar };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayCard);
