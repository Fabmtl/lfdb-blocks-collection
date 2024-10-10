import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import './style.scss';

import Edit from './edit';
import save from './save';
import Icons from '../../common/icons';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
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

const addToNavigation = ( blockSettings, blockName ) => {
	if ( blockName === 'core/navigation' ) {
		return {
			...blockSettings,
			allowedBlocks: [
				...( blockSettings.allowedBlocks ?? [] ),
				'lfdb/search-block',
			],
		};
	}
	return blockSettings;
};
addFilter(
	'blocks.registerBlockType',
	'lfdb-search-block-mega-menu-add-to-navigation',
	addToNavigation
);
