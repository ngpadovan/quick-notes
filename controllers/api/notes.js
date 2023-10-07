const Note = require('../../models/note');

module.exports = {
    create
}

async function create(req,res) {
    const note = await Note.create(req.body);
    res.json(note);
  }