
import { useBlockProps,InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {

	const blockProps = useBlockProps.save();
	return (
		<swiper-slide {...blockProps}>
			<InnerBlocks.Content />    	
		</swiper-slide>
	);
}
