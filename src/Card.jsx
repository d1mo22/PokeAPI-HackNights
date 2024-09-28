import "./Card.css";

function Card({ nombre, tipo1, tipo2, color }) {
	return (
		<div class="Card" style={{ background: color }}>
			<h1>{nombre}</h1>
			<h2>
				{tipo1} {tipo2 !== null && tipo2}
			</h2>
		</div>
	);
}

export default Card;
