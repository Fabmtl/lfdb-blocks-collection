import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import {useEffect} from '@wordpress/element';
// import { useSelect } from '@wordpress/data';

import './editor.scss';

const TEMPLATE = [
	['core/cover',
	{
		align:"full",
		minHeight: 100,
		minHeightUnit: "vh",
	}]
];

const ALLOWED_BLOCKS = ['core/cover'];

export default function Edit(props) {
	// const { clientId, attributes , setAttributes} = props;
	const blockProps = useBlockProps();

	return (
        
            <swiper-slide {...blockProps}>
		    	<InnerBlocks
		    	    template={TEMPLATE}
		    		allowedBlocks={ALLOWED_BLOCKS}
		    		orientation="vertical"
		    		// templateLock="all"
		    	/>    	
		    </swiper-slide>
		
	);
}
