import "./ShowCount.css";
import PropTypes from "prop-types";

const ShowCount = ({ count }) => {
  return (
    <div>
      <h2>You clicked here {count} {count === 1 ? "time" : "times"}</h2>
    </div>
  )
}

ShowCount.propTypes = {
  count: PropTypes.number

}

export default ShowCount