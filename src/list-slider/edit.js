const { times } = lodash;
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, ToggleControl, TextControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { Fragment, useRef, useEffect, useState, createRef } from '@wordpress/element';

// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import Slidersettings from './components/inspector';

// register();

import './editor.scss';


export default function Edit(props) {
	
	const {
		clientId,
		attributes,
		setAttributes
	} = props;

	const {	hasNavigation, isAutoplay } = attributes
	var swiper;
	const screen = useRef(null);
	// const swiperRef = useRef(null);
	const swiperRef = useRef(null);
	const swiperPag = useRef(null);
	const listEl = useRef(null);

	
	useEffect( () => {
		swiper = new Swiper( swiperRef.current, {
			// Optional parameters
			navigation: {
				enabled: true
			},
			pagination:{
				el: swiperPag.current
			}
		  });
		
	});

	// useEffect( () => {
		listEl.current.addEventListener('mouseenter', function(e){
			e.target.style = 'bakground: red'
		});
		listEl.current.addEventListener('mouseleave', function(e){
			e.target.style = 'bakground: transparent'
		});
		listEl.current.addEventListener('click', function(e){
			const goToSLide = e.target.getAttribute('data-slide')
			console.log(e.target);
			console.log(parseInt(goToSLide) + 1);
			console.log(swiper);
			swiper.slideTo( parseInt(goToSLide) + 1 );
		});
	// },[])

	const { insertBlock } = useDispatch("core/block-editor");

    const { inner_blocks } = useSelect(select => ({
        inner_blocks: select("core/block-editor").getBlocks(clientId)
    }));

	const blockProps = useBlockProps({
		className:"list-slider"
	});
	
	const { children, ...innerBlocksProps } = useInnerBlocksProps(

		{
			// "init":false
			className:"swiper",
			'navigation': true,
		    'slides-per-view':1
		},
		{
			template:TEMPLATE,
			allowedBlocks:ALLOWED_BLOCKS,
			templateLock:false
		}
	);
	
	const addSlide = () => {
		const slides = wp.data.select('core/block-editor').getBlocks(clientId);
		const slide = wp.blocks.createBlock('lfdb/list-slide',{});
		insertBlock(slide, slides.length, clientId, true);

	}


	return (
		
		<Fragment>
			{/* <Slidersettings {...props} swiperRef={swiperRef}/> */}
			<InspectorControls>
            <Panel>
                <PanelBody title="Réglages du slider" initialOpen={ true }>
                   <PanelRow>
				   <button className="add-slide-button" onClick={addSlide}>Ajouter un slide</button>
				   </PanelRow>
                </PanelBody>
            </Panel>
        </InspectorControls>

			<div  {...blockProps} >
				<ul className='list-slider-liste' ref={listEl}>
					<li data-slide="1" className="list-element" onClick={() => goToSLide('...')}>Hello</li>
					<li data-slide="2" className="list-element" onClick={goToSLide}>Hello</li>
					<li data-slide="3" className="list-element" onClick={goToSLide}>Hello</li>
				</ul>
				<div className='list-slider-wrapper'>
		            <div className='swiper'
				        {...innerBlocksProps}
				        ref={swiperRef}
				    >
				    	<div className='swiper-wrapper'>
						    {children}
						</div> 
						<div className="swiper-pagination" ref={swiperPag}></div>
		            </div>
				</div>
			</div>
			
		</Fragment>
	);
}
