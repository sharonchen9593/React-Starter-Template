// dont need to import React because already imported in index.html

class App extends React.Component {
	
	render() {
		return (
			<div>
			Hello from index.js
			</div>
	);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))

