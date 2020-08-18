# mood-sentences
✨ Mood sentences

Get simple mood sentences.

<p align="center">
    <img src="https://raw.githubusercontent.com/AndreVarandas/mood-sentences/master/art/logo.png" width="256" height="256" alt="Capacitator storage Wrapper logo">
</p>

[![npm (scoped)](https://img.shields.io/npm/v/@varandas/mood-sentences.svg)](https://www.npmjs.com/package/@varandas/mood-sentences)
[![npm](https://img.shields.io/npm/dm/@varandas/mood-sentences.svg)](https://npmcharts.com/compare/@varandas/mood-sentences)

[![Build Status](https://travis-ci.org/AndreVarandas/mood-sentences.svg?branch=master)](https://travis-ci.org/AndreVarandas/mood-sentences)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/AndreVarandas/mood-sentences/master.svg?style=flat-square)](https://codecov.io/gh/AndreVarandas/mood-sentences/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Known Vulnerabilities](https://snyk.io/test/github/AndreVarandas/mood-sentences/badge.svg?targetFile=package.json)](https://snyk.io/test/github/AndreVarandas/mood-sentences?targetFile=package.json)

## About mood-sentences

This repository was built for the Let's build our first JavaScript npm package tutorial series, published on [https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-268l]()

In this tutorial we build a simple JavaScript package that gets a few mood sentences from a json file. It's a simple package, but you'll learn a lot in the process 🤓.

We cover everything from the setup, coding, adding tests, configuring our CI and finally pushing the package into npm.

1. Introduction [https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-268l](https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-268l)
1. Project setup [https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-initial-setup-4pml](https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-initial-setup-4pml)
1. Writing code [https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-writing-code-10m0](https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-writing-code-10m0)
1. Writing tests [https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-writing-tests-1ana](https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-writing-tests-1ana)
1. Publishing the package [https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-continuous-integration-ebn](https://dev.to/iamvarandas/let-s-build-our-first-javascript-npm-package-continuous-integration-ebn) 

## Usage

### Installation 

If you just want to try the package:

`npm install --save @varandas/mood-sentences`

or with yarn:

`yarn add @varandas/mood-sentences`

### Usiwng the package

```javascript
const Moods = require('@varandas/moods')

// Get all sentences
const all = Moods.all

// Get all sentences for a specific mood
const anger = Moods.anger
const excitement = Moods.excitement
const boredom = Moods.boredom
const happiness = Moods.happiness

// Get a random sentence for a mood
const randomHappinessSentence = Moods.getRandom(Moods.list.happiness)
```


---

[LICENSE - MIT - André Varandas](LICENSE)

<div>Logo made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>