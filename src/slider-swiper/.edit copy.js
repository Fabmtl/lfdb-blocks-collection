const { times } = lodash;
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, ToggleControl, TextControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { Fragment, useRef, useEffect, useState, createRef } from '@wordpress/element';

// import Slidersettings from './components/inspector';

// import { register } from 'swiper/element/bundle';
// import 'swiper/css';
import './editor.scss';
import icons from '../../common/icons'
// import { Swiper } from 'swiper/types';

const TEMPLATE = [
	['lfdb/slide-swiper',{}]
];

const ALLOWED_BLOCKS = ['lfdb/slide-swiper'];

export default function Edit(props) {
	
	const {
		clientId,
		attributes,
		setAttributes
	} = props;

	const {	hasNavigation, isAutoplay } = attributes
	
	const screen = useRef(null);
	const swiperRef = useRef(null);

	const [itemList,setItemList] = useState([]);

	const { insertBlock } = useDispatch("core/block-editor");
    const { inner_blocks } = useSelect(select => ({
        inner_blocks: select("core/block-editor").getBlocks(clientId)
    }));

	const blockProps = useBlockProps({
		navigation: false,
		'slides-per-view':1.
	});
	
	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		blockProps,
		{
			template:TEMPLATE,
			allowedBlocks:ALLOWED_BLOCKS,
			templateLock:false
		}
	);
	
	const addSlide = () => {
		const slides = wp.data.select('core/block-editor').getBlocks(clientId);
		const slide = wp.blocks.createBlock('lfdb/slide-swiper',{});
		insertBlock(slide,slides.length,clientId,true)
	}

	// const showSlide = (refName) => {
    //      console.log("refName",refName.target.id)
	// }
	// function resetScreens() {
	// 	inner_blocks.forEach((el) => {
	// 		// const slide = wp.data.select("core/block-editor").getBlocksByClientId(el.clientId)
	// 		wp.data.dispatch("core/block-editor").updateBlockAttributes(el.clientId,{ className: ""})
	// 	})
	// }

	/* function ScreenDots(){
		
		const handleOnCLick = (id) => {}

		return(
			<ul className="screens-list">
			    {
			    	inner_blocks.map((el,index) => {
			    		return(
			    		     <li key={index}>
								<a ref={screen} onClick={(e) => { handleOnCLick(el.clientId); }}>
									{icons.slide}
								</a>
							 </li>
			    	    )
			    	})
			    }
			</ul>
		)
	} */
	
	
	return (
		
		<Fragment>
			<Slidersettings {...props} />
			<InspectorControls>
            <Panel>
                <PanelBody title="Réglages du slider" initialOpen={ true }>
                    {/* <PanelRow>
					<ScreenDots />
                    </PanelRow> */}
                   <PanelRow>
				   <button className="add-slide-button" onClick={addSlide}>Ajouter un slide</button>
				   </PanelRow>
                </PanelBody>
            </Panel>
        </InspectorControls>
			<div {...blockProps} >
		        <swiper-container init="false" {...innerBlocksProps} ref={swiperRef} >
					{children}	 
		        </swiper-container>
			</div>
			
		</Fragment>
	);
}
