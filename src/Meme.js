import { useState } from "react";
function Meme({ meme }) {
	const [input, setInput] = useState("");
	const [input2, setInput2] = useState("");
	if (!meme) {
		return <div>Loading ...</div>;
	}

	function handleInput({ target }) {
		setInput(target.value);
	}
	function handleInput2({ target }) {
		setInput2(target.value);
	}

	return (
		<>
			<h3>{meme.name}</h3>
			<div className="imageWrapper">
				<div
                    className="memePic"
					style={{
						backgroundImage: `url(${meme.url})`,
						width: `${meme.width}px`,
						height: `${meme.height}px`,
					}}
				>
                    <div className="memeText">{input}</div>
                    <div className="memeText">{input2}</div>
                </div>
			</div>
			<input value={input} onChange={handleInput} />
			<input value={input2} onChange={handleInput2} />
		</>
	);
}

export default Meme;
