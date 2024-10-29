
const { __ } = wp.i18n;
const { Fragment } = wp.element;
import { PanelBody, TextControl, ToggleControl, Toolbar, Button, ColorPalette, RangeControl } from '@wordpress/components';
import { RichText, InnerBlocks, MediaPlaceholder, InspectorControls, BlockControls, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';

import colors from '../colors';

const Edit = ({ className, attributes, setAttributes }) => {
    const { url, id, alt, showBadge, badgeLabel, badgeColor, badgeBackgroundColor, showprimaryBtn, primaryBtnLabel, primaryBtnColor, primaryBtnBackgroundColor, primaryBtnRadius, primaryLink, primaryTab, primaryRel, showPrice, price, imgMaxWidth } = attributes;

    return(
        <Fragment>
            <InspectorControls> 
                <PanelBody
                    title={ __( "Product Image" ) }
                    initialOpen={ true }
                >
                    <RangeControl
                        label={ __( "Maximum Width" ) }
                        value={ imgMaxWidth }
                        onChange={ ( imgMaxWidth ) => setAttributes( { imgMaxWidth } ) }
                        min={ 1 }
                        max={ 100 }
                        help={ __( "Unit in Percentage (%)" ) }
                    />
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
                    title={ __( "Product Price" ) }
                    initialOpen={ false }
                >
                    <ToggleControl
                        label={ __( "Show Price" ) }
                        checked={ showPrice }
                        onChange={ () => setAttributes({ showPrice: !showPrice }) }
                    />
                </PanelBody>
                <PanelBody
                    title={ __( "Action Button" ) }
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
            <div className={ `${className}` }>
                <div className="product-review-top-area">
                    <div className="product-image">
                        {
                            url ? (
                                <img src={url} alt={alt} style={{ maxWidth: `${imgMaxWidth}%` }} />
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
                    <div className="review-top-content">
                        {
                            showBadge &&
                            <div className="product-badge" style={{ backgroundColor: badgeBackgroundColor, color: badgeColor }}>
                                { badgeLabel }
                            </div>
                        }
                        {
                            showPrice &&
                            <div className="price">
                                <RichText
                                    tagName="h3"
                                    className={ `product-price` }
                                    value={ price }
                                    onChange={ ( price ) => setAttributes( { price } ) }
                                    placeholder={ __( 'Product Price' ) }
                                />
                            </div>
                        }
                        {
                            showprimaryBtn &&
                            <a rel={ primaryTab ? `${primaryRel} noopener` : 'nofollow noopener' } href={primaryLink} target={primaryTab ? "_blank" : "_self"} className="product-primary-btn" style={{ color: primaryBtnColor, backgroundColor: primaryBtnBackgroundColor, borderRadius: primaryBtnRadius }}>
                                { primaryBtnLabel }
                            </a>
                        }
                    </div>
                </div>
                <div className="products-review-content">
                    <InnerBlocks 
                        allowedBlocks={['mstg/product-score', 'mstg/props-cons', 'core/heading']}
                        template={[
                            ['mstg/product-score'],
                            ['core/heading', { placeholder: 'Props & Cons title......' }],
                            ['mstg/props-cons']
                        ]}
                    />
                </div>
            </div>
        </Fragment>
    );
}
export default Edit; 
