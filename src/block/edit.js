const { __ } = wp.i18n;
const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, RangeControl } from '@wordpress/components';
import FontPicker from "font-picker-react";
import styled from 'styled-components';
import colors from '../colors';

 // Dynamic Styles
let Wrapper = styled.div`
    .product_title {
        color: ${ props => props.tcolor } !important;
        font-family: ${ props => props.tfont };
        font-size: ${ props => props.tfontSize }px !important;
    }
    .product_name {
        color: ${ props => props.ncolor } !important;
        font-family: ${ props => props.nfont };
        font-size: ${ props => props.nfontSize }px !important;
    }
    .product_btns a.review-btn {
        color: ${ props => props.rbtnColor } !important;
        background-color: ${ props => props.rbtnBg } !important;
    }
    .product_btns a.affiliate-btn {
        color: ${ props => props.abtnColor } !important;
        background-color: ${ props => props.abtnBg } !important;
    }
`;      
    function activeTab(e){
        let container = document.getElementById("settings_tabs_id");
        let tabs = container.getElementsByClassName("setting_tab");

        for (let i = 0; i < tabs.length; i++) {
            let current = document.getElementsByClassName("setting_active");
            current[0].className = current[0].className.replace(" setting_active", "");
            e.target.className += " setting_active";
        }
    }

    // Main Settings Tab
    function openSetting(area) {
        let i, tab;
        tab = document.getElementsByClassName("setting_content");
        for (i = 0; i < tab.length; i++) {
            tab[i].style.display = "none";
        }
        document.getElementById(area).style.display = "block";
    }

    // Responsive Columns Function
    function openCol(device) {
        let i, tab;
        tab = document.getElementsByClassName("colContent");
        for (i = 0; i < tab.length; i++) {
            tab[i].style.display = "none";
        }
        document.getElementById(device).style.display = "block";
    }
    // Font Size 
    function openFont(device) {
        let i, tab;
        tab = document.getElementsByClassName("fontContent");
        for (i = 0; i < tab.length; i++) {
            tab[i].style.display = "none";
        }
        document.getElementById(device).style.display = "block";
    }
    
const Edit = ({ className, attributes, setAttributes }) => {
    const { dcols, tcols, mcols, nameColor, titleColor, nameFont, titleFont, nameDeskSize, nameTabSize, nameMobSize, titleDeskSize, titleTabSize, titleMobSize, reviewBtnColor, reviewBtnBg, affiliateBtnColor, affiliateBtnBg } = attributes;
    return(
        <Fragment>
            <InspectorControls>
                <div className="settings_tabs" id="settings_tabs_id">
                    <button className="setting_tab setting_active" onClick={ ()=> { activeTab(event); openSetting('setting')} }>{ __("Settings") }</button>
                    <button className="setting_tab" onClick={ ()=> {  activeTab(event); openSetting('typography') } }>{__("Typography")}</button>
                </div>
                {/* General Settings */}
                <div id="setting" className="setting_content" style={{ display: 'block' }}>

                    {/* Columns Settings */}
                    <div className="cols_settings_wrapper p10">
                        <div className="columns_wrapper">
                            <p className="m0"><strong>{__("Number of Columns")}</strong></p>
                            <div className="devices_list">
                                <span className="dashicons dashicons-desktop" onClick={ ()=> openCol('desktop') } ></span>
                                <span className="dashicons dashicons-tablet" onClick={ ()=> openCol('tablet') }></span>
                                <span className="dashicons dashicons-smartphone" onClick={ ()=> openCol('smartphone') }></span>
                            </div>
                        </div>
                        <div className="col-tab-content">
                            <div id="desktop" className="colContent" style={{ display: 'block' }}>
                                <RangeControl
                                    label="Columns on Desktop"
                                    value={ dcols }
                                    onChange={ ( dcols ) => setAttributes( { dcols } ) }
                                    min={ 1 }
                                    max={ 5 }
                                />
                            </div>

                            <div id="tablet" className="colContent">
                                <RangeControl
                                    label="Columns on Tablet"
                                    value={ tcols }
                                    onChange={ ( tcols ) => setAttributes( { tcols } ) }
                                    min={ 1 }
                                    max={ 5 }
                                /> 
                            </div>

                            <div id="smartphone" className="colContent">
                                <RangeControl
                                    label="Columns on Mobile"
                                    value={ mcols }
                                    onChange={ ( mcols ) => setAttributes( { mcols } ) }
                                    min={ 1 }
                                    max={ 5 }
                                /> 
                            </div>
                        </div>
                    </div>
                    {/* End Columns Settings */}
                    {/* Colors Settings */}
                    <PanelBody
                        title={__('Colors Settings')}
                        initialOpen= { false }
                    >
                        <p>{__("Product Title")}</p>
                        <ColorPalette 
                            colors={ colors } 
                            value={ titleColor }
                            onChange={ ( titleColor ) => setAttributes( { titleColor } ) } 
                        />
                        <p>{__("Product Name")}</p>
                        <ColorPalette 
                            colors={ colors } 
                            value={ nameColor }
                            onChange={ ( nameColor ) => setAttributes( { nameColor } ) } 
                        />

                        <p><strong>{__("Review Button")}</strong></p>
                        <p>{__("Color")}</p>
                        <ColorPalette 
                            colors={ colors } 
                            value={ reviewBtnColor }
                            onChange={ ( reviewBtnColor ) => setAttributes( { reviewBtnColor } ) } 
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette 
                            colors={ colors } 
                            value={ reviewBtnBg }
                            onChange={ ( reviewBtnBg ) => setAttributes( { reviewBtnBg } ) } 
                        />

                        <p><strong>{__("Affiliate Button")}</strong></p>
                        <p>{__("Color")}</p>
                        <ColorPalette 
                            colors={ colors } 
                            value={ affiliateBtnColor }
                            onChange={ ( affiliateBtnColor ) => setAttributes( { affiliateBtnColor } ) } 
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette 
                            colors={ colors } 
                            value={ affiliateBtnBg }
                            onChange={ ( affiliateBtnBg ) => setAttributes( { affiliateBtnBg } ) } 
                        />
                    </PanelBody>
                    {/* Colors Setting */}
                </div>
                {/* Typography Settings */}
                <Wrapper id="typography" className="setting_content p10" >
                    <div className="font_family_picker mb10">
                        <div className="fonts_title">
                            <p className="m0"><strong>{__("Title")}</strong></p>
                        </div>
                        <FontPicker
                            apiKey="AIzaSyDYweksXJLcE0rt0XaYbi1NUO4tNXsGmZ0"
                            activeFontFamily={ titleFont }
                            limit={ 200 }
                            onChange={ ( nextFont ) => setAttributes({
                                titleFont: nextFont.family
                            }) }
                        />
                    </div>
                    <div className="font_family_picker mb10">
                        <div className="fonts_title">
                        <p className="m0"><strong>{__("Name")}</strong></p>
                        </div>
                        <FontPicker
                            apiKey="AIzaSyDYweksXJLcE0rt0XaYbi1NUO4tNXsGmZ0"
                            activeFontFamily={ nameFont }
                            limit={ 200 }
                            onChange={ ( nextFont ) => setAttributes({
                                nameFont: nextFont.family
                            }) }
                        />
                    </div>
                    {/* Fonts Size Settings */}
                    <div className="cols_settings_wrapper mt20 mb10">
                        <div className="columns_wrapper">
                            <p className="m0"><strong>{__("Font Size")}</strong></p>
                            <div className="devices_list">
                                <span className="dashicons dashicons-desktop" onClick={ ()=> openFont('desktopFont') }></span>
                                <span className="dashicons dashicons-tablet" onClick={ ()=> openFont('tabletFont') }></span>
                                <span className="dashicons dashicons-smartphone" onClick={ ()=> openFont('smartphoneFont') }></span>
                            </div>
                        </div>
                        <div className="col-tab-content">
                            <div id="desktopFont" className="fontContent" style={{ display: 'block' }}>
                                <RangeControl
                                    label={__("Product Title")}
                                    value={ titleDeskSize }
                                    onChange={ ( titleDeskSize ) => setAttributes( { titleDeskSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={__("Product Name")}
                                    value={ nameDeskSize }
                                    onChange={ ( nameDeskSize ) => setAttributes( { nameDeskSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                            </div>

                            <div id="tabletFont" className="fontContent">
                                <RangeControl
                                    label={__("Product Title")}
                                    value={ titleTabSize }
                                    onChange={ ( titleTabSize ) => setAttributes( { titleTabSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={__("Product Name")}
                                    value={ nameTabSize }
                                    onChange={ ( nameTabSize ) => setAttributes( { nameTabSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                /> 
                            </div>

                            <div id="smartphoneFont" className="fontContent">
                                <RangeControl
                                    label={__("Product Title")}
                                    value={ titleMobSize }
                                    onChange={ ( titleMobSize ) => setAttributes( { titleMobSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label={__("Product Name")}
                                    value={ nameMobSize }
                                    onChange={ ( nameMobSize ) => setAttributes( { nameMobSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                /> 
                            </div>
                        </div>
                    </div>
                    {/* End Columns Settings */}
                </Wrapper>
                {/* End TYPOGRAPHY TAB */}
            </InspectorControls>
            <Wrapper className={`${className} mstg_products_grid dcols-${dcols} tcols-${tcols} mcols-${mcols}`} ncolor={nameColor} nfont={nameFont} nfontSize={nameDeskSize} tcolor={titleColor} tfont={titleFont} tfontSize={titleDeskSize} rbtnColor={reviewBtnColor} rbtnBg={reviewBtnBg} abtnColor={affiliateBtnColor} abtnBg={affiliateBtnBg}>
                <InnerBlocks 
                    allowedBlocks={ ['mstg/product-item'] }
                    template={[
                        ['mstg/product-item'],
                    ]}
                />
            </Wrapper>
        </Fragment>
    );
}
export default Edit; 
