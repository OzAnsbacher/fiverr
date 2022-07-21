// const fs = require('fs')
// var gGigs = require('../../data/gig.json')
import Axios from "axios";

var axios = Axios.create({ withCredentials: true });

var gGigs;

export const gigService = {
  query,
  getById,
  save,
  remove,
  _makeId,
  _saveGigsToFile,
  getCategories,
  getqueryStringParams,
};

async function query(filterBy) {
  var res = await axios.get("../../data/gig.json");
  var gigs=res.data[0].gigs
  if(filterBy) gigs=setGigsFilters(gigs, filterBy)
  return gigs;
}

async function getById(gigId) {
  try {
    let gigs = await query();
    const gig = gigs.find((gig) => gig._id === gigId);
    return Promise.resolve(gig);
  } catch (error) {
    console.log("error", error);
  }
}

function save(gig) {
  if (gig._id) {
    const idx = gGigs.findIndex((currGig) => currGig._id === gig._id);
    gGigs[idx] = gig;
  } else {
    gig._id = _makeId();
    gGigs.push(gig);
  }
  return _saveGigsToFile().then(() => gig);
}

function remove(gigId) {
  const idx = cars.findIndex((gig) => gig._id === gigId);
  gGigs.splice(idx, 1);
  // return Promise.resolve()

  return _saveGigsToFile();
}

function _saveGigsToFile() {
  return new Promise((resolve, reject) => {
    const content = JSON.stringify(gGigs, null, 2);
    fs.writeFile("./data/gig.json", content, (err) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      resolve();
    });
  });
}

function _makeId(length = 5) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
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
    tags: ["modern logo", "logo", "custom logo", "creative logo"],
    likeByUsers: ["mini-user"],
  };
}

function getCategories() {
  return categories;
}

function setGigsFilters(gigs, filter){

  return gigs
}

function getqueryStringParams(filterBy){
  const queryStringParams = `explore`;
  // const queryStringParams = `explore?category=${filterBy.category}`;
  // const newUrl =
    return window.location.protocol +"//" +
    window.location.host +
    window.location.pathname +
    queryStringParams;
    // return newUrl
}
