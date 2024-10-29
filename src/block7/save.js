const { __ } = wp.i18n;
import { InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes, className }) => {
    const { totalScore, totalScoreColor, totalScoreBackground, totalScoreLabel, totalScoreLabelColor } = attributes;
    return(
        <div className={ `${className}` }>
            <div className="overall-score-container">
                <div className="score-value" style={{ color: totalScoreColor, backgroundColor: totalScoreBackground }}>
                    { totalScore }
                </div>
                <div className="score-label" style={{ color: totalScoreLabelColor }}>{ totalScoreLabel }</div>
            </div>
            <div className="score-bars-container">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
export default Save; 