import Card from "./Card";
import PropTypes from "prop-types";

function CardPreview({inputData}) {
  return (
    <section className="preview">
      <div className="projectImage"> <img className="projectImage--img" src={inputData.image} alt="" /> </div>
      <Card inputData={inputData} />
    </section>
  );
}

CardPreview.propTypes = {
    inputData: PropTypes.object
}
export default CardPreview;
