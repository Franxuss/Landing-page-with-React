import React from "react";

//include images into your bundle
import Navbar from "../component/Navbar";
import Jumbotron from "../component/Jumbotron";
import CardInfo from "../component/CardInfo";
import Footer from "../component/Footer";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-sm-3">
						<CardInfo />
					</div>
					<div className="col-sm-3">
						<CardInfo />
					</div>
					<div className="col-sm-3">
						<CardInfo />
					</div>
					<div className="col-sm-3">
						<CardInfo />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
