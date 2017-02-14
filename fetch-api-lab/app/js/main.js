/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var app = (function() {
  'use strict';

  function logResult(result) {
    console.log(result);
  }

  function logError(error) {
    console.log('Looks like there was a problem: \n', error);
  }

  // TODO 2.1a

  function fetchJSON() {
    // TODO 2.1b
  }

  function validateResponse(response) {
    // TODO 2.3
  }

  function readResponseAsJSON(response) {
    // TODO 2.4
  }

  function showImage(responseAsBlob) {
    //  TODO 3a
  }

  function readResponseAsBlob(response) {
    // TODO 3b
  }

  function fetchImage() {
    // TODO 3c
  }

  function showText(responseAsText) {
    //  TODO 4a
  }

  function readResponseAsText(response) {
    // TODO 4b
  }

  function fetchText() {
    // TODO 4c
  }

  function headRequest() {
    // TODO 5.1
  }

  function logSize(response) {
    // TODO 5.2
  }

  /* NOTE: Never send unencrypted user credentials in production! */
  function postRequest() {
    // TODO 6.2
  }

  // Don't worry if you don't understand this, it's not part of the Fetch API.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    readResponseAsJSON: (readResponseAsJSON),
    readResponseAsBlob: (readResponseAsBlob),
    readResponseAsText: (readResponseAsText),
    validateResponse: (validateResponse),
    fetchJSON: (fetchJSON),
    fetchImage: (fetchImage),
    fetchText: (fetchText),
    headRequest: (headRequest),
    postRequest: (postRequest)
  };

})();
