import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import Icons from '../../common/icons';
import metadata from './block.json';

registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	icon:Icons.playmobile,
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
} );

/**
 * Make the Mega Menu Block available to Navigation blocks.
 *
 * @param {Object} blockSettings The original settings of the block.
 * @param {string} blockName     The name of the block being modified.
 * @return {Object} The modified settings for the Navigation block or the original settings for other blocks.
 */
const addToNavigation = ( blockSettings, blockName ) => {
	if ( blockName === 'core/navigation' ) {
		return {
			...blockSettings,
			allowedBlocks: [
				...( blockSettings.allowedBlocks ?? [] ),
				'lfdb/lfdb-hamburge',
			],
		};
	}
	return blockSettings;
};
addFilter(
	'blocks.registerBlockType',
	'add-menu-burger-to-navigation',
	addToNavigation
);