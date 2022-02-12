import React, { Component } from "react";
import SLIDER_ONE from "../assets/images/slider-1.jpg";
import SLIDER_TWO from "../assets/images/slider-2.jpg";
import SLIDER_THREE from "../assets/images/slider-3.jpg";

class Carousel extends Component {
  render() {
    return (
      <section>
        <main>
          <div
            id="carouselStudents"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators pb-4">
              <li
                type="button"
                data-bs-target="#carouselStudents"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></li>
              <li
                type="button"
                data-bs-target="#carouselStudents"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></li>
              <li
                type="button"
                data-bs-target="#carouselStudents"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={SLIDER_ONE}
                  className="img-fluid d-block w-100"
                  alt="slider-1"
                />
                <div className="carousel-container d-none d-md-block text-start">
                  <h1 className="display-1">This High School</h1>
                  <p className="carousel-paragraph">
                    We are a public school that welcomes any student interested
                    in exploring the fields of science, technology, engineering
                    and math.
                  </p>
                  <div className="container d-inline-flex p-0 mt-3">
                    <button className="btn-1 pt-2 pb-2 ps-5 pe-5">
                      Ok let's go
                      <i className="fas fa-arrow-circle-right ms-2"></i>
                    </button>
                    <button className="btn-1 pt-2 pb-2 ps-5 pe-5 ms-3">
                      More info<i className="fas fa-question-circle ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={SLIDER_TWO}
                  className="img-fluid d-block w-100"
                  alt="slider-2"
                />
                <div className="carousel-container d-none d-md-block text-start">
                  <h1 className="display-1">Every Day</h1>
                  <p className="carousel-paragraph">
                    We open the doors of opportunity in these fields, guiding
                    our students as they imagine the possibilities for our
                    shared future.
                  </p>
                  <div className="container d-inline-flex p-0 mt-3">
                    <button className="btn-1 pt-2 pb-2 ps-5 pe-5">
                      Ok let's go
                      <i className="fas fa-arrow-circle-right ms-2"></i>
                    </button>
                    <button className="btn-1 pt-2 pb-2 ps-5 pe-5 ms-3">
                      More info<i className="fas fa-question-circle ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={SLIDER_THREE}
                  className="img-fluid d-block w-100"
                  alt="slider-3"
                />
                <div className="carousel-container d-none d-md-block text-start">
                  <h1 className="display-1">Stay Updated</h1>
                  <p className="carousel-paragraph">
                    View our calendar, announcements and weekly messages from
                    our Head of School.
                  </p>
                  <div className="container d-inline-flex p-0 mt-3">
                    <button className="btn-1 pt-2 pb-2 ps-5 pe-5">
                      Ok let's go
                      <i className="fas fa-arrow-circle-right ms-2"></i>
                    </button>
                    <button className="btn-1 pt-2 pb-2 ps-5 pe-5 ms-3">
                      More info<i className="fas fa-question-circle ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default Carousel;
