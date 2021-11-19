# cucumber-esm

reproduction of problem using loaders with cucumber on an ESM project

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
[![Codecov][coverage-badge]][coverage-link]

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Example](#example)
    * [Import](#import)
    * [Execute](#execute)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

<!--consumer-badges start -->

[![MIT license][license-badge]][license-link]
[![npm][npm-badge]][npm-link]
[![Try @form8ion/cucumber-esm on RunKit][runkit-badge]][runkit-link]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/cucumber-esm
```

### Example

#### Import

```javascript
import {scaffold} from '@form8ion/cucumber-esm';
```

#### Execute

```javascript
(async () => {
  await scaffold({projectRoot: process.cwd()});
})();
```

## Contributing

<!--contribution-badges start -->

[![PRs Welcome][PRs-badge]][PRs-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[github-actions-ci-link]: https://github.com/form8ion/cucumber-esm/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://github.com/form8ion/cucumber-esm/workflows/Node.js%20CI/badge.svg

[coverage-link]: https://codecov.io/github/form8ion/cucumber-esm

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/cucumber-esm.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/cucumber-esm.svg

[npm-link]: https://www.npmjs.com/package/@form8ion/cucumber-esm

[npm-badge]: https://img.shields.io/npm/v/@form8ion/cucumber-esm.svg

[runkit-link]: https://npm.runkit.com/@form8ion/cucumber-esm

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/cucumber-esm.svg
