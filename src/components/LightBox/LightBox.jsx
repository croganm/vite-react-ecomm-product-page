import Gallery from "../Gallery/Gallery";
import styles from "./LightBox.module.scss";

import { ReactComponent as Close } from "images/icon-close.svg";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRef } from "react";

const LightBox = ({ setLightbox }) => {
	const ref = useRef();
	useOnClickOutside(ref, () => setLightbox(false))
	return (
		<div
			className={`${styles.LightBox} text-white text-6xl z-20 fixed inset-0 flex items-center justify-center max-h-screen`}
			data-testid="LightBox"
		>
			<div className="max-w-md m-auto relative" ref={ref}>
				<button
					className={`${styles.Close} absolute -top-7 w-5 h-5 right-0 fill-white hover:fill-orange-500`}
					onClick={() => setLightbox(false)}
				>
					<Close />
				</button>
				<Gallery useArrows />
			</div>
		</div>
	);
};

export default LightBox;
