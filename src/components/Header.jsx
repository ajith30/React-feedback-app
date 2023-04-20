import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  //getting color values from Props
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    // <header style={{ backgroundColor: "blue", color: "red" }}> In-line Styling
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Deffault props: you can remove text attribute in Header tag in App.js and check the below as
// Feedback UI as set to default if no text props value added.

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

// If we want to specify the data type of the props we can sent using
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
