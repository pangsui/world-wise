import PropTypes from "prop-types";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  // const countries = cities.map((city) => {
  //   return {
  //     country: city.country,
  //     emoji: city.emoji,
  //     id: city.id, // Ensure this is correct if you have `id`
  //   };
  // });
  const countries = cities.filter((data, index, arr) => {
    {
      return data === arr.find((data2) => data.country === data2.country);
    }
  });

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CountryList;
