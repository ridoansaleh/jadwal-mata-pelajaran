import React, { Component } from "react";
import "../css/Modal.css";

class Modal extends Component {
  constructor() {
    super();
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClickClose() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  render() {
    return (
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={this.handleClickClose}>
            &times;
          </span>
          {/* <p>Some text in the Modal..</p> */}
          <form>
            <label>
              Jam{" "}
              <select name="jam" value="07.35 - 08.10">
                <option value="07.00 - 07.35">07.00 - 07.35</option>
                <option value="07.35 - 08.10">07.35 - 08.10</option>
                <option value="08.10 - 08.45">08.10 - 08.45</option>
                <option value="08.45 - 09.00">08.45 - 09.00</option>
                <option value="09.00 - 09.35">09.00 - 09.35</option>
                <option value="09.35 - 10.10">09.35 - 10.10</option>
              </select>
            </label>
            <labe />
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
