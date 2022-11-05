# Kaggle Notebook Translation Helper

Since the Kaggle Notebook source code is an independent resource imported via `iframe` tags, it cannot be directly translated by translation engines such as Google Translate.

This chrome extension will help you translate the Kaggle Notebook using a translation engine such as Google Translate.

It works as follows
1. Inserts a link button `Open source code in a new tab` in the kaggle notebook web page
2. When clicked, the Kaggle Notebook source code is opened in a new tab. This page is the `src` attribute in the original `iframe` tag, so you can translate it using a translation engine such as Google Translate.
