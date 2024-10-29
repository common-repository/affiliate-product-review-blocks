const { __ } = wp.i18n;
import { RichText } from '@wordpress/block-editor';

const Save = ({ attributes, className }) => {
    const { enableContainerBoxShadow, enableContainerBorder, containerBorderWidth, containerBorderColor, url, id, alt, showBadge, badgeLabel, badgeColor, badgeBackgroundColor, title, titleTag, titleColor, titleLink, titleTab, titleRel, showSubTitle, subTitle, subTitleTag, subTitleColor, description, descColor, showprimaryBtn, primaryBtnLabel, primaryBtnColor, primaryBtnBackgroundColor, primaryBtnRadius, primaryLink, primaryTab, primaryRel, titleFont, subTitleFont, descFont, tDeskSize, tTabSize, tMobSize, stDeskSize, stTabSize, stMobSize, dDeskSize, dTabSize, dMobSize } = attributes;

    // box shadow
    const boxShadow = enableContainerBoxShadow ? 'enable-box-shadow' : '';

    return(
        <div className={ `${className} ${boxShadow}` } style={{
            border: enableContainerBorder ? `${containerBorderWidth}px solid ${containerBorderColor}` : 'none',
        }} tFont={ titleFont } stFont={ subTitleFont} dFont={ descFont } tdSize={ tDeskSize } ttSize={ tTabSize } tmSize={ tMobSize } stdSize={ stDeskSize } sttSize={ stTabSize } stmSize={ stMobSize } ddSize={ dDeskSize } dtSize={ dTabSize } dmSize={ dMobSize } >
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
                        url &&
                        <img src={url} alt={alt} className={ `wp-image-${id}` } />
                    }
                </div>
                <div className="product-content">
                    <div className="product-title">
                        <a rel={ titleTab ? `${titleRel} noopener` : 'nofollow noopener' } href={titleLink} target={titleTab ? "_blank" : "_self"} className="product-title-link">
                            <RichText.Content
                                tagName={ titleTag }
                                value={ title }
                                style={{ color: titleColor, fontFamily: titleFont }}
                                className="product-title-text"
                            />
                        </a>
                    </div>
                    {
                        showSubTitle &&
                        <div className="product-sub-title">
                            <RichText.Content
                                tagName={ subTitleTag }
                                value={ subTitle }
                                style={{ color: subTitleColor, fontFamily: subTitleFont }}
                                className="product-sub-title-text"
                            />
                        </div>
                    }
                    <div className="product-description">
                        <RichText.Content
                            tagName="p"
                            value={ description }
                            style={{ color: descColor, fontFamily: descFont }}
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
    );
}
export default Save; 