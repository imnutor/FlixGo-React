import React, { Component } from "react";
import ImgOurPartners from "./imgOurPartners";

export default class OurPartners extends Component {
  arrayImgPartner = [
    {
      id: 1,
      imgPartner: "/image/partners/themeforest-light-background.png",
      linkPage:"https://themeforest.net/"
    },
    {
      id: 2,
      imgPartner: "/image/partners/3docean-light-background.png",
      linkPage:"https://3docean.net/"
    },
    {
      id: 3,
      imgPartner: "/image/partners/activeden-light-background.png",
      linkPage:"https://themeforest.net/authors/top?level=12&site=activeden.net&gclid=EAIaIQobChMIyZyturHp5QIVx6mWCh2HWwybEAAYASAAEgIn2fD_BwE"
    },
    {
      id: 4,
      imgPartner: "/image/partners/audiojungle-light-background.png"
      ,linkPage:"https://audiojungle.net/user/masterblockbuster/portfolio?utf8=%E2%9C%93&order_by=rating"
    },
    {
      id: 5,
      imgPartner: "/image/partners/codecanyon-light-background.png",
      linkPage:"https://codecanyon.net/"
    },
    {
      id: 6,
      imgPartner: "/image/partners/photodune-light-background.png",
      linkPage:"https://photodune.net/"
    }
  ];

  renderImgPartner = () => {
    return this.arrayImgPartner.map((item, index) => {
      return <ImgOurPartners key={index} imgPartner={item} />;
    });
  };
  render() {
    return (
      <section
        className="section__partner"
        style={{
          background: "url(/image/covers/slide-3.png) no-repeat center/cover"
        }}
      >
        <div className="container">
          <div className="row">
            {/* section title */}
            <div className="col-12">
              <h2 className="section__title section__title--no-margin">
                Our Partners
              </h2>
            </div>
            {/* end section title */}
            {/* section text */}
            <div className="col-12">
              <p className="section__text section__text--last-with-margin">
                The hours of work preparing the food are always worth being able
                to share a meal with others, and with all the wonderful people
                in my family, it’s impossible not to have an enjoyable time.
                With its easygoing, laidback attitude, <b>Thanksgiving </b>
                almost tops <b>Christmas</b> as my favorite holiday of the year.
                The conversations around the dinner table are a refreshing
                change from the chaos of everyday life. I will always remember
                Thanksgiving as one of my most precious memories.
              </p>
            </div>
            {/* end section text */}
            {this.renderImgPartner()}
          </div>
        </div>
      </section>
    );
  }
}
