import React, { Component, Fragment } from "react";
import Pelajaran from "./Pelajaran";
import Modal from "./Modal";
import "../css/App.css";
import { JADWAL_API, JUMLAH_HARI } from "../constant";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jadwal: [],
      isDataFetched: false
    };

    this.getJadwal = this.getJadwal.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentDidMount() {
    this.getJadwal();
  }

  handleEditClick() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  getJadwal() {
    fetch(JADWAL_API)
      .then(res => {
        if (!res.ok) {
          console.error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          jadwal: data,
          isDataFetched: true
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isDataFetched: true
        });
      });
  }

  render() {
    const { jadwal, isDataFetched } = this.state;
    // const { jadwal } = data;
    if (!isDataFetched) {
      return (
        <div>
          <p>Loading..</p>
        </div>
      );
    }
    // const { jadwal } = data;
    console.log("jadwal : ", jadwal);
    return (
      <div>
        <p>Jadwal Mata Pelajaran Kelas IV - SD Percontohan</p>
        <table>
          <tbody>
            <tr>
              <th>Waktu</th>
              <th>Senin</th>
              <th>Selasa</th>
              <th>Rabu</th>
              <th>Kamis</th>
              <th>Jumat</th>
              <th>Sabtu</th>
            </tr>
            {Object.keys(jadwal).length > 0 ? (
              Array.from({ length: JUMLAH_HARI }, (v, i) => i).map(
                (val, idx) => {
                  return (
                    <tr>
                      <td>{jadwal.waktu_pelajaran[idx]}</td>
                      <td>
                        {/* <p>
                          {" "}
                          {jadwal.senin[idx]
                            ? jadwal.senin[idx].pelajaran
                            : "-"}
                        </p>
                        <button type="button">Edit</button>
                        <button type="button">Hapus</button> */}
                        <Pelajaran
                          hari={jadwal.senin}
                          index={idx}
                          handleEditClick={this.handleEditClick}
                        />
                      </td>
                      <td>
                        {/* {jadwal.selasa[idx]
                          ? jadwal.selasa[idx].pelajaran
                          : "-"} */}
                        <Pelajaran
                          hari={jadwal.selasa}
                          index={idx}
                          handleEditClick={this.handleEditClick}
                        />
                      </td>
                      <td>
                        {/* {jadwal.rabu[idx] ? jadwal.rabu[idx].pelajaran : "-"} */}
                        <Pelajaran
                          hari={jadwal.rabu}
                          index={idx}
                          handleEditClick={this.handleEditClick}
                        />
                      </td>
                      <td>
                        {/* {jadwal.kamis[idx] ? jadwal.kamis[idx].pelajaran : "-"} */}
                        <Pelajaran
                          hari={jadwal.kamis}
                          index={idx}
                          handleEditClick={this.handleEditClick}
                        />
                      </td>
                      <td>
                        {/* {jadwal.jumat[idx] ? jadwal.jumat[idx].pelajaran : "-"} */}
                        <Pelajaran
                          hari={jadwal.jumat}
                          index={idx}
                          handleEditClick={this.handleEditClick}
                        />
                      </td>
                      <td>
                        {/* {jadwal.sabtu[idx] ? jadwal.sabtu[idx].pelajaran : "-"} */}
                        <Pelajaran
                          hari={jadwal.sabtu}
                          index={idx}
                          handleEditClick={this.handleEditClick}
                        />
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <tr>
                <td colSpan={7}>Belum ada jadwal</td>
              </tr>
            )}
          </tbody>
        </table>
        <Modal />
      </div>
    );
  }
}

export default App;
