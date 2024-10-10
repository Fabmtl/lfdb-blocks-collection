import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, ToggleControl, TextControl } from '@wordpress/components';
import { useState,useEffect } from '@wordpress/element';

const Slidersettings = (props) => {
    const {attributes, setAttributes, swiperRef} = props;
    const {
        hasNavigation,
        isAutoplay,
        autoPlayDuration,
        columnView
    } = attributes;
    
    
    const [navigation,setNavigation] = useState(hasNavigation);
	const [autoplay,setAutoplay] = useState(isAutoplay);
	const [isColumnView,setIsColumnView] = useState(columnView);

    useEffect(()=>{
        setAttributes({hasNavigation:navigation})
    },[navigation])
    
    useEffect(()=>{
     
        setAttributes({isAutoplay:autoplay})     
    },[autoplay])

    useEffect(()=>{
        setAttributes({columnView:!isColumnView})
        if(isColumnView){
            swiperRef.current.style.display ="block";
        } else {
            swiperRef.current.style.display ="flex";
        }
        
        // console.log("swiperRef",swiperRef.current)
    },[isColumnView])
   

    return(
        <InspectorControls>
            <Panel>
                <PanelBody title="Réglages du slider" initialOpen={ true }>
                <PanelRow>
                       <ToggleControl
                           help={ isColumnView ? 'Vue en colonne' : 'Vue en ligne' }
                           label="Vue"
                           checked={ isColumnView }
                           onChange={ () => {
                            setIsColumnView( ( state ) => ! state );
                        } }
                       />
                    </PanelRow>
                    <PanelRow>
                       <ToggleControl
                           help={ navigation ? 'Has navigation.' : 'No navigation.' }
                           label="Set navigation"
                           checked={ navigation }
                           onChange={ () => {
                            setNavigation( ( state ) => ! state );
                        } }
                       />
                    </PanelRow>
                    <PanelRow>
                    <ToggleControl
                           help={ autoplay ? 'Has autoplay.' : 'No autoplay.' }
                           label="Set autoplay"
                           checked={ autoplay }
                           onChange={ () => {
                            setAutoplay( ( state ) => ! state );
                        } }
                       />
                    </PanelRow>
                    { autoplay ? (
                        <PanelRow>
                            <TextControl
                                label="Duration between slides"
                                onChange={ ( duration ) => { setAttributes({autoPlayDuration: duration})} }
                                value={ autoPlayDuration }
                            />
                        </PanelRow>
                        ) : ''
                    }
                </PanelBody>
            </Panel>
        </InspectorControls>
    )
}

export default Slidersettings;