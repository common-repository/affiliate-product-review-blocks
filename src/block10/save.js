import { InnerBlocks } from '@wordpress/block-editor';
const { __ } = wp.i18n;

const Save = ({ attributes, className }) => {
    const { product, type, price, features, rating, btn, fontFamily, fontDeskSize, fontTabSize, fontMobSize, color, backgroundColor, borderWidth, borderColor, columnSeparatorWidth, columnSeparatorColor } = attributes;
    return(
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
                <InnerBlocks.Content />
            </div>
        </div>     
    );
}
export default Save; 