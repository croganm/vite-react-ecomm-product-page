import AddToCart from "../AddToCart/AddToCart";
import PriceDisplay from "../PriceDisplay/PriceDisplay";
import styles from "./ProductDescription.module.scss";

const ProductDescription = ({ name, image, price, comparePrice, setCart, className="", children }) => {
	return (
		<div
			className={`${styles.ProductDescription} ${className}`}
			data-testid="ProductDescription"
		>
			<h5 className="text-orange-600 uppercase font-bold">Sneaker Company</h5>
			<h1 className="font-black text-5xl">{name}</h1>
			<p className="text-gray-600">{children}</p>
			<PriceDisplay price={price} comparePrice={comparePrice}/>
			<AddToCart name={name} price={price} image={image} setCart={setCart}/>
		</div>
	);
};

export default ProductDescription;
