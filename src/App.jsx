import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Header from "components/Header/Header";
import Gallery from "components/Gallery/Gallery";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import LightBox from "./components/LightBox/LightBox";

function App() {
	const [cart, setCart] = useState({
		"Fall Limited Edition Sneakers": {
			price: 125,
			qty: 3,
			image: "/src/assets/images/image-product-1-thumbnail.jpg",
		},
	});

	const prevCart = useRef(null);
	useEffect(() => {
		prevCart.current = cart;
	}, [cart]);

	const [lightbox, setLightbox] = useState(false);

	const MainApp = () => (
		<div className="App lg:container mx-auto xl:px-48 lg:pb-12">
			<Header cart={cart} setCart={setCart} prevCart={prevCart} />

			<div className="content lg:mt-16 lg:px-16 lg:flex gap-20">
				<div className="hidden lg:block basis-1/2">
					<Gallery
						// @ts-ignore
						setLightbox={setLightbox}
						useThumbnails
					/>
				</div>

				<div className="block lg:hidden max-h-96 flex items-stretch justify-center mb-12">
					<Gallery
						// @ts-ignore
						useArrows
					/>
				</div>

				<ProductDescription
					name="Fall Limited Edition Sneakers"
					image="/src/assets/images/image-product-1-thumbnail.jpg"
					price={125}
					comparePrice={250}
					setCart={setCart}
					className="px-8 lg:px-0 pb-8 lg:pb-0"
				>
					These low-profile sneakers are your perfect casual wear
					companion. Featuring a durable rubber outer sole, they’ll
					withstand everything the weather can offer.
				</ProductDescription>
			</div>
		</div>
	);

	if (lightbox) {
		return (
			<div className="relative">
				<MainApp />
				<div className="absolute inset-0 bg-black/80 z-10"></div>
				<LightBox setLightbox={setLightbox} />
			</div>
		);
	}

	return (
		<>
			<MainApp />
		</>
	);
}

export default App;
