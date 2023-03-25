import { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./AddToCart.module.scss";
import { ReactComponent as Cart } from "images/icon-cart.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const AddToCart = ({ name, price, image, setCart }) => {
	const [qty, setQty] = useState(0);

	function handleSubmit(e) {
		e.preventDefault();

		if (!qty) {
			return;
		}

		setCart((prevCart) => {
			const newCart = { ...prevCart };

			if (name in newCart) {
				newCart[name].qty += qty;
			} else {
				newCart[name] = { qty, price, image };
			}

			setQty(0);
			return newCart;
		});
	}

	return (
		<div
			className={`${styles.AddToCart} sm:flex gap-4`}
			data-testid="AddToCart"
		>
			<Counter qty={qty} setQty={setQty} />
			<PrimaryButton
				className="sm:flex-1 w-full"
				value="Add to Cart"
				onClick={handleSubmit}
			>
				<Cart />
				<span className="">Add to Cart</span>
			</PrimaryButton>
		</div>
	);
};

export default AddToCart;
