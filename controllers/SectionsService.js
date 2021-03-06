'use strict';

exports.infoGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * identifier (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "text" : "aeiou",
    "title" : "aeiou"
  },
  "meta" : {
    "code" : "",
    "status" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.section_idSubsectionsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sectionUrl (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "",
  "meta" : {
    "code" : "",
    "section" : "aeiou",
    "status" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.sectionsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "",
  "meta" : {
    "code" : "",
    "status" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

