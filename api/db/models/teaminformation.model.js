
const mongoose = require('mongoose');

const TeamInformationSchema = new mongoose.Schema({
team: {
  type: String,
  required: true
},
minutes_playes: {
  type: Number,
  required: false
},
goals: {
  type: Number,
  required: false
},
assists: {
  type: Number,
  required: false
},
yellow_cards: {
type: Number,
required: false
},
red_card: {
type: Number,
required: false
},
pass: {
type: Number,
required: false
},
aerialsWon: {
type: Number,
required: false
},
man_of_the_match: {
type: Number,
required: false
},
rating: {
type: Number,
required: false
},
shots_per_game: {
  type: Number,
  required: false

},
teamId: {
    type: mongoose.Types.ObjectId,
    required: true
}
});

const TeamInformation = mongoose.model('TeamInformation', TeamInformationSchema);

module.exports = { TeamInformation }