import { RichText } from '@wordpress/block-editor';
const { __ } = wp.i18n;

const Save = ({ attributes, className }) => {
    const { url, id, alt,  title, name, showReview, reviewBtnLabel, reviewBtnLink, showAffiliate, affiliateBtnLabel, affiliateBtnLink, reviewNewTab, affiliateNewTab } = attributes;
    // affiliate new tab 
    const affiliateTarget = affiliateNewTab ? '_blank' : '_self';
    const reviewTarget = reviewNewTab ? '_blank' : '_self'; 
    return(
        <div className={`${className} mstg_single_product`}>
            <div className="product_title_area">
                <RichText.Content
                    tagName="h4"
                    className="product_title"
                    value={ title }
                />
            </div>
            {
                url &&
                    <div className="product_photo">
                        <img src={url} alt={alt} className={`wp-image-${id}`} />
                    </div>
            }
            <div className="product_name_area">
                <RichText.Content
                    tagName="h2"
                    className="product_name"
                    value={ name }
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
    );
}
export default Save; 