import React from "react";
import Slider from "react-slick";

import Client1 from '../pages/assets/client1.png'
import Client2 from '../pages/assets/client2.png'
import Client3 from '../pages/assets/client3.png'

class TestimonialSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      arrows: false,
      infinite: true,
      speed: 1200,
      slidesToShow: 3,
      slidesToScroll: 2
    };
    return (
      <Slider {...settings}>
        <div className="tSlide">
          <p>
            Ankit is an excellent freelancer. Dependable and qualified. Great communicator.
          </p>
          <span>Dot Com Media, USA</span>
          <em>Sam Natello</em>
        </div>
        <div className="tSlide">
          <p>
            Easy to work with and a great communicator. Work was done exactly to our specifications.
          </p>
          <span>Ape Mobile, Australia</span>
          <em>Kevin Reece</em>
        </div>
        <div className="tSlide">
          <p>
            Master of all trades! I`ve asked him to do many different tasks and he was great! Thanks
          </p>
          <span>PPC, USA</span>
          <em>Pesach Gelfand</em>
        </div>
      </Slider>
    );
  }
}
export default TestimonialSlider;
