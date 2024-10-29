const { __ } = wp.i18n;
const { Fragment } = wp.element;
import { PanelBody, RangeControl, ColorPalette } from '@wordpress/components';
import { InnerBlocks, RichText, InspectorControls } from '@wordpress/block-editor';
import colors from '../colors';

const Edit = ({ className, attributes, setAttributes }) => {
    const { title, scoreValue, scoreBarColor, barHeight, marginTop, marginBottom } = attributes;

    return(
        <Fragment>
            <InspectorControls>
                <PanelBody
                    title={ __( "Score Bar Settings" ) }
                    initialOpen={ true }
                >
                    <RangeControl
                        label={ __( "Score Value" ) }
                        value={ scoreValue }
                        onChange={ ( scoreValue ) => setAttributes( { scoreValue } ) }
                        min={ 1 }
                        max={ 10 }
                        help={ __( "Max. Value: 10" ) }
                    />
                    <RangeControl
                        label={ __( "Bar Height" ) }
                        value={ barHeight }
                        onChange={ ( barHeight ) => setAttributes( { barHeight } ) }
                        min={ 1 }
                        max={ 100 }
                        help={ __( "Value in Pixel (px)" ) }
                    />
                    <p>{__("Bar Color")}</p>
                    <ColorPalette 
                        colors={ colors } 
                        value={ scoreBarColor }
                        onChange={ ( scoreBarColor ) => setAttributes( { scoreBarColor } ) } 
                    />
                </PanelBody>
                <PanelBody
                    title={ __( "Spacing" ) }
                    initialOpen={ false }
                >
                    <RangeControl
                        label={ __( "Margin Top" ) }
                        value={ marginTop }
                        onChange={ ( marginTop ) => setAttributes( { marginTop } ) }
                        min={ -100 }
                        max={ 100 }
                    />
                    <RangeControl
                        label={ __( "Margin Bottom" ) }
                        value={ marginBottom }
                        onChange={ ( marginBottom ) => setAttributes( { marginBottom } ) }
                        min={ -100 }
                        max={ 100 }
                    />
                </PanelBody>
            </InspectorControls>
            <div className={ `${className}` } style={{ marginTop: marginTop, marginBottom: marginBottom }}>
                <div className="score-bar-title">
                    <RichText
                        tagName="p"
                        className={ `score-bar-title-text` }
                        value={ title }
                        onChange={ ( title ) => setAttributes( { title } ) }
                        placeholder={ __( "Score Bar Title" ) }
                    />
                    <p><b>{ scoreValue }</b></p>
                </div>
                <div className="score-bar-container" style={{ height: barHeight }}>
                    <div className="score-bar-value" style={ { width: `${scoreValue*10}%`, backgroundColor: scoreBarColor, height: barHeight } }></div>
                </div>
            </div>
        </Fragment>
    );
}
export default Edit; 
