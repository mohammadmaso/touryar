import { Image } from '@chakra-ui/image';
interface Props {}

const ToureCard1 = (props: Props) => {
  return (
    <div>
      <div className="row  justifyContent-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section text-center py-5 py-md-0">
            <input
              className="pricing"
              type="checkbox"
              id="pricing"
              name="pricing"
            />
            <label htmlFor="pricing">
              <span className="block-diff">
                kayaking<span className="float-right">camping</span>
              </span>
            </label>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="pricing-wrap">
                    <h4 className="mb-5">Kayaking</h4>
                    <h2 className="mb-2">
                      <sup>$</sup>39 / 4<sup>hrs</sup>
                    </h2>
                    <div className="mb-4">per person</div>
                    <div className="mb-1">
                      <i className="uil uil-location-pin-alt size-22"></i>
                    </div>
                    <div className="mb-4">Drina, Serbia</div>
                    <a href="#0" className="link">
                      Choose Date
                    </a>
                    <div className="img-wrap img-2">
                      <Image
                        src="https://assets.codepen.io/1462889/sea.png"
                        alt=""
                        fallbackSrc="/images/placeholder.png"
                      />
                    </div>
                    <div className="img-wrap img-1">
                      <Image
                        src="https://assets.codepen.io/1462889/kayak.png"
                        alt=""
                        fallbackSrc="/images/placeholder.png"
                      />
                    </div>
                    <div className="img-wrap img-3">
                      <Image
                        src="https://assets.codepen.io/1462889/water.png"
                        alt=""
                        fallbackSrc="/images/placeholder.png"
                      />
                    </div>
                    <div className="img-wrap img-6">
                      <Image
                        src="https://assets.codepen.io/1462889/Stone.png"
                        alt=""
                        fallbackSrc="/images/placeholder.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="pricing-wrap">
                    <h4 className="mb-5">Camping</h4>
                    <h2 className="mb-2">
                      <sup>$</sup>29 / 8<sup>hrs</sup>
                    </h2>
                    <div className="mb-4">per person</div>
                    <div className="mb-1">
                      <i className="uil uil-location-pin-alt size-22"></i>
                    </div>
                    <div className="mb-4">Tara, Serbia</div>
                    <a href="#0" className="link">
                      Choose Date
                    </a>
                    <div className="img-wrap img-2">
                      <Image
                        src="https://assets.codepen.io/1462889/grass.png"
                        alt=""
                        fallbackSrc="/images/placeholder.png"
                      />
                    </div>
                    <div className="img-wrap img-4">
                      <Image
                        src="https://assets.codepen.io/1462889/camp.png"
                        alt=""
                        fallbackSrc="/images/placeholder.png"
                      />
                    </div>
                    <div className="img-wrap img-5">
                      <Image
                        src="https://assets.codepen.io/1462889/Ivy.png"
                        alt=""
                        fallbackSrc="/images/placeholder.png"
                      />
                    </div>
                    <div className="img-wrap img-7">
                      <Image
                        src="https://assets.codepen.io/1462889/IvyRock.png"
                        alt=""
                        fallbackSrc="/images/placeholder.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToureCard1;
