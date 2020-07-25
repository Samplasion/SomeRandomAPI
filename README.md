# `sra-wrapper`

An unofficial wrapper around [Some Random API][sra].

[sra]: https://some-random-api.ml

## Usage

This package is designed as an easy replacement to the official wrapper
(that is apparently unmaintained).

Here's an example snippet:

```js
const { api } = require("sra-wrapper");

// `/img/dog` translates to `api.img.dog()`
api.img.dog().then(({ link }) => {
    console.log(link);
})
```

This package follows the same naming conventions as the original URLs, with a couple differences:

1. **All names follow camelCase.**  
   This means that names such as `red_panda` and `youtube-comment`
   become `redPanda` and `youtubeComment`.
2. **The `binary` and the `base64` endpoints are split.**  
   Because `binary` and `base64` do different things based on the arguments,
   they've been split into `encodeBinary` / `encodeBase64` and `decodeBinary` / `decodeBase64`.
3. **The endpoints that don't have a category are grouped within the `other` category.**

## Examples

```js
const { api } = require("sra-wrapper");
const { writeFileSync } = require("fs");

// `/img/dog` translates to `api.img.dog()`
api.other.youtubeComment({
    avatar: "https://cdn.discordapp.com/avatars/280399026749440000/ed7c437fbce145a31581f0b8796e70d9.png?size=1024",
    comment: "This is a YouTube comment",
    username: "Samplasion"
}).then(buffer => {
    writeFileSync("youtube.png", buffer);
})
```
