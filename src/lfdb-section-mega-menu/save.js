import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import stringToSlug from '../../common/string-to-slug';
export default function save(props) {
	const { attributes, setAttributes } = props;
	const { blockNameId } = attributes;

	const blockProps = useBlockProps.save({
		"id" : stringToSlug(blockNameId)
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
