import '../assets/styles/footer.styl'

export default {
	data() {
		return {
			author: 'Bookbuke'
		}
	},
	render() {
		return (
			<div id="footer">
				<span>Author: {this.author}</span>
			</div>
		)
	}
}