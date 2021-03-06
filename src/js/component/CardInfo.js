import React from "react";
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Cardimg
} from "reactstrap";

export default function CardInfo() {
	return (
		<Card>
			<CardBody>
				<CardTitle>Card Title</CardTitle>
				<CardText>
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</CardText>
				<button>Go somewhere</button>
			</CardBody>
		</Card>
	);
}
