import React, { Component } from "react";
import Gallery_image_1 from "../assets/images/gallery-1.jpg";
import Gallery_image_2 from "../assets/images/gallery-2.jpg";
import Gallery_image_3 from "../assets/images/gallery-3.jpg";
import Gallery_image_4 from "../assets/images/gallery-4.jpg";

class MoreInfo extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid pb-5 row d-flex align-items-center justify-content-evenly">
          <div className="col-12 col-md-9 col-lg-4">
            <h2 className="fs-4 fw-bold pb-2 text-uppercase">Core values</h2>
            <div className="gallery">
              <div className="grid_img">
                <img src={Gallery_image_1} alt="gallery-1" className="w-100" />
                <div className="content-img">
                  <h2>Leadership</h2>
                </div>
              </div>
              <div className="grid_img">
                <img src={Gallery_image_2} alt="gallery-2" className="w-100" />
                <div className="content-img">
                  <h2>Integrity</h2>
                </div>
              </div>
              <div className="grid_img">
                <img src={Gallery_image_3} alt="gallery-3" className="w-100" />
                <div className="content-img">
                  <h2>Perseverance</h2>
                </div>
              </div>
              <div className="grid_img">
                <img src={Gallery_image_4} alt="gallery-4" className="w-100" />
                <div className="content-img">
                  <h2>Achievement</h2>
                </div>
              </div>
            </div>
            <button className="btn-1 pt-2 pb-2 ps-5 pe-5 mt-3">
              <i className="fas fa-arrow-circle-right me-2"></i> More
            </button>
          </div>
          <div className="col-12 col-md-8 col-lg-4">
            <h2 className="fs-4 fw-bold mt-5 pt-3 pb-3 text-uppercase">
              About us
            </h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis asperiores, odio animi, officiis illum porro ullam
              accusamus ea eveniet voluptatem facilis, aliquam veniam deserunt
              placeat voluptatibus ipsa omnis. Dolor, iusto. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Cupiditate molestiae quasi
              ea, ratione cum, magnam necessitatibus blanditiis, quis aut dolore
              perferendis corrupti a animi mollitia in vero harum consequuntur!
              Accusantium!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              at vero est labore molestias rerum ratione, rem similique sunt
              ullam adipisci? Quia, suscipit! Saepe, nobis. Architecto tenetur
              molestias natus in.
            </p>
            <button className="btn-1 pt-2 pb-2 ps-5 pe-5">
              <i className="fas fa-arrow-circle-right me-2"></i> Continue
              Reading
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default MoreInfo;
