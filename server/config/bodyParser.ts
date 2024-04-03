import express = require("express");

export function bodyParser() {
    return express.json();
}