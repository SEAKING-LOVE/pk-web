import { connect } from 'react-redux';
import { requestPokemonProfile } from '../profile.actions.js';
import SpriteCard from './spriteCard.jsx';

const mapStateToProps = (state) => ({
	id: state.profile.overview.id,
	name: state.profile.overview.name,
	types: state.profile.types,
	animated: state.profile.overview.animated,
	artwork: state.profile.overview.artwork,
	sprite: state.profile.overview.sprite,
	footprint: state.profile.overview.footprint,
	cry: state.profile.overview.cry,

});

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SpriteCard);
