import { useState } from "react";
import { useFormStatus } from "react-dom";

interface StarsProps {
	count: number;
	defautRating: number;
	icon: React.ReactNode;
	color: string;
	iconSize: number;
}

const DEFAULT_COUNT = 5;
const DEFAULT_ICON = "★";
const DEFAULT_UNSELECTED_COLOR = "gray";
const DEFAULT_SELECTED_COLOR = "yellow";
const Stars = ({ count, defautRating, icon, color, iconSize }: StarsProps) => {
	const [rating, setRating] = useState(defautRating);
	const [temporaryRating, setTemporaryRating] = useState(0);
	let stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);
	return (
		<div>
			{stars.map((item) => (
				<div>{}</div>
			))}
		</div>
	);
};

export default Stars;
