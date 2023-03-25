import { Range } from "@/hooks/utils";
import styles from "./GalleryThumbnails.module.scss";

const GalleryThumbnails = ({ imageId, setImageId, count }) => {

	return (
		<div
			className={styles.GalleryThumbnails}
			data-testid="GalleryThumbnails"
		>
			{Range(count, (k) => k + 1).map((n) => (
				<button
					className={`${imageId == n ? styles.selectedImage : ""}`}
					key={n}
					onClick={() => setImageId(n)}
					tabIndex={0}
				>
					<img
						src={`/src/assets/images/image-product-${n}-thumbnail.jpg`}
					/>
				</button>
			))}
		</div>
	);
};

export default GalleryThumbnails;
