import { InnerBlocks } from '@wordpress/block-editor';

const Save = ({ className, attributes }) => {
    const { dcols, tcols, mcols, nameColor, titleColor, nameFont, titleFont, nameDeskSize, nameTabSize, nameMobSize, titleDeskSize, titleTabSize, titleMobSize, reviewBtnBg, reviewBtnColor, affiliateBtnColor, affiliateBtnBg } = attributes; 
    return(
        <div className={`${className} mstg_products_grid dcols-${dcols} tcols-${tcols} mcols-${mcols}`} data-mnc={nameColor} data-mtc={titleColor} data-mnf={nameFont} data-mtf={ titleFont} data-mndf={nameDeskSize} data-mntf={nameTabSize} data-mnmf={nameMobSize} data-mtdf={titleDeskSize} data-mttf={titleTabSize} data-mtmf={titleMobSize} rbtnColor={reviewBtnColor} rbtnBg={reviewBtnBg} abtnColor={affiliateBtnColor} abtnBg={affiliateBtnBg}>
            <InnerBlocks.Content />
        </div>
    );
}
export default Save; 

