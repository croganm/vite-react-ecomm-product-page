import useImageCounter from "@/hooks/useGalleryImage";
import GalleryThumbnails from "../GalleryThumbnails/GalleryThumbnails";
import styles from "./Gallery.module.scss";
import { ReactComponent as NextArrow } from "images/icon-next.svg";
import { ReactComponent as PreviousArrow } from "images/icon-previous.svg";
const gallery = import.meta.glob('images/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' })

const FeaturedImageWithArrows = ({ MAX_IMAGES, imageId, setImageId }) => {
	return (
		<div className={`${styles.FeaturedImage}`}>
			<button
				className={`${styles.Arrow} left-4 lg:-left-6`}
				onClick={() =>
					setImageId(imageId == 1 ? MAX_IMAGES : imageId - 1)
				}
			>
				<PreviousArrow />
			</button>
			<img src={gallery[`/src/assets/images/image-product-${imageId}.jpg`]} />
			<button
				className={`${styles.Arrow} right-4 lg:-right-6`}
				onClick={() =>
					setImageId(imageId == MAX_IMAGES ? 1 : imageId + 1)
				}
			>
				<NextArrow />
			</button>
		</div>
	);
};

const FeaturedImage = ({ imageId, setLightbox }) => {
	return (
		<button onClick={() => setLightbox(true)}>
			<img
				className={styles.FeaturedImage}
				src={gallery[`/src/assets/images/image-product-${imageId}.jpg`]}
			/>
		</button>
	);
};

// Export const Gallery with default props useArrows and setLightbox. useArrows should be false by default and setLightbox should be a void function by default.
const Gallery = ({
	useArrows = false,
	useThumbnails = false,
	setLightbox = () => void undefined,
	className = "",
}) => {
	const MAX_IMAGES = 4;
	const [imageId, setImageId] = useImageCounter(MAX_IMAGES);
	return (
		<div className={`${styles.Gallery} ${className}`} data-testid="Gallery">
			{useArrows ? (
				<FeaturedImageWithArrows
					MAX_IMAGES={MAX_IMAGES}
					imageId={imageId}
					setImageId={setImageId}
				/>
			) : (
				<FeaturedImage imageId={imageId} setLightbox={setLightbox} />
			)}

			{useThumbnails && (
				<GalleryThumbnails
					imageId={imageId}
					setImageId={setImageId}
					count={MAX_IMAGES}
				/>
			)}
		</div>
	);
};

export default Gallery;
