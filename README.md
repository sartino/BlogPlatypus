### Instructions

The objective of this project is create a blog site using the PlatypusTS framework.
Before begining, complete the [getting started guide](https://platypi.io/docs/getting-started).

IMPORTANT NOTE!!!!!!!!!!!!!: Stop before completing the deploy to a device step.

#### Further Reading
Typescript [type definition](https://blog.mariusschulz.com/2014/05/19/using-typescripts-type-definition-files-to-get-tooling-support-for-plain-javascript) files

#### Resources
[PlatypusTs docs](https://platypi.io/docs/api)


### Basic Req's

* Initialize a new project using platypi-cli:
		~~~~~~
		$ plat create -n PlatypusTSBlog
		// Answer no to ? Should we create a Cordova project? (Y/n)

		$ npm install
		$ npm start
		~~~~~~

The Platypus Blog will have all the same components as previous blog versions but no server will need to be created. The server will be running on http://localhost:3000 throught hte use of http-server npm module.

* App.ts - initialize app and configure views
* Models: define types for post items

* Services simliar to factory:
	- create a function use which the host string form base service to get all post from parse. Should return an array with the results.
	- create a function use which the host string form base service to post to parse
	- Request headers will need to be submitted with each request to parse
	- Both functions should handle any errors

	-Hint: [plat http](https://platypi.io/docs/api/class/plat.async.Http) enables api calls from client side and will be useful

* Repository:
	- create a function use which calls the get function from services, filters data and returns an arrays.
	- create a function use which calls and post function from services

* Viewcontrols:
	- enable user to switch between views
	- listview to display a list of all blog posts.
	- createview - includes form to submit posts and navigate back to list view when complete.
	- controller should call functions from the respective respository to handle actions

