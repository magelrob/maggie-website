"use strict";define("maggie-website/app",["exports","ember","ember/resolver","ember/load-initializers","maggie-website/config/environment"],function(e,t,i,n,a){var r=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:i["default"]}),(0,n["default"])(r,a["default"].modulePrefix),e["default"]=r}),define("maggie-website/components/app-version",["exports","ember-cli-app-version/components/app-version","maggie-website/config/environment"],function(e,t,i){var n=i["default"].APP.name,a=i["default"].APP.version;e["default"]=t["default"].extend({version:a,name:n})}),define("maggie-website/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("maggie-website/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("maggie-website/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","maggie-website/config/environment"],function(e,t,i){e["default"]={name:"App Version",initialize:(0,t["default"])(i["default"].APP.name,i["default"].APP.version)}}),define("maggie-website/initializers/export-application-global",["exports","ember","maggie-website/config/environment"],function(e,t,i){function n(){var e=arguments[1]||arguments[0];if(i["default"].exportApplicationGlobal!==!1){var n,a=i["default"].exportApplicationGlobal;n="string"==typeof a?a:t["default"].String.classify(i["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("maggie-website/router",["exports","ember","maggie-website/config/environment"],function(e,t,i){var n=t["default"].Router.extend({location:i["default"].locationType});n.map(function(){}),e["default"]=n}),define("maggie-website/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"maggie-website/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),i=e.createElement("h2");e.setAttribute(i,"id","title");var n=e.createTextNode("Maggie");e.appendChild(i,n),e.appendChild(t,i);var i=e.createTextNode("\n\n");e.appendChild(t,i);var i=e.createComment("");e.appendChild(t,i);var i=e.createTextNode("\n");return e.appendChild(t,i),t},buildRenderNodes:function(e,t,i){var n=new Array(1);return n[0]=e.createMorphAt(t,2,2,i),n},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("magelrob.github.io/config/environment",["ember"],function(e){var t="magelrob.github.io";try{var i=t+"/config/environment",n=e["default"].$('meta[name="'+i+'"]').attr("content"),a=JSON.parse(unescape(n));return{"default":a}}catch(r){throw new Error('Could not read config from meta tag with name "'+i+'".')}}),runningTests||require("magelrob.github.io/app")["default"].create({name:"maggie-website",version:"0.0.0+319b180b"});