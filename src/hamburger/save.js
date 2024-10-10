import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes, setAttributes } = props;
	const {
		paddindX,
		paddindY,
		layerWidth,
		layerHeight,
		layerSpacing,
		opacity,
		hasBorder,
		borderSize,
		borderColor,
		hasBorderRadius,
		borderRadiusSize,
		burgerMenuColor,
		fondCouleur
	} = attributes;

	const styles = {
		"--icone-burger-color": burgerMenuColor,
		"--paddingX": paddindX,
		"--paddingY": paddindY,
		"--icone-burger-border-size": borderSize,
		"--icone-layerWidth": layerWidth,
		"--icone-layerHeight": layerHeight,
		"--icone-layerSpacing": layerSpacing,
		"--icone-layerSpacing": layerSpacing,
		"--icone-hasBorderRadius": hasBorderRadius,
		"--icone-borderRadiusSize": borderRadiusSize,
		"--icone-borderSize": borderSize,
		"--icone-couleur-de-fond": fondCouleur
	};
	const blockProps = useBlockProps.save({
		className: "hamburger hamburger--slider open-close-menu-mobile",
		style: styles,
	});
	return (
		<button {...blockProps} type="button">
			<span className="hamburger-box">
				<span className="hamburger-inner"></span>
			</span>
		</button>
	);
}
