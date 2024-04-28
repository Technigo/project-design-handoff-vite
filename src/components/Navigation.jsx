import PropTypes from "prop-types";

export const Navigation = ({ data }) => {
  return (
    <>
      {data.navbar.map((link, index) => (
        <a href={link.link} key={index} className="hover:drop-shadow-md">
          <h3>{link.text}</h3>
        </a>
      ))}
    </>
  );
};

Navigation.propTypes = {
  data: PropTypes.object.isRequired,
};
