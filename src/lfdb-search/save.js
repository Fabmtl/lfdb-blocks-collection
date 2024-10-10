import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const {
		borderRadius,
		searchPadding,
		borderSize,
		iconeSize,
		iconColor,
		timeInterval,
		couleurFond,
		couleurTexte,
		searchPlaceholderText
	} = attributes;

	const styles = {
		"--lfdb-icon-color": iconColor,
		"--lfdb-search-padding": searchPadding,
		"--lfdb-serch-border-size": borderSize,
		"--lfdb-search-borduer-radius": borderRadius,
		"--lfdb-search-icone-size":iconeSize,
		"--lfdb-search-block-couleur-fond":couleurFond,
		"--lfdb-search-block-couleur-texte":couleurTexte
	};
	const blockProps = useBlockProps.save({
		id: "lfdb-search-block",
		style: styles,
	});

	return (
		<div {...blockProps}>
			<form action="" method="get" id="slide-search">
				<span className="screen-reader-text">Chercher</span>
				<input type="text" id="s" name="s" placeholder={searchPlaceholderText}/>
				<button
					type="button"
					id="slide-search-send"
					className="slide-search-button"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 13.49 13.49"
						className="icon"
					>
						<path d="M9.641 8.484h-.609l-.216-.208a5.021 5.021 0 1 0-.54.54l.208.216v.609l3.856 3.849 1.149-1.149zm-4.628 0a3.471 3.471 0 1 1 3.471-3.471 3.466 3.466 0 0 1-3.471 3.471z"></path>
					</svg>
				</button>
			</form>
		</div>
	);
}
