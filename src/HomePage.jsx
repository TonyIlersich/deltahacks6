class HomePage extends React.Component {
	state = {
		
	}
	
	render() {
		return (
			<div>Hello World</div>
		);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const domContainer = document.querySelector('#react-container');
	console.log('hello');
	ReactDOM.render(React.createElement(HomePage), domContainer);
	console.log('gbye');
}, false);