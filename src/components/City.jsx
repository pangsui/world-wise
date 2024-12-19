import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import PropTypes from "prop-types";

const formatDate = (date) =>
	new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "long",
		year: "numeric",
		weekday: "long",
	}).format(new Date(date));

function City({ cities }) {
	const { id } = useParams();
	const city = cities.find((city) => city.id === Number(id));
	const { cityName, emoji, date, notes } = city;

	return (
		<div className={styles.city}>
			<div className={styles.row}>
				<h6>City name</h6>
				<h3>
					<span>{emoji}</span> {cityName}
				</h3>
			</div>

			<div className={styles.row}>
				<h6>You went to {cityName} on</h6>
				<p>{formatDate(date || null)}</p>
			</div>

			{notes && (
				<div className={styles.row}>
					<h6>Your notes</h6>
					<p>{notes}</p>
				</div>
			)}

			<div className={styles.row}>
				<h6>Learn more</h6>
				<a
					href={`https://en.wikipedia.org/wiki/${cityName}`}
					target="_blank"
					rel="noreferrer"
				>
					Check out {cityName} on Wikipedia &rarr;
				</a>
			</div>

			<div>{/* <ButtonBack /> */}</div>
		</div>
	);
}
City.propTypes = {
	cities: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			cityName: PropTypes.string.isRequired,
			emoji: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			notes: PropTypes.string,
		}),
	).isRequired,
};

export default City;
