import PropTypes from "prop-types";

import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const flagemojiToPNG = (flag) => {
    const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cityName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired, // Ensure emoji is a string
    notes: PropTypes.string,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryItem;
