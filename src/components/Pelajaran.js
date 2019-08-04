import React, { Component } from "react";
import "../css/Pelajaran.css";

class Pelajaran extends Component {
  //   constructor() {
  //     this.handleEditClick = this.handleEditClick.bind(this);
  //   }

  //   handleEditClick() {

  //   }

  render() {
    const { hari, index } = this.props;
    return (
      <div>
        <p> {hari[index] ? hari[index].pelajaran : "-"}</p>
        <button type="button" onClick={this.props.handleEditClick}>
          Edit
        </button>
        <button type="button">Hapus</button>
      </div>
    );
  }
}

export default Pelajaran;
