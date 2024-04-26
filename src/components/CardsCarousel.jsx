
import Carousel from "react-responsive-carousel";

export const CardsCarousel = () => {



const CardsCarousel = React.createClass({
  render() {
    return (
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}>
        <div>
          <img src="./assets/mobileIcons/explore-mobile.png"/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="" />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>
    );
  },
});
}