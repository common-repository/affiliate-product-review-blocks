const { __ } = wp.i18n;
import { RichText, InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes, className }) => {
    const { url, id, alt, showBadge, badgeLabel, badgeColor, badgeBackgroundColor, showprimaryBtn, primaryBtnLabel, primaryBtnColor, primaryBtnBackgroundColor, primaryBtnRadius, primaryLink, primaryTab, primaryRel, showPrice, price, imgMaxWidth } = attributes;

    return(
        <div className={ `${className}` }>
            <div className="product-review-top-area">
                <div className="product-image">
                    {
                        url &&
                        <img src={url} alt={alt} className={ `wp-img-${id}` } style={{ maxWidth: `${imgMaxWidth}%` }} />
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
                            <RichText.Content
                                tagName="h3"
                                className={ `product-price` }
                                value={ price }
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
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
export default Save; 