// require the "model"
const Entry = require('../models/entry.js')

function index(req, res){
  Entry.find({}, function(err, entrys) {
    res.render('entrys/index', {
      entrys,
      time: req.time
    });
  })
}

function newEntry(req, res) {
  res.render('entrys/new')
}

function deleteEntry(req, res) {
  Entry.findByIdAndDelete(req.params.id, function(err, entry) {
    res.redirect('/entrys')
  });
}

function update(req, res) {
  Entry.findByIdAndUpdate(req.params.id, req.body, function(err, entry) {
    res.redirect('/entrys')
  });
}

function create(req, res) {
  console.log(req.body)

  req.body.done = false
  
  Entry.create(req.body, function(err, todo) {
    res.redirect("/entrys")
  });
}

function edit(req, res) {
  Entry.findById(req.params.id, function(err, entry) {
    res.render('entrys/edit', { entry });
  });
}

function show(req, res){
  Entry.findById(req.params.id, function(err, entry) {
    res.render('entrys/show', { entry });
  });
}

module.exports = {
  index,
  new: newEntry,
  delete: deleteEntry,
  update,
  create,
  edit,
  show,
}