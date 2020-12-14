const mongoose = require('mongoose');
//schema
const TeamSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: false
  }
});
// Export Bio Model
const Team = mongoose.model('Team', TeamSchema);
module.exports = { Team }