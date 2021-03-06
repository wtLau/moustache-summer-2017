// Dependencies
const firebase = require('firebase');
const config = require('./firebase.json');

firebase.initializeApp(config);
const ref = firebase.database().ref();
const menuItemsRef = ref.child('MenuItems');
const menuQuery = menuItemsRef.orderByChild('featured');

// Helpers
exports.getEvents = () => {
    return ref.child('Events').once('value')
        .then((snapshot) => {
            const data = snapshot.val()
            return data
        })
}

exports.getEvent = (id) => {
    return ref.child('Events').child(id).once('value')
        .then((snapshot) => {
            let data = snapshot.val()
            data.id = snapshot.key
            return data
        })
}

exports.getHealthBenefits = () => {
    return ref.child('HealthBenefits').once('value')
        .then((snapshot) => {
            let data = snapshot.val()
            data.id = snapshot.key
            return data
        })
}

exports.getHealthBenefit = (id) => {
    return ref.child('HealthBenefits').child(id).once('value')
        .then((snapshot) => {
            let data = snapshot.val()
            data.id = snapshot.key
            return data
        })
}

exports.getGrowers = () => {
    return ref.child('Growers').once('value')
        .then((snapshot) => {
            let data = snapshot.val()
            data.id = snapshot.key
            return data
        })
}

exports.getMenuCat = () => {
    return ref.child('MenuCat').once('value')
        .then((snapshot) => {
            let data = snapshot.val()
            data.id = snapshot.key
            return data
        })
}

exports.getMenuItems = () => {
    return ref.child('MenuItems').once('value')
        .then((snapshot) => {
            let data = snapshot.val()
            data.id = snapshot.key
            return data
        })
}

exports.getMenuItem = (id) => {
    return ref.child('MenuItems').child(id).once('value')
        .then((snapshot) => {
            let data = snapshot.val()
            data.id = snapshot.key
            return data
        })
}

exports.getFeaturedItems = () => {
    return ref.child('MenuItems').once('value')
    .then((snapshot) => {
        let data = snapshot.val()
        data.id = snapshot.key
        return data.filter(item => item.featured);
    })
}