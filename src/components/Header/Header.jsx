import styles from "./Header.module.scss";
import logo from "images/logo.svg";
import MenuLinkCollections from "components/MenuLinkCollections/MenuLinkCollections";
import ShoppingInfo from "components/ShoppingInfo/ShoppingInfo";
import { ReactComponent as Menu } from "images/icon-menu.svg";
import { useState } from "react";

const Header = ({ cart, setCart, prevCart }) => {
	const links = ["Collections", "Men", "Women", "About", "Contact"];
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className={`${styles.Header} px-6 sm:px-12 lg:px-4 py-4 lg:py-8 gap-4 lg:gap-8`} data-testid="Header">
			<button
				className={`${styles.Menu} w-4 h-4 flex items-center justify-center block lg:hidden`}
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				<Menu />
			</button>

			<div className={styles.logo}>
				<img src={logo} className="w-auto relative h-4 lg:h-6"/>
			</div>

			<MenuLinkCollections links={links} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

			<ShoppingInfo cart={cart} setCart={setCart} prevCart={prevCart} />
		</div>
	);
};

export default Header;
