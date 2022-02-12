import React, { Component } from "react";
import CARD_ONE from "../assets/images/card-1.jpg";
import CARD_TWO from "../assets/images/card-2.jpg";
import CARD_THREE from "../assets/images/extra-2.jpg";

class Cards extends Component {
  render() {
    return (
      <section>
        <div className="mt-5 mb-4 pb-4 container">
          <article>
            <div className="text-start row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card pt-4 me-3">
                  <span className="category">Back to School</span>
                  <img
                    src={CARD_ONE}
                    className="card-img-top w-100 img-last-cards"
                    alt="card-1"
                  />
                  <div className="card-body ps-4">
                    <h1 className="card-title fs-4 fw-bold">
                      THS Open The Doors
                    </h1>
                    <p className="card-text fs-6 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      lobortis est aliquam, praesent tortor conubia habitant dis
                      eleifend fringilla non.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card pt-4 me-3">
                  <span className="category">Virtual Learn</span>
                  <img
                    src={CARD_TWO}
                    className="card-img-top w-100 img-last-cards"
                    alt="card-2"
                  />

                  <div className="card-body ps-4">
                    <h1 className="card-title fs-4 fw-bold">
                      Virtual Learning
                    </h1>
                    <p className="card-text fs-6 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      lobortis est aliquam, praesent tortor conubia habitant dis
                      eleifend fringilla non.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card pt-4 me-3">
                  <span className="category">Our Building</span>
                  <img
                    src={CARD_THREE}
                    className="card-img-top w-100 img-last-cards"
                    alt="card-3"
                  />

                  <div className="card-body ps-4">
                    <h1 className="card-title fs-4 fw-bold">
                      In the 2022, the THS...
                    </h1>
                    <p className="card-text fs-6 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      lobortis est aliquam, praesent tortor conubia habitant dis
                      eleifend fringilla non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default Cards;
