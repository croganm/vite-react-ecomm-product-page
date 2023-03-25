// Create a react hook that provides the width of the window in pixels
//
// @ts-check
//
// @param {number} [initialWidth=window.innerWidth]

import { useEffect, useState } from "react";

// @returns {[number, (width: number) => void]}
export const useWindowWidth = (initialWidth = window.innerWidth) => {
	const [width, setWidth] = useState(initialWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return [width, setWidth];
};
