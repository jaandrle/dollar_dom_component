# How to contribute
Contributions to the project generally take one of three forms:

1. Issues reports
    1. Bug reports
    1. Feature requests
1. Patches
1. Documentation/examples improvements

## Issues reports
The proper way to report Bug/Feature is to use corresponding issue template.

The maintenance team will read all created issues and …:

1. … assign them to proper [projects](../../projects/)
based on targerted library version. Also, each issue schould have chooosed
priority (__low__/__high__) by using specific column i project
(__To Do – Low priority__/__To Do – High priority__).
1. … assign them to targerted milestone (with specific deadline, if it is known).

## Patches
__We're super grateful for your patch__

The best way to make sure your issue is addressed is to submit a patch.
We accept patches through all mediums: pull requests, email, issue
comment, tweet with a link to a snippet, etc.

However, before sending a patch, please take try to:

- make your commit message describtive and use issue links for better
understandig commit purpose.
- make your coding style similar to ours (TBD).

### Development Environment
The library is developed using [Node.js](http://nodejs.org/) and has
a number of dependencies specified in its package.json file.
To install them just run the following command from within your
repo directory:
```bash
$ npm install
```
After that, you will be able to run [gulp](https://gulpjs.com/)
(all tasks are located in [tasks folder](./gulp/tasks/)). All files in
[src/](./src/) are concated by using [gulp_place](./gulp/gulp_place.js).

## Documentation/examples improvements
You can use issue for reporting errors and suggesting improvements
similary to [Issues reports](#issues-reports). It is also acceptable
to open issue with question if it wasn’t currently adressed anywhere
and you think it schould.

For updating documentation and examples follow [Patches](#Patches).
The documentation is created by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
Examples are in [examples/](./docs/examples/).

---
This text was inspired by
[jshint’s one](https://github.com/jshint/jshint/blob/master/CONTRIBUTING.md).