// Dependencies
const express = require('express')
const fbqueries = require('../firebase/fbqueries')

// Routers

var router = express.Router()

router.get('/event', function (req, res) {

  const promise = new Promise((resolve, reject) => {
    try {
      const data = fbqueries.getEvents()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });

  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))

})

router.get('/event/:id', function (req, res) {

  
  
  const promise = new Promise((resolve, reject) => {
    try {
      if (!req.params.id) throw 'invalid id'
      console.log('id', req.params.id)
      const data = fbqueries.getEvent(req.params.id)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });

  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))

})

router.get('/grower', function (req, res) {
  
  const promise = new Promise((resolve, reject) => {
    try {
      const data = fbqueries.getGrowers()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });

  promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))

})

router.get('/menu-items', function (req, res) {

  const promise = new Promise((resolve, reject) => {
    try {
      const data = fbqueries.getMenuItems()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  });

promise
    .then(value => res.status(200).json(value))
    .catch(error => res.status(400).json(error))
})

router.get('/menu-cat', function (req, res) {
  
    const promise = new Promise((resolve, reject) => {
      try {
        const data = fbqueries.getMenuCat()
        resolve(data)
      } catch (error) {
        reject(error)
      }
    });
  
  promise
      .then(value => res.status(200).json(value))
      .catch(error => res.status(400).json(error))
  })

  router.get('/grower', function (req, res) {
    
    const promise = new Promise((resolve, reject) => {
      try {
        const data = fbqueries.getGrowers()
        resolve(data)
      } catch (error) {
        reject(error)
      }
    });
  
    promise
      .then(value => res.status(200).json(value))
      .catch(error => res.status(400).json(error))
  
  })

module.exports = router