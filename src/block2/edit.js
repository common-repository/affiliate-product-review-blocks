const { __ } = wp.i18n;
const { Fragment } = wp.element;
import { BlockControls, InspectorControls, MediaPlaceholder, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl, ToggleControl, Toolbar } from '@wordpress/components';

const Edit = ({ className, attributes, setAttributes }) => {
    const { url, id, alt,  title, name, showReview, reviewBtnLabel, reviewBtnLink, showAffiliate, affiliateBtnLabel, affiliateBtnLink, reviewNewTab, affiliateNewTab } = attributes; 
    // affiliate new tab 
    const affiliateTarget = affiliateNewTab ? '_blank' : '_self';
    const reviewTarget = reviewNewTab ? '_blank' : '_self';
    return(
        <Fragment>
            <InspectorControls>        
                <PanelBody
                    title={__("Buttons Settings")}
                    initialOpen={ true }
                >
                    <p><strong>Review Button</strong></p>
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
                                value={ reviewBtnLabel }
                                onChange={ ( reviewBtnLabel ) => setAttributes( { reviewBtnLabel } ) }
                            />
                            <TextControl
                                label={__("Link")}
                                value={ reviewBtnLink }
                                onChange={ ( reviewBtnLink ) => setAttributes( { reviewBtnLink } ) }
                            />
                            <ToggleControl
                                label={__("Open in New Tab") }
                                checked={ reviewNewTab }
                                onChange={ () => setAttributes({ reviewNewTab: !reviewNewTab }) }
                            />
                        </Fragment>
                    }
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
                                                "Edit Product Image"
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
                                "Delete Product Image"
                            )}
                            onClick={ () => setAttributes({ url:'', id: null, alt: '' }) }
                            icon="trash"
                        />
                    </Toolbar>
                }
            </BlockControls>
            <div className={`${className} mstg_single_product`}>
                <div className="product_title_area">
                    <RichText
                        tagName="h4"
                        className="product_title"
                        value={ title }
                        onChange={ ( title ) => setAttributes( { title } ) }
                        placeholder={__("Product Title")}
                    />
                </div>
                {
                    url ? (
                        <div className="product_photo">
                            <img src={url} alt={alt} className={`wp-image-${id}`} />
                        </div>
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
                <div className="product_name_area">
                    <RichText
                        tagName="h2"
                        className="product_name"
                        value={ name }
                        onChange={ ( name ) => setAttributes( { name } ) }
                        placeholder={__("Product Name")}
                    />
                </div>
                <div className="product_btns">
                    {
                        showReview &&
                        <a className="review-btn" href={ reviewBtnLink } target={ reviewTarget } rel="nofollow noopener">{ reviewBtnLabel }</a>
                    }
                    {
                        showAffiliate &&
                        <a className="affiliate-btn" href={ affiliateBtnLink } target={ affiliateTarget } rel="nofollow noopener">{ affiliateBtnLabel }</a>
                    }
                </div>
            </div>
        </Fragment>
    );
}
export default Edit; 
