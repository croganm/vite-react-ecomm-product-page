import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ children, className='', ...delegated }) => {
	return (
		<button
			className={
				`flex bg-orange-500 text-white py-3 px-4 rounded-md font-bold gap-4 items-center justify-center ${className}`
			}
			{...delegated}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;
