import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import PropTypes from "prop-types";

const formatDate = (date) =>
	new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(date));

function CityItem({ city }) {
	const { cityName, emoji, date, id, coordinates } = city;

	const flagemojiToPNG = (flag) => {
		const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
			.map((char) => String.fromCharCode(char - 127397).toLowerCase())
			.join("");
		return (
			<img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
		);
	};

	return (
		<li>
			<Link
				className={styles.cityItem}
				to={`${id}?lat=${coordinates.latitude}&lng=${coordinates.longitude}`}
			>
				<span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
				<h3 className={styles.name}>{cityName}</h3>
				<time className={styles.date}>({formatDate(date)})</time>
				<button type="button" className={styles.deleteBtn}>
					&times;
				</button>
			</Link>
		</li>
	);
}

CityItem.propTypes = {
	city: PropTypes.shape({
		id: PropTypes.number.isRequired,
		cityName: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		emoji: PropTypes.string.isRequired, // Ensure emoji is a string
		coordinates: PropTypes.shape({
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired,
		}).isRequired,
		notes: PropTypes.string,
		date: PropTypes.string.isRequired,
	}).isRequired,
};

export default CityItem;
