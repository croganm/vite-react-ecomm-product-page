import styles from "./Counter.module.scss";
import { ReactComponent as Plus } from "images/icon-plus.svg";
import { ReactComponent as Minus } from "images/icon-minus.svg";

const Counter = ({ qty, setQty }) => {
	function MinusQty() {
		setQty((prevQty) => {
			if (prevQty == 0) return 0;
			return prevQty - 1;
		});
	}

	function PlusQty() {
		setQty((prevQty) => {
			return prevQty + 1;
		});
	}

	return (
		<div
			className={`${styles.Counter} flex-1 w-full py-2 sm:py-0 mb-4 sm:mb-0 bg-gray-100 flex items-center justify-around rounded-md`}
			data-testid="Counter"
		>
			<button className="cursor-pointer select-none p-3" onClick={MinusQty} tabIndex={0} ><Minus/></button>
			<span className="font-bold">{qty}</span>
			<button className="cursor-pointer select-none p-3" onClick={PlusQty} tabIndex={0}><Plus/></button>
		</div>
	);
};

export default Counter;
