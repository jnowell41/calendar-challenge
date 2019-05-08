import * as React from "react";
import styles from "./dayCard.module.scss";
import { connect } from "react-redux";
import { IStore } from "../../reducers";
import { fetchCalendar } from "../../reducers/calendarReducer";
import { ICalendarEvents } from "../../reducers/calendarReducer";
import Tile from "../tile";

export interface IReactProps {}
export interface IState {}
export interface IReduxProps {
  fetchCalendar: () => void;
  calendarEvents: ICalendarEvents[];
}

class DayCard extends React.Component<IReactProps & IReduxProps, IState> {
  public componentDidMount = () => {
    this.props.fetchCalendar();
  };

  public render() {
    return (
      <React.Fragment>
        <div className={styles.calendarCard}>
          <div className={styles.innerCard}>
            {this.props.calendarEvents.map((calendarEvent, index) => (
              <Tile key={index} calendarEvent={calendarEvent} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return {
    calendarEvents: state.calendar.calendarEvents
  };
};

const mapDispatchToProps = { fetchCalendar };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayCard);
