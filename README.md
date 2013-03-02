node-with-modules
=================

Accompanying code for our meeting from January 22nd.

[the slides from the meeting can be found be following this link](https://docs.google.com/presentation/d/1aUshGv8yxDaGMGfoSPhHQUtpVBJzOCzs5kEDq_Mh5pM/edit?usp=sharing)

In order to run the examples you'll need to have node and npm installed (npm almost always 
installs with node by default). Node can be obtained from [http://nodejs.org/](http://nodejs.org/).

Note, that this repo doesn't contain a `package.json` file which can usually be used with `npm install`
to install prerequisites. The assumption as that you're following the provided slides and will install 
express by yourself.

Code in this repo was designed to work work with express 3.x, if it does not work, than you are from the
future and express is probably at something like version 18.3.23. How's the future? also, you'll need
to remove your futuristic version of express with 'npm uninstall express' and specify that you want version
3.x by running `npm install@3.x`.
