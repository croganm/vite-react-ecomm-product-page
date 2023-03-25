import styles from "./ShoppingInfo.module.scss";
import Avatar from "images/image-avatar.png";
import { ReactComponent as Cart } from "images/icon-cart.svg";
import { ReactComponent as Trash } from "images/icon-delete.svg";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { formatter } from "@/hooks/utils";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const ShoppingInfo = ({ cart, setCart, prevCart }) => {
	const [isDropdown, setDropdown] = useState(false);
	const dropdownElem = useRef();
	const cartElem = useRef(null);

	useOnClickOutside(dropdownElem, (e) => {
		if (cartElem.current && !cartElem.current?.contains(e.target)) {
			setDropdown(false);
		}
	});

	useEffect(() => {
		if (cart != prevCart.current && prevCart.current) setDropdown(true);
		prevCart.current = cart;
	}, [cart]);

	return (
		<div
			className={`${styles.ShoppingInfo} relative`}
			data-testid="ShoppingInfo"
		>
			<button
				className={styles.Cart}
				ref={cartElem}
				onClick={() => setDropdown(!isDropdown)}
			>
				<Cart />
			</button>
			<button className={styles.Avatar}>
				<img src={Avatar} alt="Avatar" />
			</button>

			{isDropdown && (
				<div
					className={`${styles.dropdown} absolute z-10 right-0 bg-white shadow-md rounded-md py-4`}
					ref={dropdownElem}
				>
					<h4 className="font-bold pb-4">Cart</h4>
					{Object.keys(cart).length ? (
						<div className="min-h-24 w-[88vw] max-w-sm">
							{Object.keys(cart).map((item, idx) => (
								<div
									className="flex mt-4 items-center gap-4 w-full lg:w-max"
									key={idx}
								>
									<img
										src={cart[item].image}
										alt={item}
										className="w-auto h-full max-h-16 rounded-lg"
									/>
									<div>
										<p className="lg:whitespace-nowrap text-gray-500">
											{item}
										</p>
										<p className="lg:whitespace-nowrap text-gray-500">
											{formatter.format(cart[item].price)}{" "}
											x {cart[item].qty}{" "}
											<strong className="text-gray-900">
												{formatter.format(
													cart[item].price *
														cart[item].qty
												)}
											</strong>
										</p>
									</div>
									<button
										className=""
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											setCart((prevCart) => {
												const newCart = { ...prevCart };
												delete newCart[item];
												return newCart;
											});
											setDropdown(true);
										}}
									>
										<Trash />
									</button>
								</div>
							))}
							<div className={styles.Checkout}>
								<PrimaryButton>Checkout</PrimaryButton>
							</div>
						</div>
					) : (
						<div className="min-h-[7rem] w-[50vw] max-w-sm flex items-center justify-center text-center">
							<h5 className="font-bold text-gray-500">
								Your cart is empty.
							</h5>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default ShoppingInfo;
