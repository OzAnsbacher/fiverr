// const fs = require('fs')
// const gigs = require('../../data/gig.json')

export const gigService = {
    query,
    getById,
    save,
    remove,
    _makeId,
    _saveGigsToFile,
}



function query() {
    return Promise.resolve(2)
    return Promise.resolve(gigs)
}


function getById(gigId) {
    const gig = gigs.find(gig => gig.id === gigId)
    return Promise.resolve(gig)
}

function save(gig) {
    if (gig._id) {
        const idx = gigs.findIndex(currGig => currGig._id === gig._id)
        gigs[idx] = gig
    } else {
        gig._id = _makeId()
        gigs.push(gig)
    }
    return _saveGigsToFile()
        .then(()=>gig)
}


function remove(gigId) {
    const idx = cars.findIndex(gig => gig._id === gigId)
    gigs.splice(idx, 1)
    // return Promise.resolve()
    
    return _saveGigsToFile()
}

function _saveGigsToFile() {
    return new Promise((resolve, reject) => {
        const content = JSON.stringify(gigs, null, 2)
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