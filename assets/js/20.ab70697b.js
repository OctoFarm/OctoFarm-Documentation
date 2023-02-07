(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{393:function(t,e,s){"use strict";s.r(e);var a=s(27),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"octoprint-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#octoprint-setup"}},[t._v("#")]),t._v(" OctoPrint Setup")]),t._v(" "),s("p",[t._v("There are a few pre-requisites for OctoPrint to allow OctoFarm to establish a reliable connection to OctoPrint. Please setup the below on each instance you want to add to your farm.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Multi-User OctoPrint Setups")]),t._v(" "),s("p",[t._v('Post-V1.2 - To save time when adding printers to OctoFarm will attempt to guess the user you want to use on it with OctoPrints connection. This guess isn\'t amazingly smart, it just expects a single user administrator setup so will always pick your first created user. If you\'ve got multiple users on your system, it is recommended to create a new administrator called "octofarm" or "OctoFarm" if you like camelcase. OctoFarm will detect this user name and default back to it. Failing this, OctoFarm will not be able to connect due to the mis-match in authentication keys and username. You may open up the settings for your printer and change the user there in the Printer Manager screen.')])]),t._v(" "),s("h2",{attrs:{id:"setup-the-correct-api-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-correct-api-key"}},[t._v("#")]),t._v(" Setup the correct API Key")]),t._v(" "),s("p",[t._v("There are 3 different types of API keys in OctoPrint.")]),t._v(" "),s("ul",[s("li",[t._v("User API Key (useful). The user API key works only if the user has the groups "),s("strong",[t._v("Admins")]),t._v(" and "),s("strong",[t._v("Operator")]),t._v(". This is the first user you make, so make sure to add the roles yourself for it to work for another user (if you must).")]),t._v(" "),s("li",[t._v("Application Key (useful). The same as a User key but targeted for specific applications: like OctoFarm.\nMake sure your user has the groups "),s("strong",[t._v("ADMINS")]),t._v(" AND "),s("strong",[t._v("OPERATOR")]),t._v(" for your user - this is default for only the 1st user!")]),t._v(" "),s("li",[t._v("Global API Key. This key does not work with authorising the websocket connection in OctoPrint anymore. It can't be used, and OctoPrint will be removing it in a future version.")])]),t._v(" "),s("p",[t._v("Quoting OctoPrint's Application Key page:")]),t._v(" "),s("blockquote",[s("p",[t._v("The global API key should best not be used anymore. It's one single key that gives full admin access to your whole OctoPrint instance. "),s("strong",[t._v("Instead of using it you should create individual Application Keys for your third party clients.")]),t._v(" That way they get permissions matching the user account used for key creation and you can also revoke access to one app without having to change the keys for all other apps. It's also recommended to create a user account without admin access and use that for third party clients where possible.")])]),t._v(" "),s("p",[t._v("TL;DR create an Application Key for the first OctoPrint account you made ❤️\nThis the way to get there:")]),t._v(" "),s("ul",[s("li",[t._v("Settings wrench icon\n"),s("img",{attrs:{src:"https://user-images.githubusercontent.com/6005355/108238363-2effcf00-7149-11eb-9bed-213cd2f29a52.png",alt:"image"}})]),t._v(" "),s("li",[t._v("Application Key (side navigation within OctoPrint Settings)\n"),s("img",{attrs:{src:"https://user-images.githubusercontent.com/6005355/108238623-69696c00-7149-11eb-9b44-21b1362c1d23.png",alt:"image"}})]),t._v(" "),s("li",[t._v("Copy the generated key in the "),s("code",[t._v("Registered application keys")]),t._v(" field which will appear after you click "),s("code",[t._v("Generate")]),t._v(" "),s("img",{attrs:{src:"https://user-images.githubusercontent.com/6005355/108240349-109ad300-714b-11eb-819b-7737fefeeff2.png",alt:"image"}})])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("(Optional) you can do this also in the User Settings, where the same Application Key are managed but only for the user itself, as well as also a user-specific API Key can be generated. Pretty confusing, yeah. Just use Application Key.")])])]),t._v(" "),s("h2",{attrs:{id:"make-sure-your-user-has-administrator-privileges"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make-sure-your-user-has-administrator-privileges"}},[t._v("#")]),t._v(" Make sure your user has Administrator Privileges")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("(Optional) make sure the user has Operator and Admins groups (which is default for the first user).")])])]),t._v(" "),s("blockquote",[s("p",[t._v("OctoPrint Settings (wrench icon) > Access Control > Edit the user you want (crayon icon)")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/6005355/108240729-67a0a800-714b-11eb-9fa0-f551da95e749.png",alt:"image"}})])])}),[],!1,null,null,null);e.default=i.exports}}]);