const { __ } = wp.i18n;
import { RichText, InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes, className }) => {
    const { enableContainerBoxShadow, enableContainerBorder, containerBorderWidth, containerBorderColor, url, id, alt, imgMaxWidth, title, titleTag, titleColor, titleLink, titleTab, titleRel, description, descColor, showPropsCons, showprimaryBtn, primaryBtnLabel, primaryBtnColor, primaryBtnBackgroundColor, primaryBtnRadius, primaryLink, primaryTab, primaryRel, showsecondaryBtn, secondaryBtnLabel, secondaryBtnColor, secondaryBtnBackgroundColor, secondaryBtnRadius, secondaryLink, secondaryTab, secondaryRel, titleFont, descFont, titleDeskSize, titleTabSize, titleMobSize, descDeskSize, descTabSize, descMobSize } = attributes;

    // box shadow
    const boxShadow = enableContainerBoxShadow ? 'enable-box-shadow' : '';

    return(
        <div className={ `${className} ${boxShadow}` } style={{
            border: enableContainerBorder ? `${containerBorderWidth}px solid ${containerBorderColor}` : 'none',
        }} tFont={ titleFont } dFont={ descFont } tdSize={ titleDeskSize } ttSize={ titleTabSize } tmSize={ titleMobSize } ddSize={ descDeskSize } dtSize={ descTabSize } dmSize={ descMobSize } >
            <div className="product-container">
                <div className="product-image">
                    {
                        url &&
                        <img src={url} alt={alt} className={`wp-image-${id}`} style={{ maxWidth: `${imgMaxWidth}%` }} />
                    }
                </div>
                <div className="product-content">
                    <div className="product-title">
                        <a rel={ titleTab ? `${titleRel} noopener` : 'nofollow noopener' } href={titleLink} target={titleTab ? "_blank" : "_self"} className="product-title-link">
                            <RichText.Content
                                tagName={ titleTag }
                                value={ title }
                                style={{ color: titleColor, fontFamily: titleFont }}
                                className="product-title-tag"
                            />
                        </a>
                    </div>
                    <div className="product-description">
                        <RichText.Content
                            tagName="p"
                            value={ description }
                            style={{ color: descColor, fontFamily: descFont }}
                            className="product-description-tag"
                        />
                    </div>
                    {
                        showPropsCons &&
                        <div className="props-cons-area">
                            <InnerBlocks.Content />
                        </div>
                    }
                    {
                        showprimaryBtn &&
                        <a rel={ primaryTab ? `${primaryRel} noopener` : 'nofollow noopener' } href={primaryLink} target={primaryTab ? "_blank" : "_self"} className="product-primary-btn" style={{ color: primaryBtnColor, backgroundColor: primaryBtnBackgroundColor, borderRadius: primaryBtnRadius }}>
                            { primaryBtnLabel }
                        </a>
                    }
                    {
                        showsecondaryBtn &&
                        <a rel={ secondaryTab ? `${secondaryRel} noopener` : 'nofollow noopener' } href={secondaryLink} target={secondaryTab ? "_blank" : "_self"} className="product-primary-btn" style={{ color: secondaryBtnColor, backgroundColor: secondaryBtnBackgroundColor, borderRadius: secondaryBtnRadius }}>
                            { secondaryBtnLabel }
                        </a>
                    }
                </div>
            </div>
        </div>
    );
}
export default Save; 