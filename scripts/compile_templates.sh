#!/usr/bin/env bash
cd $( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd ) && handlebars ../src/templates/* -f ../gen/templates.js -c handlebars/runtime -e hbs;