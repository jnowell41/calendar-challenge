import * as React from "react";
import styles from "./header.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { IStore } from "../../reducers";

export interface IProps {}
export interface IReduxProps {}
export interface IState {}

class Header extends React.Component<IProps, IState> {
  public state = {
    filteredText: ""
  };
  public render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        filteredText: event.target.value
      });
    };

    console.log(this.state.filteredText);
    return (
      <div className={styles.containingHeader}>
        <div className={styles.searchBar}>
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search..."
            value={this.state.filteredText}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state:IStore props:IReduxProps) => {
//   filteredText:state.filteredText
// }

export default connect()(Header);
