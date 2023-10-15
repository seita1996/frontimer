# frontimer

Desktop timer application.

[![Test](https://github.com/seita1996/frontimer/actions/workflows/test.yml/badge.svg)](https://github.com/seita1996/frontimer/actions/workflows/test.yml)
[![Build/release](https://github.com/seita1996/frontimer/actions/workflows/build.yml/badge.svg)](https://github.com/seita1996/frontimer/actions/workflows/build.yml)
[![CodeQL](https://github.com/seita1996/frontimer/actions/workflows/codeql.yml/badge.svg)](https://github.com/seita1996/frontimer/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/seita1996/frontimer)](https://github.com/seita1996/frontimer/releases)
[![GitHub all releases download count](https://img.shields.io/github/downloads/seita1996/frontimer/total?color=blue)](https://github.com/seita1996/frontimer/releases/latest)

![](https://github.com/seita1996/frontimer/blob/main/src/assets/icon.png)

## Development

environment building

Install node (^18.12.1) and yarn.

Install modules that electron depends on.

ex.) Ubuntu

```
$ sudo apt-get install -y libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgtk-3-0 libgbm-dev
```

Launch electron app.

```
$ yarn dev
```

## Release

Update the version in the project's package.json file (e.g. 1.2.3)

Commit that change and add tag and push.

```
$ git add .
$ git commit -am v1.2.3
$ git tag v1.2.3
$ git push && git push --tags
```

A draft release is created and the built files are available for download.

Reference [Electron Builder Action](https://github.com/marketplace/actions/electron-builder-action)


## Other

<a href="https://icons.theforgesmith.com">Icons Powered by: https://icons.theforgesmith.com</a>
