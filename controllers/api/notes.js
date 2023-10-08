const Note = require('../../models/note');

module.exports = {
    create,
    index
}

async function create(req,res) {
    const note = await Note.create(req.body);
    res.json(note);
  }

  async function index(req,res) {
    const notes = await Note.find({user: req.user._id});
    res.json(notes);
  }