#!/bin/bash
# declare release variable
release=$(git describe --tags --abbrev=0)

if [ -d "releases/$release" ]; then
  # Checking to see if tag directory exists, if it does deletes it.
  rm -rf releases/$release
fi

if [ ! -d "releases" ]; then
  # If release directory doesn't exist, creates it.
  mkdir releases
fi

if [ -d "releases" ]; then
  # If release directory exists, create the tag directory.
  mkdir releases/$release
fi

# Copies all the files from the dist directory into the tag directory.
cp -r ./dist/** ./releases/$release

if [ -d "releases" ]; then
  # Copies releases into dist directory
  mv releases dist/releases
fi