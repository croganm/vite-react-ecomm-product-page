import styles from "./PriceDisplay.module.scss";
import { formatter } from "@/hooks/utils";

const PriceDisplay = ({ price, comparePrice=price }) => {
	


	return (
		<div className="flex justify-between items-center sm:block" data-testid="PriceDisplay">
			<div className="flex gap-3 sm:gap-6 items-center sm:mb-2">
				<p className={`${styles.price} font-bold text-2xl sm:text-4xl`}>{formatter.format(price)}</p>
				<p className={`${styles.percentOff} bg-orange-100 text-orange-600 font-bold px-2 py-1 rounded-md text-sm sm:text-base`}>{`${((comparePrice-price)/comparePrice*100).toFixed(0)}%`}</p>
			</div>
			<s className={`${styles.comparePrice} text-neutral-300 sm:text-xl font-bold`}>{formatter.format(comparePrice)}</s>
		</div>
	);
};

export default PriceDisplay;
