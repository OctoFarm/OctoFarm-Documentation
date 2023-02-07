(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{409:function(t,r,e){"use strict";e.r(r);var a=e(27),n=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"raspberry-pi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi"}},[t._v("#")]),t._v(" Raspberry Pi")]),t._v(" "),e("p",[t._v("OctoFarm comes wrapped in a nice pre-built image for the RaspberryPi running on Ubuntu 64-bit. Similar to OctoPrint's OctoPi, FarmPi comes with all you need to get up and running with OctoFarm. You have the option to use FarmPi, or manually install OctoFarm itself. Both instructions are below.\nFarmPi was created by "),e("a",{attrs:{href:"https://github.com/mkevenaar",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maurice Kevenaar"),e("OutboundLink")],1),t._v(" and all credit for it's creation goes to him. You can find the "),e("a",{attrs:{href:"https://github.com/mkevenaar/FarmPi",target:"_blank",rel:"noopener noreferrer"}},[t._v("FarmPi Github"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("This image does NOT include OctoPrint... You will need that on another device / installed seperately somewhere...")])]),t._v(" "),e("p",[t._v("You can find more information about FarmPi here: "),e("a",{attrs:{href:"https://farmpi.kevenaar.name/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FarmPi Documentation"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"supported-printer-amount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-printer-amount"}},[t._v("#")]),t._v(" Supported Printer Amount")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("This is a guesstimate, these figures are due to change as feedback is received on the image.")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("RaspberryPi")]),t._v(" "),e("th",[t._v("# of Printers")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("3A+")]),t._v(" "),e("td",[t._v("5")])]),t._v(" "),e("tr",[e("td",[t._v("3B / 3B+")]),t._v(" "),e("td",[t._v("10")])]),t._v(" "),e("tr",[e("td",[t._v("4B - 2GB")]),t._v(" "),e("td",[t._v("20")])]),t._v(" "),e("tr",[e("td",[t._v("4B - 4GB")]),t._v(" "),e("td",[t._v("40")])]),t._v(" "),e("tr",[e("td",[t._v("4B - 8GB")]),t._v(" "),e("td",[t._v("80")])])])]),t._v(" "),e("h2",{attrs:{id:"farmpi-distribution-recommended-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#farmpi-distribution-recommended-install"}},[t._v("#")]),t._v(" FarmPi Distribution (Recommended Install)")]),t._v(" "),e("ol",[e("li",[t._v("Download the FarmPi image from github or the official FarmPi mirror. Always make sure you're getting the latest version.")])]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://github.com/mkevenaar/FarmPi/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maurice Kevenaar's GitHub Release page."),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://farmpi.octofarm.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FarmPi's Official Mirror"),e("OutboundLink")],1)])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Flash the image onto your microSD Card.")])]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create Ubuntu image for Pi on Ubuntu"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create Ubuntu image for Pi on Windows"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-macos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create Ubuntu image for Pi on OSX"),e("OutboundLink")],1)])])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[t._v("Configure your WiFi by editing "),e("code",[t._v("farmpi-wpa-supplicant.txt")]),t._v(" on the root of the flashed card when using it like a thumb drive, or use an UTP cable.")])]),t._v(" "),e("li",[e("p",[t._v("Boot FarmPi after flashing the SD Card.")])]),t._v(" "),e("li",[e("p",[t._v("If your network PC supports bonjour you can find your instance at "),e("code",[t._v("http://farmpi.local")]),t._v(" or the ip address that your router gave the device.")])]),t._v(" "),e("li",[e("p",[t._v("More configuration options can be found on Maurice Kevenaar GitHub but you will be able to start adding printers to your FarmPi instance on it's web interface now.")])])]),t._v(" "),e("h2",{attrs:{id:"manual-installation-farmpi-recommended"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manual-installation-farmpi-recommended"}},[t._v("#")]),t._v(" Manual Installation (FarmPi Recommended)")]),t._v(" "),e("ol",[e("li",[t._v("Ubuntu Download for Raspberry Pi")])]),t._v(" "),e("p",[t._v("Download Ubuntu 64-bit 20.04 for your Raspberry Pi Hardware.\n"),e("a",{attrs:{href:"https://ubuntu.com/download/raspberry-pi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Click here"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Make sure it's Ubuntu Server 20.04.1 LTS")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Flash the image onto your microSD Card.")])]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create Ubuntu image for Pi on Ubuntu"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create Ubuntu image for Pi on Windows"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-macos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create Ubuntu image for Pi on OSX"),e("OutboundLink")],1)])])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[t._v("Boot the ubuntu server after inserting the SD card.")])]),t._v(" "),e("li",[e("p",[t._v("Login to the Pi command line with your favourite SSH application.")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Default ubuntu credentials are:")]),t._v(" "),e("ul",[e("li",[t._v("Username: ubuntu")]),t._v(" "),e("li",[t._v("Password: ubuntu")])])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Continue on with the "),e("RouterLink",{attrs:{to:"/installation/install-linux-ubuntu.html"}},[t._v("Linux (Ubuntu)")]),t._v(" setup.")],1)])])}),[],!1,null,null,null);r.default=n.exports}}]);