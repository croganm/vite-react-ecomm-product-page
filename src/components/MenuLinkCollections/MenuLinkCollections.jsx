import styles from "./MenuLinkCollections.module.scss";
import { ReactComponent as Close } from "images/icon-close.svg";
import { useRef } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const MenuLinkCollections = ({ links, isMenuOpen, setIsMenuOpen }) => {

	const Menu = useRef();
	useOnClickOutside(Menu, () => setIsMenuOpen(false));

	return (
		<>
			<div
				className={`${styles.Overlay} ${
					isMenuOpen ? styles.isOpen : ""
				}`}
			></div>
			<div
				className={`${styles.MenuLinkCollections} ${isMenuOpen ? styles.isOpen : ""}`}
				data-testid="MenuLinkCollections"
				ref={Menu}
			>
				<button
					className={`${styles.Close} ${isMenuOpen ? styles.isOpen : ""} w-5 absolute top-8 left-8`}
					onClick={() => setIsMenuOpen(false)}
				>
					<Close />
				</button>
				{links.map((link, idx) => (
					<a key={idx} href={`/${link}`}>
						{link}
					</a>
				))}
			</div>
		</>
	);
};

export default MenuLinkCollections;
