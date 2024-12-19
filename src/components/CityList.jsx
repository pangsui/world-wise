import PropTypes from "prop-types";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, isLoading }) {
	if (isLoading) return <Spinner />;

	if (!cities.length)
		return (
			<Message message="Add your first city by clicking on a city on the map" />
		);

	return (
		<ul className={styles.cityList}>
			{cities.map((city) => (
				<CityItem key={city.id} city={city} />
			))}
		</ul>
	);
}

// Define prop types
CityList.propTypes = {
	cities: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired, // Ensure city objects have an `id`
			name: PropTypes.string.isRequired, // Include other properties as needed
		}),
	).isRequired, // Mark cities as required
	isLoading: PropTypes.bool.isRequired, // Ensure isLoading is a boolean and required
};

export default CityList;
