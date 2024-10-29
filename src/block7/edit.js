
const { __ } = wp.i18n;
const { Fragment } = wp.element;
import { PanelBody, RangeControl, ColorPalette, TextControl } from '@wordpress/components';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import colors from '../colors';

const Edit = ({ className, attributes, setAttributes }) => {
    const { totalScore, totalScoreColor, totalScoreBackground, totalScoreLabel, totalScoreLabelColor } = attributes;

    return(
        <Fragment>
            <InspectorControls>
                <PanelBody
                    title={ __( "Overall Score Settings" ) }
                    initialOpen={ false }
                >
                    <RangeControl
                        label={ __( "Overall Score" ) }
                        value={ totalScore }
                        onChange={ ( totalScore ) => setAttributes( { totalScore } ) }
                        min={ 0 }
                        max={ 100 }
                        help={ __( "Max. Value: 100" ) }
                    />
                    <p>{__("Overall Score Color")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ totalScoreColor }
                        onChange={ ( totalScoreColor ) => setAttributes( { totalScoreColor } ) } 
                    />
                    <p>{__("Overall Score Background")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ totalScoreBackground }
                        onChange={ ( totalScoreBackground ) => setAttributes( { totalScoreBackground } ) } 
                    />
                    <TextControl
                        label={__("Overall Score Label")}
                        value={ totalScoreLabel }
                        onChange={ ( totalScoreLabel ) => setAttributes( { totalScoreLabel } ) }
                    />
                    <p>{__("Overall Score Label Color")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ totalScoreLabelColor }
                        onChange={ ( totalScoreLabelColor ) => setAttributes( { totalScoreLabelColor } ) } 
                    />
                </PanelBody>
            </InspectorControls>
            <div className={ `${className}` }>
                <div className="overall-score-container">
                    <div className="score-value" style={{ color: totalScoreColor, backgroundColor: totalScoreBackground }}>
                        { totalScore }
                    </div>
                    <div className="score-label" style={{ color: totalScoreLabelColor }}>{ totalScoreLabel }</div>
                </div>
                <div className="score-bars-container">
                    <InnerBlocks 
                        allowedBlocks={['mstg/score-bar']}
                        template={[
                            ['mstg/score-bar'],
                        ]}
                    />
                </div>
            </div>
        </Fragment>
    );
}
export default Edit; 
