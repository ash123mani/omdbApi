import React from "react";

import "./table.css";

class Table extends React.Component {
  render() {
    const moviesToDispaly = this.props.moviesData.slice(0, 5);
    const renderData = moviesToDispaly.map((item, index) => {
      return (
        <tbody key={index}>
          <tr>
            <td>{item.Title}</td>
            <td>{item.imdbID}</td>
            <td>{item.Year}</td>
          </tr>
        </tbody>
      );
    });
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>ImdbId</th>
              <th>Release Year</th>
            </tr>
          </thead>
          {renderData}
        </table>
      </div>
    );
  }
}

export default Table;
