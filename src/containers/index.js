import React from "react";
import { connect } from "react-redux";

import { getItems } from "../actions/getItemActions";
import Table from "../components/table";
import "./index.css";

class SearchBox extends React.Component {
  onKeyUp = event => {
    const queryString = event.target.value;
    if (queryString.length > 2) this.props.getItems(queryString);
  };
  render() {
    const { moviesData, error, loading } = this.props;
    return (
      <div className="search-box">
        <form>
          <input type="text" onKeyUp={this.onKeyUp} />
          <input type="reset" value="Reset" />
        </form>
        {loading ? <div>Loading...</div> : null}
        {!loading && moviesData && moviesData.length ? <Table moviesData={moviesData} /> : null}
        {!loading && error ? <div className="error">{error}</div> : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItems: queryString => dispatch(getItems(queryString))
  };
};

const mapStateToProps = state => {
  const { data } = state.itemsData;
  return {
    moviesData: data.Search,
    error: data.Error,
    loading: state.itemsData.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
