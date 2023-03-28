import React, { useState } from "react";


//create your first component
let initialValue = [];
const Home = () => {
	const [text, setText] = useState(initialValue)
	const [textList, setTextList] = useState('')
	
	const handleTextList = (event) => {
		setTextList(event.target.value)
	}
	const handleNewText = (event) => {
		if (event.key === 'Enter') {
			const newText = {
				object: textList,
			}
			const newTexts = [...text, newText];
			setText(newTexts)
			setTextList("")
		};
	};
	const hadledRemove = (index) => {
		setText(text.filter((_, i) => index !== i))

	};
	return (
		<div className="list">
			<h1 className="title display-4"><i>TODOS</i></h1>
			<input type="text" className="input" placeholder="What needs to be done?" value={textList} onChange={(event) => handleTextList(event)} onKeyDown={(event) => handleNewText(event)} />
			<ul>
				{text.map((line, index) => {
					return (
							<h4 className="line-task d-flex justify-content-between" key={`${line.object}-${index}`}>
								{line.object}
								<button className="btn btn-danger d-flex justify-content-end me-3" onClick={(g) => hadledRemove(index)}><i className="fas fa-times align-self-center "></i></button>
							</h4>
					);
				})}
			</ul>
			<div className="marker">
				<hr />
				<p className="text-item"> <i>{text.length} Items Left</i></p>
			</div>
		</div>

	);
};

export default Home;
