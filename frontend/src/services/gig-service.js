// const fs = require('fs')
// var gGigs = require('../../data/gig.json')

import { httpService } from './http.service.js'
const ENDPOINT = 'gig'
// var axios = Axios.create({ withCredentials: true })

var gGigs

export const gigService = {
    query,
    getById,
    save,
    remove,
    _makeId,
    _saveGigsToFile,
    getCategories,
    getqueryStringParams,
}

async function query(filterBy) {
    return await httpService.get(ENDPOINT, filterBy)

    // var res = await axios.get('../../data/gig.json')
    // var gigs = res.data[0].gigs
    // if (filterBy) gigs = setGigsFilters(gigs, filterBy)
    // return gigs
}

async function getById(gigId) {
    return await httpService.get(`${ENDPOINT}/${gigId}`)

    // try {
    //     let gigs = await query()
    //     const gig = gigs.find(gig => gig._id === gigId)
    //     return Promise.resolve(gig)
    // } catch (error) {
    //     console.log('error', error)
    // }
}

async function save(gig) {
    var gig = JSON.parse(JSON.stringify(gig))
    if (gig._id) {
        return await httpService.put(`${ENDPOINT}/${gig._id}`, gig)
    } else {
        if (!gig.name) gig.name = 'Unknown'
        return await httpService.post(ENDPOINT, gig)
    }
}

async function remove(gigId) {
    return await httpService.delete(`${ENDPOINT}/${gigId}`)
    // const idx = cars.findIndex(gig => gig._id === gigId)
    // gGigs.splice(idx, 1)
    // // return Promise.resolve()

    // return _saveGigsToFile()
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

function getEmptyGig() {
    return {
        _id: _makeId(),
        title: null,
        price: null,
        owner: {
            id: null,
            fullname: null,
            imgUrl: null,
            level: null,
            rate: null,
        },
        dayToMake: null,
        description: null,
        imgUrl: null,
        tags: ['modern logo', 'logo', 'custom logo', 'creative logo'],
        likeByUsers: ['mini-user'],
    }
}

function getCategories() {
    return categories
}

function setGigsFilters(gigs, filter) {
    if (filter.category) {
        gigs = gigs.filter(gig => gig.category === filter.category)
    }
    if (filter.tag) {
        gigs = gigs.filter(gig => gig.tags.includes(filter.tag))
    }
    return gigs
}

function getqueryStringParams(filterBy) {
    const queryStringParams = `explore`
    // const queryStringParams = `explore?category=${filterBy.category}`;
    // const newUrl =
    return window.location.protocol + '//' + window.location.host + window.location.pathname + queryStringParams
    // return newUrl
}
