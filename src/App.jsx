import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import Products from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import "./index.css";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

function App() {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// const BASE_URL = "http://localhost:9000/cities";
	const BASE_URL =
		"https://raw.githubusercontent.com/pangsui/world-wise/refs/heads/main/data/cities.json";
	useEffect(() => {
		async function fetchCities() {
			try {
				setIsLoading(true);
				const res = await fetch(`${BASE_URL}`);
				const data = await res.json();
				setCities(data);
			} catch {
				alert("There was an error loading data...");
			} finally {
				setIsLoading(false);
			}
		}
		fetchCities();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<HomePage />} /> */}
				<Route index element={<HomePage />} />
				<Route path="login" element={<Login />} />
				<Route path="product" element={<Products />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="app" element={<AppLayout />}>
					<Route index element={<Navigate replace to="cities" />} />
					<Route
						path="cities"
						element={<CityList cities={cities} isLoading={isLoading} />}
					/>
					<Route path="cities/:id" element={<City cities={cities} />} />
					<Route
						path="countries"
						element={<CountryList cities={cities} isLoading={isLoading} />}
					/>
					<Route path="form" element={<Form />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
