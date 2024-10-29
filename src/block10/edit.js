const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, RangeControl, TextControl } from '@wordpress/components';
const { __ } = wp.i18n;
import FontPicker from "font-picker-react";

import colors from '../colors'
    // Font Size 
    function openFont(device) {
        let i, tab;
        tab = document.getElementsByClassName("fontContent");
        for (i = 0; i < tab.length; i++) {
            tab[i].style.display = "none";
        }
        document.getElementById(device).style.display = "block";
    }

const Edit = ({ className, attributes, setAttributes }) => {
    const { product, type, price, features, rating, btn, fontFamily, fontDeskSize, fontTabSize, fontMobSize, color, backgroundColor, borderWidth, borderColor, columnSeparatorWidth, columnSeparatorColor } = attributes; 

    return(
        <Fragment>
            <InspectorControls>  
                <PanelBody 
                    title={ __( 'Table Head' ) }
                    initialOpen={ true }
                >
                    <TextControl
                        label={ __( 'Product Label' ) }
                        value={ product }
                        onChange={ ( product ) => setAttributes( { product } ) }
                    />
                    <TextControl
                        label={ __( 'Type Label' ) }
                        value={ type }
                        onChange={ ( type ) => setAttributes( { type } ) }
                    />
                    <TextControl
                        label={ __( 'Price Label' ) }
                        value={ price }
                        onChange={ ( price ) => setAttributes( { price } ) }
                    />
                    <TextControl
                        label={ __( 'Features Label' ) }
                        value={ features }
                        onChange={ ( features ) => setAttributes( { features } ) }
                    />
                    <TextControl
                        label={ __( 'Rating Label' ) }
                        value={ rating }
                        onChange={ ( rating ) => setAttributes( { rating } ) }
                    />
                    <TextControl
                        label={ __( 'Buttons Label' ) }
                        value={ btn }
                        onChange={ ( btn ) => setAttributes( { btn } ) }
                    />
                    <RangeControl
                        label={ __( 'Border Width' ) }
                        value={ borderWidth }
                        onChange={ ( borderWidth ) => setAttributes( { borderWidth } ) }
                        min={ 1}
                        max={ 50 }
                    />
                    <p>{__("Border Color")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ borderColor }
                        onChange={ ( borderColor ) => setAttributes( { borderColor } ) } 
                    />
                    <p>{__("Color")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ color }
                        onChange={ ( color ) => setAttributes( { color } ) } 
                    />
                    <p>{__("Background Color")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ backgroundColor }
                        onChange={ ( backgroundColor ) => setAttributes( { backgroundColor } ) } 
                    />
                    <RangeControl
                        label={ __( 'Columns Separator Width' ) }
                        value={ columnSeparatorWidth }
                        onChange={ ( columnSeparatorWidth ) => setAttributes( { columnSeparatorWidth } ) }
                        min={ 1}
                        max={ 50 }
                    />
                    <p>{__("Separator Color")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ columnSeparatorColor }
                        onChange={ ( columnSeparatorColor ) => setAttributes( { columnSeparatorColor } ) } 
                    />
                </PanelBody>
                <PanelBody
                    title={ __( "Typograhpy" ) }
                    initialOpen={ false }
                >
                    <div className="font_family_picker mb10">
                        <div className="fonts_title">
                            <p className="m0"><strong>{__("Table Head")}</strong></p>
                        </div>
                        <FontPicker
                            apiKey="AIzaSyDYweksXJLcE0rt0XaYbi1NUO4tNXsGmZ0"
                            activeFontFamily={ fontFamily }
                            limit={ 200 }
                            onChange={ ( nextFont ) => setAttributes({
                                fontFamily: nextFont.family
                            }) }
                        />
                    </div>
                    {/* Font Size */}
                    <div className="cols_settings_wrapper mt20 mb10">
                        <div className="columns_wrapper">
                            <p className="m0"><strong>{__("Font Size")}</strong></p>
                            <div className="devices_list">
                                <span className="dashicons dashicons-desktop" onClick={ ()=> openFont('desktopFont') }></span>
                                <span className="dashicons dashicons-tablet" onClick={ ()=> openFont('tabletFont') }></span>
                                <span className="dashicons dashicons-smartphone" onClick={ ()=> openFont('smartphoneFont') }></span>
                            </div>
                        </div>
                        <div className="col-tab-content">
                            <div id="desktopFont" className="fontContent" style={{ display: 'block' }}>
                                <RangeControl
                                    label={__("Table Head")}
                                    value={ fontDeskSize }
                                    onChange={ ( fontDeskSize ) => setAttributes( { fontDeskSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                            </div>

                            <div id="tabletFont" className="fontContent">
                                <RangeControl
                                    label={__("Table Head")}
                                    value={ fontTabSize }
                                    onChange={ ( fontTabSize ) => setAttributes( { fontTabSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                            </div>

                            <div id="smartphoneFont" className="fontContent">
                                <RangeControl
                                    label={__("Table Head")}
                                    value={ fontMobSize }
                                    onChange={ ( fontMobSize ) => setAttributes( { fontMobSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                            </div>
                        </div>
                    </div>
                    {/* End Font Size */}
                </PanelBody>
            </InspectorControls>
            <div className={`${className}`}>
                <div 
                    className="table-head"
                    style={{
                        color: color,
                        backgroundColor: backgroundColor,
                        border: `${borderWidth}px solid ${borderColor}`,
                        fontSize: `${fontDeskSize}px`,
                        fontFamily: fontFamily,
                    }}
                >
                    <div className="table-head-product" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>{ product }</div>
                    <div className="table-head-type" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>{ type }</div>
                    <div className="table-head-price" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>{ price }</div>
                    <div className="table-head-features" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>{ features }</div>
                    <div className="table-head-rating" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>{ rating }</div>
                    <div className="table-head-btn">{ btn }</div>
                </div>
                <div className="table-body">
                    <InnerBlocks 
                        allowedBlocks={['mstg/product-row']}
                        template={[
                            ['mstg/product-row']
                        ]}
                    />
                </div>
            </div>  
        </Fragment>
    );
}
export default Edit; 
