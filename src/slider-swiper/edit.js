const { times } = lodash;
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, ToggleControl, TextControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { Fragment, useRef, useEffect, useState, createRef } from '@wordpress/element';

import Slidersettings from './components/inspector';
import './editor.scss';

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


	const { insertBlock } = useDispatch("core/block-editor");
    const { inner_blocks } = useSelect(select => ({
        inner_blocks: select("core/block-editor").getBlocks(clientId)
    }));

	const blockProps = useBlockProps({
		align: "full",
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

	return (
		
		<Fragment>
			<Slidersettings {...props} swiperRef={swiperRef}/>
			<InspectorControls>
            <Panel>
                <PanelBody title="Réglages du slider" initialOpen={ true }>
                   <PanelRow>
				   <button className="add-slide-button" onClick={addSlide}>Ajouter un slide</button>
				   </PanelRow>
                </PanelBody>
            </Panel>
        </InspectorControls>
			<div {...blockProps} >
		        <swiper-container {...innerBlocksProps} ref={swiperRef} >
					{children}	 
		        </swiper-container>
			</div>
			
		</Fragment>
	);
}
