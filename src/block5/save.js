const { __ } = wp.i18n;
import { InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes, className }) => {
    const { type } = attributes;

    return(
        <div className={ `${className} ${type}` }>
        <InnerBlocks.Content />
    </div>
    );
}
export default Save; 