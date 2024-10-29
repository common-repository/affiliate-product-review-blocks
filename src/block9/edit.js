const { Fragment } = wp.element;
import { BlockControls, InnerBlocks, InspectorControls, RichText, MediaPlaceholder, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, RangeControl, SelectControl, ToggleControl, Button, Toolbar, TextControl } from '@wordpress/components';
const { __ } = wp.i18n;
import FontPicker from "font-picker-react";

import colors from '../colors'
const tags = [
    { value: 'h1', label: __( 'Heading 1' ) },
    { value: 'h2', label: __( 'Heading 2' ) },
    { value: 'h3', label: __( 'Heading 3' ) },
    { value: 'h4', label: __( 'Heading 4' ) },
    { value: 'h5', label: __( 'Heading 5' ) },
    { value: 'h6', label: __( 'Heading 6' ) },
    { value: 'p', label: __( 'Paragraph' ) },
    { value: 'span', label: __( 'Span' ) },
    { value: 'div', label: __( 'Div' ) },
];
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
    const { title, titleFont, titleTag, titleDeskSize, titleTabSize, titleMobSize, url, id, alt, type, price, rating, showReview, readMoreBtnLabel, readMoreBtnLink, showAffiliate, affiliateBtnLabel, affiliateBtnLink, readmoreNewTab, affiliateNewTab, color, backgroundColor, borderWidth, borderColor, columnSeparatorWidth, columnSeparatorColor, ratingColor, pbtnColor, pbtnBg, sbtnColor, sbtnBg  } = attributes; 
    // affiliate new tab 
    const affiliateTarget = affiliateNewTab ? '_blank' : '_self';
    const readmoreTarget = readmoreNewTab ? '_blank' : '_self';

    return(
        <Fragment>
            <InspectorControls>  
                <PanelBody 
                    title={ __( 'Container Settings' ) }
                    initialOpen={ true }
                >
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
                    title={ __( "Product Title" ) }
                    initialOpen={ false }
                >
                    <SelectControl
                        label={ __( "Title Tag" ) }
                        value={ titleTag }
                        options={ tags }
                        onChange={ ( titleTag ) => { setAttributes( { titleTag } ) } }
                    />
                </PanelBody>
                <PanelBody 
                    title={ __( 'Product Rating' ) }
                    initialOpen={ false }
                >
                    <RangeControl
                        label={ __( 'Rating' ) }
                        value={ rating }
                        onChange={ ( rating ) => setAttributes( { rating } ) }
                        min={ 1}
                        max={ 5 }
                        step={ 0.1 }
                    />
                    <p>{__("Rating Color")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ ratingColor }
                        onChange={ ( ratingColor ) => setAttributes( { ratingColor } ) } 
                    />
                </PanelBody>      
                <PanelBody
                    title="Buttons Settings"
                    initialOpen={ false }
                >
                    <p><strong>{__("Affiliate Button")}</strong></p>
                    <ToggleControl
                        label={__("Show Affiliate Button") }
                        checked={ showAffiliate }
                        onChange={ () => setAttributes({ showAffiliate: !showAffiliate }) }
                    />
                    {
                        showAffiliate &&
                        <Fragment>
                            <TextControl
                                label={__("Label")}
                                value={ affiliateBtnLabel }
                                onChange={ ( affiliateBtnLabel ) => setAttributes( { affiliateBtnLabel } ) }
                            />
                            <TextControl
                                label={__("Link")}
                                value={ affiliateBtnLink }
                                onChange={ ( affiliateBtnLink ) => setAttributes( { affiliateBtnLink } ) }
                            />
                            <ToggleControl
                                label={__("Open in New Tab") }
                                checked={ affiliateNewTab }
                                onChange={ () => setAttributes({ affiliateNewTab: !affiliateNewTab }) }
                            />
                            <p>{__("Color")}</p>
                            <ColorPalette 
                                colors={ colors } 
                                value={ pbtnColor }
                                onChange={ ( pbtnColor ) => setAttributes( { pbtnColor } ) } 
                            />
                            <p>{__("Background Color")}</p>
                            <ColorPalette 
                                colors={ colors } 
                                value={ pbtnBg }
                                onChange={ ( pbtnBg ) => setAttributes( { pbtnBg } ) } 
                            />
                        </Fragment>
                    }
                    <p><strong>{__("Review Button")}</strong></p>
                    <ToggleControl
                        label={__("Show Review Button") }
                        checked={ showReview }
                        onChange={ () => setAttributes({ showReview: !showReview }) }
                    />
                    {
                        showReview &&
                        <Fragment>
                            <TextControl
                                label={__("Label")}
                                value={ readMoreBtnLabel }
                                onChange={ ( readMoreBtnLabel ) => setAttributes( { readMoreBtnLabel } ) }
                            />
                            <TextControl
                                label={__("Link")}
                                value={ readMoreBtnLink }
                                onChange={ ( readMoreBtnLink ) => setAttributes( { readMoreBtnLink } ) }
                            />
                            <ToggleControl
                                label={__("Open in New Tab") }
                                checked={ readmoreNewTab }
                                onChange={ () => setAttributes({ readmoreNewTab: !readmoreNewTab }) }
                            />
                            <p>{__("Color")}</p>
                            <ColorPalette 
                                colors={ colors } 
                                value={ sbtnColor }
                                onChange={ ( sbtnColor ) => setAttributes( { sbtnColor } ) } 
                            />
                            <p>{__("Background Color")}</p>
                            <ColorPalette 
                                colors={ colors } 
                                value={ sbtnBg }
                                onChange={ ( sbtnBg ) => setAttributes( { sbtnBg } ) } 
                            />
                        </Fragment>
                    }
                </PanelBody>
                <PanelBody
                    title={ __( "Typograhpy" ) }
                    initialOpen={ false }
                >
                    <div className="font_family_picker mb10">
                        <div className="fonts_title">
                            <p className="m0"><strong>{__("Title")}</strong></p>
                        </div>
                        <FontPicker
                            apiKey="AIzaSyDYweksXJLcE0rt0XaYbi1NUO4tNXsGmZ0"
                            activeFontFamily={ titleFont }
                            limit={ 200 }
                            onChange={ ( nextFont ) => setAttributes({
                                titleFont: nextFont.family
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
                                    label={__("Product Title")}
                                    value={ titleDeskSize }
                                    onChange={ ( titleDeskSize ) => setAttributes( { titleDeskSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                            </div>

                            <div id="tabletFont" className="fontContent">
                                <RangeControl
                                    label={__("Product Title")}
                                    value={ titleTabSize }
                                    onChange={ ( titleTabSize ) => setAttributes( { titleTabSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                            </div>

                            <div id="smartphoneFont" className="fontContent">
                                <RangeControl
                                    label={__("Product Title")}
                                    value={ titleMobSize }
                                    onChange={ ( titleMobSize ) => setAttributes( { titleMobSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                            </div>
                        </div>
                    </div>
                    {/* End Font Size */}
                </PanelBody>
            </InspectorControls>
            <BlockControls>
                {
                    url &&
                    <Toolbar>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ media => setAttributes({ 
                                    url:media.url, 
                                    id: media.id,
                                    alt: media.alt
                                })}
                                allowedTypes={["image"]}
                                value={id}
                                render={({ open }) => {
                                    return (
                                        <Button
                                            className="components-icon-button components-toolbar__control"
                                            label={__(
                                                "Edit Image"
                                            )}
                                            onClick={open}
                                            icon="edit"
                                        />
                                    );
                                }}
                            />
                        </MediaUploadCheck>
                        <Button
                            className="components-icon-button components-toolbar__control"
                            label={__(
                                "Delete Image"
                            )}
                            onClick={ () => setAttributes({ url:'', id: null, alt: '' }) }
                            icon="trash"
                        />
                    </Toolbar>
                }
            </BlockControls>
            <div 
                className={`${className} products_row`}
                style={{
                    color: color,
                    backgroundColor: backgroundColor,
                    border: `${borderWidth}px solid ${borderColor}`
                }}
            >
                <div className="product_info_area" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>
                    <div className="product_title">
                        <RichText
                            tagName={ titleTag }
                            className="product_title_tag"
                            value={ title }
                            onChange={ ( title ) => setAttributes( { title } ) }
                            style={{
                                color: color,
                                fontSize: titleDeskSize + 'px', 
                                fontFamily: titleFont
                            }}
                        />
                    </div>
                    <div className="product_pic">
                    {
                        url ? (
                            <img src={url} alt={alt}/>
                        ) : (
                            <MediaPlaceholder
                                icon="format-image"
                                onSelect={ media => setAttributes({ 
                                    url:media.url, 
                                    id: media.id,
                                    alt: media.alt
                                })}
                                onFilesPreUpload={ media => setAttributes({ 
                                    url:media.url, 
                                    id: media.id,
                                    alt: media.alt
                                })}
                                onSelectURL={ url => setAttributes({ url })}
                                allowedTypes={["image"]}
                                labels = { { title: 'Product Image' } }
                            />
                        )
                    }
                    </div>    
                </div>
                <div className="product_type_area" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>
                    <RichText
                        tagName="p"
                        className="product_type"
                        value={ type }
                        onChange={ ( type ) => setAttributes( { type } ) }
                    />
                </div>
                <div className="product_price_area" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>
                    <RichText
                        tagName="p"
                        className="product_price"
                        value={ price }
                        onChange={ ( price ) => setAttributes( { price } ) }
                    />
                </div>
                <div className="product_features_area" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>
                    <InnerBlocks 
                        allowedBlocks={['core/list']}
                        template={[
                            ['core/list']
                        ]}
                        renderAppender={ false }
                    />
                </div>
                <div className="product_rating" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}`, color: `${ratingColor}` }}>
                    { rating }
                    <span className="total_rating">
                    { __( '/5' ) }
                    </span>   
                </div>
                <div className="product_btn_area">
                    {
                        showAffiliate &&
                        <a href={ affiliateBtnLink } target={ affiliateTarget } rel="nofollow noopener" style={{ color: pbtnColor, backgroundColor: pbtnBg }}>{ affiliateBtnLabel }</a>
                    }
                    {
                        showReview &&
                        <a href={ readMoreBtnLink } target={ readmoreTarget } rel="nofollow noopener" style={{ color: sbtnColor, backgroundColor: sbtnBg }}>{ readMoreBtnLabel }</a>
                    }
                </div>
            </div>  
        </Fragment>
    );
}
export default Edit; 
