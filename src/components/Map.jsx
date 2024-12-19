import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
	const [searchParam, setSearchParam] = useSearchParams();
	const lat = searchParam.get("lat");
	const lng = searchParam.get("lng");

	const navigate = useNavigate();

	return (
		<div
			className={styles.mapContainer}
			onClick={() => navigate("form")}
			onKeyUp={(e) => {
				if (e.key === "Enter") navigate("form");
			}}
		>
			<h1>Map coming soon...</h1>
			<h2>
				position: {lat}, {lng}
			</h2>
		</div>
	);
}

export default Map;
