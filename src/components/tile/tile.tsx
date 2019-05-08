import * as React from "react";
import { ICalendarEvents } from "../../reducers/calendarReducer";
import { connect } from "react-redux";
import { IStore } from "../../reducers/index";
import styles from "./tile.module.scss";
import { IReactProps } from "../dayCard/dayCard";
import { timeout } from "q";
import { deflate } from "zlib";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export interface IProps {
  calendarEvent: ICalendarEvents;
}
export interface IReactProps {}
export interface IReduxProps {}

export interface IState {}

class Tile extends React.Component<IProps & IReduxProps, IState> {
  public render() {
    var createdDate = this.props.calendarEvent.start.date;
    var extraDates = this.props.calendarEvent.start.dateTime;

    var startDate = Date.parse(extraDates);
    var date_not_formatted = new Date(startDate);
    var formatted_string = date_not_formatted.getFullYear() + "-";
    var formatted_month = date_not_formatted.getMonth();
    var final_formatted_month;
    const add_digits_to_month = formatted_month
      ? (final_formatted_month = "0" + formatted_month)
      : null;
    let formatted_day = date_not_formatted.getDay();
    var final_formatted_day;
    if (formatted_day < 10) {
      final_formatted_day = "0" + formatted_day;
    }
    var alternativeDate =
      formatted_string + final_formatted_month + "-" + final_formatted_day;
    const bloodyDate = createdDate ? createdDate : alternativeDate;

    var newEndDate = this.props.calendarEvent.end.dateTime;
    var endDate = Date.parse(newEndDate);
    var AnotherEndDate = new Date(endDate);
    const endYears = AnotherEndDate.getFullYear() + "-";
    const endMonths = AnotherEndDate.getMonth();
    var finalEndMonths;
    const addDigitsToMonth = endMonths
      ? (finalEndMonths = "0" + endMonths)
      : null;
    const endDay = AnotherEndDate.getDay();
    var finalEndDay;
    if (endDay < 10) {
      finalEndDay = "0" + endDay;
    }
    var alternativeEndDate = endYears + finalEndMonths + "-" + finalEndDay;
    const finalFuckingDate = this.props.calendarEvent.end.date
      ? this.props.calendarEvent.end.date
      : alternativeEndDate;

    return (
      <article className={styles.calendarItem}>
        <div className={styles.DateAndTitle}>
          <FontAwesomeIcon icon={faCalendar} size="2x" />
          <div className={styles.SecondDiv}>
            <div className={styles.innerSecondDiv}>
              <span>
                <p>{this.props.calendarEvent.summary}</p>
              </span>
              <p>
                {bloodyDate} ~~~ {finalFuckingDate}
              </p>
            </div>
            <div className={styles.innerSecondDivSmall}>
              <p>{this.props.calendarEvent.organizer.displayName}</p>
              <p>{this.props.calendarEvent.creator.email}</p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default connect()(Tile);
