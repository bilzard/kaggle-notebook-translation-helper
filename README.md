# Kaggle Notebook Translation Helper

Since the Kaggle Notebook source code is an independent resource imported via `iframe` tags, it cannot be directly translated by translation engines such as Google Translate.

This chrome extension will help you translate the Kaggle Notebook using a translation engine such as Google Translate.

It works as follows
1. Inserts a link button `Open source code in a new tab` in the kaggle notebook web page
2. When clicked, the Kaggle Notebook source code is opened in a new tab. This page is the `src` attribute in the original `iframe` tag, so you can translate it using a translation engine such as Google Translate.

## Installation

### 1. From Chrome Web Store

[Kaggle Notebook Translation Helper](https://chrome.google.com/webstore/detail/kaggle-notebook-translati/pbmmnjfppdiejknmcbibbhpgibhggboc)

### 2. From this repository

1. clone this repository
2. [load an unpacked extension in developer mode][manual] (add resources in `src` directory)

[manual]: https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked

## Screenshot

https://user-images.githubusercontent.com/36561962/200151310-40912c45-a2c8-45e7-a892-dc74c3867934.mp4
