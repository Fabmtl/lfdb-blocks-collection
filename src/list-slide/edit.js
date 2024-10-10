import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

const TEMPLATE = [
	['core/group',{
		align: false
	}]
];

const ALLOWED_BLOCKS = ['core/group'];

export default function Edit(props) {
	// const { clientId, attributes , setAttributes} = props;
	const blockProps = useBlockProps({
		className:"swiper-slide"
	});

	return (
        
            <div className='swiper-slide' {...blockProps}>
		    	<InnerBlocks
		    	    template={TEMPLATE}
		    		orientation="vertical"
					allowedBlocks={ALLOWED_BLOCKS}
		    		// templateLock="all"
		    	/>    	
		    </div>
		
	);
}
