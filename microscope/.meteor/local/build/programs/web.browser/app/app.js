var require = meteorInstall({"client":{"templates":{"posts":{"template.post_item.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/templates/posts/template.post_item.js                                           //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
                                                                                          // 1
Template.__checkName("postItem");                                                         // 2
Template["postItem"] = new Template("Template.postItem", (function() {                    // 3
  var view = this;                                                                        // 4
  return HTML.DIV({                                                                       // 5
    class: "post"                                                                         // 6
  }, "\n    ", HTML.DIV({                                                                 // 7
    class: "post-content"                                                                 // 8
  }, "\n      ", HTML.H3(HTML.A({                                                         // 9
    href: function() {                                                                    // 10
      return Spacebars.mustache(view.lookup("url"));                                      // 11
    }                                                                                     // 12
  }, Blaze.View("lookup:title", function() {                                              // 13
    return Spacebars.mustache(view.lookup("title"));                                      // 14
  })), HTML.SPAN(Blaze.View("lookup:domain", function() {                                 // 15
    return Spacebars.mustache(view.lookup("domain"));                                     // 16
  }))), "\n    "), "\n  ");                                                               // 17
}));                                                                                      // 18
                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////

},"template.posts_list.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/templates/posts/template.posts_list.js                                          //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
                                                                                          // 1
Template.__checkName("postsList");                                                        // 2
Template["postsList"] = new Template("Template.postsList", (function() {                  // 3
  var view = this;                                                                        // 4
  return HTML.DIV({                                                                       // 5
    class: "posts"                                                                        // 6
  }, "\n    ", Blaze.Each(function() {                                                    // 7
    return Spacebars.call(view.lookup("posts"));                                          // 8
  }, function() {                                                                         // 9
    return [ "\n      ", Spacebars.include(view.lookupTemplate("postItem")), "\n    " ];  // 10
  }), "\n  ");                                                                            // 11
}));                                                                                      // 12
                                                                                          // 13
////////////////////////////////////////////////////////////////////////////////////////////

},"post_item.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/templates/posts/post_item.js                                                    //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
Template.postItem.helpers({                                                               // 1
	domain: function () {                                                                    // 2
		var a = document.createElement('a');                                                    // 3
		a.href = this.url;                                                                      // 4
		return a.hostname;                                                                      // 5
	}                                                                                        // 6
});                                                                                       // 1
////////////////////////////////////////////////////////////////////////////////////////////

},"posts_list.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/templates/posts/posts_list.js                                                   //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
var postsData = [{                                                                        // 1
  title: 'Introducing Telescope',                                                         // 3
  url: 'http://sachagreif.com/introducing-telescope/'                                     // 4
}, {                                                                                      // 2
  title: 'Meteor',                                                                        // 7
  url: 'http://meteor.com'                                                                // 8
}, {                                                                                      // 6
  title: 'The Meteor Book',                                                               // 11
  url: 'http://themeteorbook.com'                                                         // 12
}];                                                                                       // 10
Template.postsList.helpers({                                                              // 15
  posts: postsData                                                                        // 16
});                                                                                       // 15
////////////////////////////////////////////////////////////////////////////////////////////

}}},"main.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/main.html                                                                       //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
module.exports = require("./template.main.js");                                           // 1
                                                                                          // 2
////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/template.main.js                                                                //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
                                                                                          // 1
Template.body.addContent((function() {                                                    // 2
  var view = this;                                                                        // 3
  return HTML.DIV({                                                                       // 4
    class: "container"                                                                    // 5
  }, HTML.Raw('\n    <header class="navbar navbar-default" role="navigation">\n      <div class="navbar-header">\n        <a class="navbar-brand" href="/">Microscope</a>\n      </div>\n    </header>\n    '), HTML.DIV({
    id: "main",                                                                           // 7
    class: "row-fluid"                                                                    // 8
  }, "\n      ", Spacebars.include(view.lookupTemplate("postsList")), "\n    "), "\n  ");
}));                                                                                      // 10
Meteor.startup(Template.body.renderToDocument);                                           // 11
                                                                                          // 12
////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/main.js                                                                         //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
var Template = void 0;                                                                    // 1
module.watch(require("meteor/templating"), {                                              // 1
  Template: function (v) {                                                                // 1
    Template = v;                                                                         // 1
  }                                                                                       // 1
}, 0);                                                                                    // 1
var ReactiveVar = void 0;                                                                 // 1
module.watch(require("meteor/reactive-var"), {                                            // 1
  ReactiveVar: function (v) {                                                             // 1
    ReactiveVar = v;                                                                      // 1
  }                                                                                       // 1
}, 1);                                                                                    // 1
module.watch(require("./main.html"));                                                     // 1
Template.hello.onCreated(function () {                                                    // 6
  function helloOnCreated() {                                                             // 6
    // counter starts at 0                                                                // 7
    this.counter = new ReactiveVar(0);                                                    // 8
  }                                                                                       // 9
                                                                                          //
  return helloOnCreated;                                                                  // 6
}());                                                                                     // 6
Template.hello.helpers({                                                                  // 11
  counter: function () {                                                                  // 12
    return Template.instance().counter.get();                                             // 13
  }                                                                                       // 14
});                                                                                       // 11
Template.hello.events({                                                                   // 17
  'click button': function (event, instance) {                                            // 18
    // increment the counter when button is clicked                                       // 19
    instance.counter.set(instance.counter.get() + 1);                                     // 20
  }                                                                                       // 21
});                                                                                       // 17
////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("./client/templates/posts/template.post_item.js");
require("./client/templates/posts/template.posts_list.js");
require("./client/template.main.js");
require("./client/templates/posts/post_item.js");
require("./client/templates/posts/posts_list.js");
require("./client/main.js");