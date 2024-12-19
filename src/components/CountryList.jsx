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
	// Filter the cities array to get a unique list of countries
	// const countries = cities.filter(
	// 	(data, index, arr) =>
	// 		data === arr.find((data2) => data.country === data2.country),
	// );
	const uniqueContries = [];
	const uniqueCities = [];
	for (const city of cities) {
		if (!uniqueContries.includes(city.country)) {
			uniqueContries.push(city.country);
			uniqueCities.push(city);
		}
	}
	return (
		<ul className={styles.countryList}>
			{uniqueCities.map((country, index) => (
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
		}),
	).isRequired,
	isLoading: PropTypes.bool.isRequired,
};

export default CountryList;
