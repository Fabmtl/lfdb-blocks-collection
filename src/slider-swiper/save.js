
import { useBlockProps,InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
	const {attributes} = props;
	const {	hasNavigation, isAutoplay, autoPlayDuration } = attributes
	const params = () => {
		
	}
	const blockProps = useBlockProps.save({
		className:"alignfull",
		navigation: `${hasNavigation}`,
		speed: "400",
		autoplay: isAutoplay,
		delay: isAutoplay ? autoPlayDuration : "0",
		reverseDirection: isAutoplay ? "true" : "false"
	});
	return (

		<swiper-container {...blockProps} >
			<InnerBlocks.Content/>
		</swiper-container>

	);
}
