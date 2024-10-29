import { InnerBlocks, RichText } from '@wordpress/block-editor';
const { __ } = wp.i18n;

const Save = ({ attributes, className }) => {
    const { title, titleFont, titleTag, titleDeskSize, titleTabSize, titleMobSize, url, id, alt, type, price, rating, showReview, readMoreBtnLabel, readMoreBtnLink, showAffiliate, affiliateBtnLabel, affiliateBtnLink, readmoreNewTab, affiliateNewTab, color, backgroundColor, borderWidth, borderColor, columnSeparatorWidth, columnSeparatorColor, ratingColor, pbtnColor, pbtnBg, sbtnColor, sbtnBg  } = attributes; 
    // affiliate new tab 
    const affiliateTarget = affiliateNewTab ? '_blank' : '_self';
    const readmoreTarget = readmoreNewTab ? '_blank' : '_self';

    return(
        <div 
            className={`${className} products_row`}
            style={{
                color: color,
                backgroundColor: backgroundColor,
                border: `${borderWidth}px solid ${borderColor}`
            }}
            tFont={ titleFont } tdSize={ titleDeskSize } ttSize={ titleTabSize } tmSize={ titleMobSize }
        >
            <div className="product_info_area" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>
                <div className="product_title">
                    <RichText.Content
                        tagName={ titleTag }
                        className="product_title_tag"
                        value={ title }
                        style={{
                            color: color,
                            fontFamily: titleFont
                        }}
                    />
                </div>
                <div className="product_pic">
                {
                    url &&
                    <img src={url} alt={alt} className={`wp-image-${id}`} />
                }
                </div>    
            </div>
            <div className="product_type_area" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>
                <RichText.Content
                    tagName="p"
                    className="product_type"
                    value={ type }
                />
            </div>
            <div className="product_price_area" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>
                <RichText.Content
                    tagName="p"
                    className="product_price"
                    value={ price }
                />
            </div>
            <div className="product_features_area" style={{ borderRight: `${columnSeparatorWidth}px solid ${columnSeparatorColor}` }}>
                <InnerBlocks.Content />
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
    );
}
export default Save; 