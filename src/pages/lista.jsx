import React from "react";
import "../style/lista.css";
import estrela from "../images/estrela.svg";

function Lista() {
  <div>
    <div className="list-screen">
      <div className="principal-list-screen">
        <div className="title-list">
          <h1>LISTA DETALHADA</h1>
        </div>
        <div>
          <div className="card-list">
            <div className="radio-btn-list">
              <div className="circulo"> </div>
            </div>
            <div className="infos-card-list">
              <h1>TRABALHO 1</h1>
              <h2>
                DESCRIÇÃO - <h2 style={{ marginLeft: 10 }}> 27/03</h2>
              </h2>
            </div>
            <div className="estrela-list">
              <div className="estrela">
                <img src={estrela} alt="estrela" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
export default Lista;
