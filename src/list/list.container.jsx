import { connect } from 'react-redux';
import {
	requestAllPokemon,
	requestUpdateSelectedId,
	requestUpdateFilteredList
} from './list.actions.js';
import List from './list.jsx';

const mapStateToProps = (state) => ({
	list: state.list.rawList,
	filteredList: state.list.filteredList
});

const mapDispatchToProps = (dispatch) => {
	return {
		requestAllPokemon: () => dispatch( requestAllPokemon() ),
		requestUpdateSelectedId: (id) => dispatch( requestUpdateSelectedId(id) ),
		requestUpdateFilteredList: (list) => dispatch( requestUpdateFilteredList(list) ),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);