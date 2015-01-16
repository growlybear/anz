# ANZ

### Code challenge

Angular.js mobile/web app to graphically display recent earthquake occurrences
and information on a map using data provided by [Seismi's REST API](http://www.seismi.org/api/).


### Solution rationale

I'm a front-end web developer at heart, so naturally I'm drawn to a solution in that environment.
:wink: Beyond personal preference though, I also believe this is the most flexible option for this
challenge. Native implementations excel in providing access to specific device API's (camera,
location services, accelerometer, etc) and in maximising performance. However neither of these
concerns are critical in this case (at least initially), so IMO the web app is clearly the most
universal solution in this case.

### Live implementation

A working implementation can be found on Heroku at
[https://growly-earthquakes.herokuapp.com/](https://growly-earthquakes.herokuapp.com/)

### Local implementation

Assuming you have Node running locally on your machine:

```bash
$ git clone git@github.com:growlybear/anz.git
$ cd anz
$ npm install
$ bower install
$ grunt serve

```

If you want to build the solution locally, you'll also need ruby and compass installed. I use
`rbenv` for Ruby version management, although `rvm` or even system Ruby (in a pinch) will do.
With Homebrew:

```
$ brew install rbenv
$ rbenv install -l                # list all available versions
$ rbenv install 2.2.0-preview1    # install a suitable Ruby version
$ gem install compass
$ grunt build
$ grunt test
```


**NOTE:** I've developed locally on Mac OX X, so although there's no reason why the app
shouldn't also work on Windows it hasn't been tested there yet. Node is fully cross-platform
compatible, but not all npm packages are developed with that compatibility in mind. If you run
into issues installing there, please reach out to me directly and I'll take a look and provide
assistance.

***FIXME:** Not all the karma tests are currently passing, and there isn't full-coverage
:cold_sweat: :facepunch:


### Frameworks and 3<sup>rd</sup>-party libraries used

- [Node](http://nodejs.org/) or [IO](https://iojs.org/) JavaScript on the server
- [AngularJS](https://angularjs.org/) Superheroic JavaScript Framework
- [Leaflet](http://leafletjs.com/) Gorgeous open-source mapping solution for web and mobile
- [generator-angular](https://github.com/yeoman/generator-angular) Popular Yeoman generator for Angular appplications
- [Bootstrap](http://getbootstrap.com/) One of the most popular front-end CSS frameworks, built-in to `generator-angular`
- [angular-leaflet-directive](http://tombatossals.github.io/angular-leaflet-directive/) Directive for easily combining Angular with Leaflet
- [cors-anywhere](https://www.npmjs.com/package/cors-anywhere) Handy npm module to overcome XSS issues encountered during development, explained in detail below

  **NB** cors-anywhere is my quick-and-dirty solution to one of the most common (and frustrating)
  problems encountered front-end JavaScript development - the Browsers' in-built security model.
  Designed - justifiably - to prevent [XSS injection attacks](https://www.owasp.org/index.php/Cross-site_Scripting_%28XSS%29),
  browsers inherently prevent execution of code which doesn't adhere to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

  However, in circumstances where the execution of remote code across origins is considered both safe and
  desirable, [JSONP](http://json-p.org/) and more recently [CORS](http://www.w3.org/TR/cors/)
  are most commonly used. Sadly, the Seismi API doesn't support either of these alternatives.
  :disappointed: Failing either of those alternative, I needed to set up a back-end proxy to
  deliver responses from the same-origin (eg. run an Express server or similar), or alternatively
  simulate CORS support. I opted for the latter option purely to save time.

  In a production environment, we'd fetch the data from our own back-end responsible for interacting
  with the Seismi API. At the very least, we'd run cors-anywhere locally or from a domain we control.
  As it stands, I'm currently relying here on the author's live implementation at
  [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/). If this implementation
  were to be removed, or if Heroku were to go down, the application will stop working until the
  issue is resolved. If this reliance on a 3<sup>rd</sup>-party service causes any problems, please
  let me know directly and I'll set up alternative arrangements.


### Feature roadmap

- Customisable markers for earthquake magnitude
- Filterable results for specific locations
- Full test coverage
- [Continuous Integration](https://travis-ci.org/) and [Continuous Delivery](https://codeship.com/), or perhaps [both together](https://circleci.com/)
- Packaging the application as a mobile app using [Ionic](http://ionicframework.com/)

## Design Patterns

A small app such as this didn't call for many Design Patterns to be leveraged in its development.
However, I should point out that interaction with the Seismi API has been extracted out into its own
separate service, ensuring both components adhere closely to the [Single-Responsibility Principle](http://en.wikipedia.org/wiki/Single_responsibility_principle).
This ensures not just a clean separation of concerns, but easy testing of each unit in isolation
from each other.

Many other best practices for front-end development are exhibited throughout the repo, specifically:

- code, asset and request minification
- streamlined development workflow
- easy package management and configuration
- easy test-management enabling TDD (though missing coverage)

