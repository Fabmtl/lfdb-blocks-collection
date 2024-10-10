
import { useBlockProps,InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
	const {attributes} = props;
	const {	hasNavigation, isAutoplay, autoPlayDuration } = attributes
	const params = () => {
		
	}
	const blockProps = useBlockProps.save({
		navigation: `${hasNavigation}`,
		speed: "400",
		autoplay: isAutoplay,
		delay: isAutoplay ? autoPlayDuration : "0",
		reverseDirection: isAutoplay ? "true" : "false"
	});
	return (
<div  {...blockProps} className="list-slider">
				<ul className='list-slider-liste'>
					<li>Hello</li>
				</ul>
				<div className='list-slider-wrapper'>
				<swiper-container {...blockProps} >
			<InnerBlocks.Content/>
		</swiper-container>
				</div>
			</div>
		

	);
}
