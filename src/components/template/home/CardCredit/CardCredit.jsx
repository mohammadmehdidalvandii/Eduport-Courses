import "./CardCredit.scss";
// using fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

import db from '../../../../data/db.json'
import { useState } from "react";

function CardCredit() {
    const [credits , setCredits ] = useState([...db.credit])
  return (
    <section className="cardCredit">
      <div className="container">
        <div className="row">
            {
                credits.map(credit => (
          <div className="col-lg-3 col-md-6 col-sm-12" key={credit.id}>
            <div className="cardCredit_item" style={{backgroundColor:[credit.bgColor]}}>
              <span className="cardCredit_item_icon" style={{color: [credit.iconColor]}}>
                <FontAwesomeIcon icon={Icons[credit.icon]} />
              </span>
              <div className="cardCredit_item_content">
                <h5 className="cardCredit_item_title">{credit.title}</h5>
                <span className="cardCredit_item_text">{credit.text}</span>
              </div>
            </div>
          </div>
                ))
            }
        </div>
      </div>
    </section>
  );
}

export default CardCredit;
