
const { __ } = wp.i18n;
const { Fragment } = wp.element;
import { PanelBody, SelectControl, TextControl, ToggleControl, Toolbar, Button, ColorPalette, RangeControl } from '@wordpress/components';
import { RichText, MediaPlaceholder, InspectorControls, BlockControls, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import FontPicker from "font-picker-react";

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

const colors = [ 
    { name: 'red', color: '#ED5A62' }, 
    { name: 'white', color: '#ffffff' }, 
    { name: 'blue', color: '#335AB9' }, 
    { name: 'black', color: '#000000' }, 
    { name: 'gray', color: '#ACACAC' }, 
    { name: 'green', color: '#1B8F7C' }, 
];

// tab font typography
function openFont(device) {
	let i, tab;
	tab = document.getElementsByClassName("fontContent");
	for (i = 0; i < tab.length; i++) {
		tab[i].style.display = "none";
	}
	document.getElementById(device).style.display = "block";
}

const Edit = ({ className, attributes, setAttributes }) => {
    const { enableContainerBoxShadow, enableContainerBorder, containerBorderWidth, containerBorderColor, url, id, alt, showBadge, badgeLabel, badgeColor, badgeBackgroundColor, title, titleTag, titleColor, titleLink, titleTab, titleRel, showSubTitle, subTitle, subTitleTag, subTitleColor, description, descColor, showprimaryBtn, primaryBtnLabel, primaryBtnColor, primaryBtnBackgroundColor, primaryBtnRadius, primaryLink, primaryTab, primaryRel, titleFont, subTitleFont, descFont, tDeskSize, tTabSize, tMobSize, stDeskSize, stTabSize, stMobSize, dDeskSize, dTabSize, dMobSize } = attributes;

    // box shadow
    const boxShadow = enableContainerBoxShadow ? 'enable-box-shadow' : '';

    return(
        <Fragment>
            <InspectorControls>
                <PanelBody
                    title={ __( "Product Container" ) }
                    initialOpen={ true }
                >
                    <ToggleControl
                        label={ __( "Enable Box Shadow" ) }
                        checked={ enableContainerBoxShadow }
                        onChange={ () => setAttributes({ enableContainerBoxShadow: !enableContainerBoxShadow }) }
                    />
                    <ToggleControl
                        label={ __( "Enable Border" ) }
                        checked={ enableContainerBorder }
                        onChange={ () => setAttributes({ enableContainerBorder: !enableContainerBorder }) }
                    />
                    {
                        enableContainerBorder &&
                        <Fragment>
                            <RangeControl
                                label={__("Border Width")}
                                value={ containerBorderWidth }
                                onChange={ ( containerBorderWidth ) => setAttributes( { containerBorderWidth } ) }
                                min={ 0 }
                                max={ 100 }
                            />
                            <p>{__("Border Color")}</p>
                            <ColorPalette 
                                colors={ colors } 
                                value={ containerBorderColor }
                                onChange={ ( containerBorderColor ) => setAttributes( { containerBorderColor } ) } 
                            />
                        </Fragment>
                    }
                </PanelBody>            
                <PanelBody
                    title={ __( "Badge" ) }
                    initialOpen={ false }
                >
                    <ToggleControl
                        label={ __( "Show Badge" ) }
                        checked={ showBadge }
                        onChange={ () => setAttributes({ showBadge: !showBadge }) }
                    />
                    {
                        showBadge &&
                        <Fragment>
                            <TextControl
                                label={ __( "Badge Label" ) }
                                value={ badgeLabel }
                                onChange={ ( badgeLabel ) => setAttributes( { badgeLabel } ) }
                            />
                            <p>{__("Text Color")}</p>
                            <ColorPalette 
                                colors={ colors } 
                                value={ badgeColor }
                                onChange={ ( badgeColor ) => setAttributes( { badgeColor } ) } 
                            />
                            <p>{__("Background Color")}</p>
                            <ColorPalette 
                                colors={ colors } 
                                value={ badgeBackgroundColor }
                                onChange={ ( badgeBackgroundColor ) => setAttributes( { badgeBackgroundColor } ) } 
                            />
                        </Fragment>
                    }
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
                    <TextControl
                        label={ __( "Link" ) }
                        value={ titleLink }
                        onChange={ ( titleLink ) => setAttributes( { titleLink } ) }
                    />
                    <ToggleControl
                        label={ __( "Open in new tab" ) }
                        checked={ titleTab }
                        onChange={ () => setAttributes({ titleTab: !titleTab }) }
                    />
                    {
                        titleTab &&
                        <TextControl
                            label={ __( "Link Rel" ) }
                            value={ titleRel }
                            onChange={ ( titleRel ) => setAttributes( { titleRel } ) }
                        />
                    }
                    <p>{__("Title Color")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ titleColor }
                        onChange={ ( titleColor ) => setAttributes( { titleColor } ) } 
                    />
                </PanelBody>
                <PanelBody
                    title={ __( "Product Sub Title" ) }
                    initialOpen={ false }
                >
                    <ToggleControl
                        label={ __( "Show Sub Title" ) }
                        checked={ showSubTitle }
                        onChange={ () => setAttributes({ showSubTitle: !showSubTitle }) }
                    />
                    {
                        showSubTitle &&
                        <Fragment>
                            <SelectControl
                                label={ __( "Sub Title Tag" ) }
                                value={ subTitleTag }
                                options={ tags }
                                onChange={ ( subTitleTag ) => { setAttributes( { subTitleTag } ) } }
                            />
                            <p>{__("Sub Title Color")}</p>
                            <ColorPalette 
                                colors={ colors } 
                                value={ subTitleColor }
                                onChange={ ( subTitleColor ) => setAttributes( { subTitleColor } ) } 
                            />
                        </Fragment>
                    }
                </PanelBody>
                <PanelBody
                    title={ __( "Product Description" ) }
                    initialOpen={ false }
                >
                    <p>{__("Color")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ descColor }
                        onChange={ ( descColor ) => setAttributes( { descColor } ) } 
                    />
                </PanelBody>
                <PanelBody
                    title={ __( "Product Link Button" ) }
                    initialOpen={ false }
                >
                    <ToggleControl
                        label={ __( "Show Button" ) }
                        checked={ showprimaryBtn }
                        onChange={ () => setAttributes({ showprimaryBtn: !showprimaryBtn }) }
                    />
                    {
                        showprimaryBtn &&
                        <Fragment>
                            <TextControl
                                label={ __( "Button Label" ) }
                                value={ primaryBtnLabel }
                                onChange={ ( primaryBtnLabel ) => setAttributes( { primaryBtnLabel } ) }
                            />
                            <TextControl
                                label={ __( "Link" ) }
                                value={ primaryLink }
                                onChange={ ( primaryLink ) => setAttributes( { primaryLink } ) }
                            />
                            <ToggleControl
                                label={ __( "Open in new tab" ) }
                                checked={ primaryTab }
                                onChange={ () => setAttributes({ primaryTab: !primaryTab }) }
                            />
                            {
                                primaryTab &&
                                <TextControl
                                    label={ __( "Link Rel" ) }
                                    value={ primaryRel }
                                    onChange={ ( primaryRel ) => setAttributes( { primaryRel } ) }
                                />
                            }
                            <p>{__("Text Color")}</p>
                            <ColorPalette 
                                colors={ colors } 
                                value={ primaryBtnColor }
                                onChange={ ( primaryBtnColor ) => setAttributes( { primaryBtnColor } ) } 
                            />
                            <p>{__("Background Color")}</p>
                            <ColorPalette 
                                colors={ colors } 
                                value={ primaryBtnBackgroundColor }
                                onChange={ ( primaryBtnBackgroundColor ) => setAttributes( { primaryBtnBackgroundColor } ) } 
                            />
                            <RangeControl
                                label={__("Border Radius")}
                                value={ primaryBtnRadius }
                                onChange={ ( primaryBtnRadius ) => setAttributes( { primaryBtnRadius } ) }
                                min={ 0 }
                                max={ 100 }
                            />
                        </Fragment>
                    }
                </PanelBody>
                {/* Typography */}
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
                    <div className="font_family_picker mb10">
                        <div className="fonts_title">
                        <p className="m0"><strong>{__("Sub Title")}</strong></p>
                        </div>
                        <FontPicker
                            apiKey="AIzaSyDYweksXJLcE0rt0XaYbi1NUO4tNXsGmZ0"
                            activeFontFamily={ subTitleFont }
                            limit={ 200 }
                            onChange={ ( nextFont ) => setAttributes({
                                subTitleFont: nextFont.family
                            }) }
                        />
                    </div>
                    <div className="font_family_picker mb10">
                        <div className="fonts_title">
                        <p className="m0"><strong>{__("Description")}</strong></p>
                        </div>
                        <FontPicker
                            apiKey="AIzaSyDYweksXJLcE0rt0XaYbi1NUO4tNXsGmZ0"
                            activeFontFamily={ descFont }
                            limit={ 200 }
                            onChange={ ( nextFont ) => setAttributes({
                                descFont: nextFont.family
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
                                    value={ tDeskSize }
                                    onChange={ ( tDeskSize ) => setAttributes( { tDeskSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={__("Product Sub Title")}
                                    value={ stDeskSize }
                                    onChange={ ( stDeskSize ) => setAttributes( { stDeskSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={__("Product Description")}
                                    value={ dDeskSize }
                                    onChange={ ( dDeskSize ) => setAttributes( { dDeskSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                            </div>

                            <div id="tabletFont" className="fontContent">
                                <RangeControl
                                    label={__("Product Title")}
                                    value={ tTabSize }
                                    onChange={ ( tTabSize ) => setAttributes( { tTabSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={__("Product Sub Title")}
                                    value={ stTabSize }
                                    onChange={ ( stTabSize ) => setAttributes( { stTabSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={__("Product Description")}
                                    value={ dTabSize }
                                    onChange={ ( dTabSize ) => setAttributes( { dTabSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                /> 
                            </div>

                            <div id="smartphoneFont" className="fontContent">
                                <RangeControl
                                    label={__("Product Title")}
                                    value={ tMobSize }
                                    onChange={ ( tMobSize ) => setAttributes( { tMobSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={__("Product Sub Title")}
                                    value={ stMobSize }
                                    onChange={ ( stMobSize ) => setAttributes( { stMobSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={__("Product Description")}
                                    value={ dMobSize }
                                    onChange={ ( dMobSize ) => setAttributes( { dMobSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />  
                            </div>
                        </div>
                    </div>
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
                            label={__(
                                "Delete Image"
                            )}
                            onClick={ () => setAttributes({ url:'', id: null, alt: '' }) }
                            icon="trash"
                        />
                    </Toolbar>
                }
            </BlockControls>
            <div className={ `${className} ${boxShadow}` } style={{
                border: enableContainerBorder ? `${containerBorderWidth}px solid ${containerBorderColor}` : 'none',
            }}>
                {
                    showBadge &&
                    <div className="product-badge" style={{ backgroundColor: badgeBackgroundColor, color: badgeColor }}>
                        { badgeLabel }
                        <div className="product-badge-triangle" style={{ borderTopColor: badgeBackgroundColor }}></div>
                    </div>
                }
                <div className="product-container">
                    <div className="product-image">
                        {
                            url ? (
                                <img src={url} alt={alt} />
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
                    <div className="product-content">
                        <div className="product-title">
                            <a rel={ titleTab ? `${titleRel} noopener` : 'nofollow noopener' } href={titleLink} target={titleTab ? "_blank" : "_self"} className="product-title-link">
                                <RichText
                                    tagName={ titleTag }
                                    value={ title }
                                    onChange={ ( title ) => setAttributes( { title } ) }
                                    style={{ color: titleColor, fontFamily: titleFont, fontSize: `${tDeskSize}px` }}
                                    className="product-title-text"
                                />
                            </a>
                        </div>
                        {
                            showSubTitle &&
                            <div className="product-sub-title">
                                <RichText
                                    tagName={ subTitleTag }
                                    value={ subTitle }
                                    onChange={ ( subTitle ) => setAttributes( { subTitle } ) }
                                    style={{ color: subTitleColor, fontFamily: subTitleFont, fontSize: `${stDeskSize}px` }}
                                    className="product-sub-title-text"
                                />
                            </div>
                        }
                        <div className="product-description">
                            <RichText
                                tagName="p"
                                value={ description }
                                onChange={ ( description ) => setAttributes( { description } ) }
                                placeholder={ __( 'Add Product description' ) }
                                style={{ color: descColor, fontFamily: descFont, fontSize: `${dDeskSize}px` }}
                                className="product-description-text"
                            />
                        </div>
                        {
                            showprimaryBtn &&
                            <a rel={ primaryTab ? `${primaryRel} noopener` : 'nofollow noopener' } href={primaryLink} target={primaryTab ? "_blank" : "_self"} className="product-primary-btn" style={{ color: primaryBtnColor, backgroundColor: primaryBtnBackgroundColor, borderRadius: primaryBtnRadius }}>
                                { primaryBtnLabel }
                            </a>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Edit; 
