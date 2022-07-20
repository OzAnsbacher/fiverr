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
};

function query(filter) {
  return axios.get("../../data/gig.json").then((response) => {
    if(filter==='gigs'){
      gGigs = response.data[0].gigs;
    } else{
      gGigs = response.data
    }
    console.log("gGigs", gGigs);

    return gGigs;
  });
}

async function getById(gigId) {
  try {
  let gigs = await query()
  console.log(gigs)
  gigs = gigs[0].gigs
  console.log(gigs)
  const gig = gigs.find((gig) => gig._id === gigId);
  console.log(gig)
  return Promise.resolve(gig);
  } catch (error) {
    console.log('error', error)
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
    title:null,
    price:null,
    owner:{
      id:null,
      fullname:null,
      imgUrl:null,
      level:null,
      rate:null,
    },
    dayToMake:null,
    description:null,
    imgUrl:null,
    tags:[
      "modern logo",
      "logo",
      "custom logo",
      "creative logo",
    ],
    likeByUsers:['mini-user']
  };
}
