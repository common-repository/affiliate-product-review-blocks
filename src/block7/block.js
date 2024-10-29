/**
 * Block Name: Score Bar Block
*/

//  Import CSS.
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import save from './save';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/**
 * Register: Product Score Bar.
 */
registerBlockType( 'mstg/product-score', {
	title: __( 'Product Score' ),
	description: __( 'Show the Overall Score Value' ),
	icon: {
		src: 'chart-line',
		foreground: '#a32a46'
	},
	parent: [ 'mstg/product-reivew' ],
	category: 'mustenberg-blocks',
	keywords: [
		__( 'Score Value' )
	],
	attributes, 
	edit,
	save,
} );
