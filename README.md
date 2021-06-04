# @ezweave/custom-authkey-generator

Generates a custom hash key, for systems that don't use the standard `Bearer token` style auth in `HTTPRequests`

## Table of Contents

* [Usage](#usage)
* [Command Line](#command-line)
* [As A Module](#as-a-module)
* [Global Command Line Usage](#global-command-line-usage) 
* [YAML Configuration](#yaml-configuration)

## Usage

There are two ways to use this package:

1. Install globally as a command line function
1. Import into an existing project


[Table of Contents](#table-of-contents)


## Command Line

To install from the command line via `npm`:

```bash
npm install -g @ezweave/custom-authkey-generator
```

And via `yarn`:

```bash
yarn global @ezweave/custom-authkey-generator
```


[Table of Contents](#table-of-contents)


## As A Module

If you need this in a project simply install via `npm`:

```bash
npm -i @ezweave/custom-authkey-generator
```

And via `yarn`:

```bash
yarn add @ezweave/custom-authkey-generator
```


[Table of Contents](#table-of-contents)


## Global Command Line Usage

There are three ways to use it on the command line, only two are really recommended for global installs:
1. With arguments passed in.
1. With a `yml` file specifiying keys and prefixes
1. With the global `.env` (not really recommended, too easy to have collisions)

To run it locally:

```bash
generate-custom-authkey -p /path/to/asset
```

The `path` variable (alias `p`) depends on how the token needs to be encoded/decoded.  For your purposes you may not be encoding a path.  This is what I was doing when I needed a better way to do it.  

Optional arguments:
* `--headerprefix` alias `-pre`: anything you need in the front of the header value.  Like `Bearer:` or something custom.
* `--publicKey` alias `-puk`: a public key for signing and appending to the token.
* `--privateKey` alias `-prk`: a private key for signing and encoding the `path` itself.
* `--configFile` alias `-c`: a path to a `.yml` file (recommended).  See [the section on yaml configuration](#yaml-configuration).

This will spit out a key you can then use in a `curl` command, Postman, et cetera.


[Table of Contents](#table-of-contents)


### YAML Configuration

It's probably going to be easier/less nasty to set up a `.yml` file to store your "static" data (keys, et cetera).

There is an example in `test/example.yml`, but this is the format:

```yml
PRIVATE_KEY: PRIVATE_KEY=
PUBLIC_KEY: PUBLIC_KEY==
HEADER_PREFIX: 'Bearer:' 
```

This would allow you to sign a token with config data.


[Table of Contents](#table-of-contents)