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
registerBlockType( 'mstg/score-bar', {
	title: __( 'Score Bar' ),
	description: __( 'Show Product Quality Score' ),
	icon: {
		src: 'menu-alt3',
		foreground: '#a32a46'
	},
	parent: [ 'mstg/product-review' ],
	category: 'mustenberg-blocks',
	keywords: [
		__( 'Score Bar' )
	],
	attributes, 
	edit,
	save,
} );
