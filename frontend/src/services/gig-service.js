// const fs = require('fs')
// var gGigs = require('../../data/gig.json')

var gGigs

export const gigService = {
    query,
    getById,
    save,
    remove,
    _makeId,
    _saveGigsToFile,
}

function query() {
   return fetch('../../data/gig.json')
    .then(response => {
        gGigs= response.json();
      return gGigs
    })
    
}


function getById(gigId) {
    const gig = gGigs.find(gig => gig.id === gigId)
    return Promise.resolve(gig)
}

function save(gig) {
    if (gig._id) {
        const idx = gGigs.findIndex(currGig => currGig._id === gig._id)
        gGigs[idx] = gig
    } else {
        gig._id = _makeId()
        gGigs.push(gig)
    }
    return _saveGigsToFile()
        .then(()=>gig)
}


function remove(gigId) {
    const idx = cars.findIndex(gig => gig._id === gigId)
    gGigs.splice(idx, 1)
    // return Promise.resolve()
    
    return _saveGigsToFile()
}

function _saveGigsToFile() {
    return new Promise((resolve, reject) => {
        const content = JSON.stringify(gGigs, null, 2)
        fs.writeFile('./data/gig.json', content, err => {
            if (err) {
                console.error(err)
                return reject(err)
            }
            resolve()
        })
    })
}

function _makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}