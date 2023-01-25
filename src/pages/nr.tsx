interface nrProps {
	toggleColorMode: () => void;
}

const nr = (props: nrProps) => {
	return (
		<div>
			<input type="checkbox" onChange={props.toggleColorMode} />
		</div>
	);
};

export default nr;
