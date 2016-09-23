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
(function() {
  'use strict';

  if (!('fetch' in window)) {
    console.log('Fetch API not found, try including the polyfill');
    return;
  }
  // We can safely use fetch from now on

  function readResponseAsJSON(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }

  function readResponseAsBlob(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.blob();
  }

  function logResult(result) {
    console.log(result);
  }

  function showImage(responseAsBlob) {
    const myImage = document.querySelector('img');
    const myImageUrl = URL.createObjectURL(responseAsBlob);
    myImage.src = myImageUrl;
  }

  function logError(error) {
    console.log('Fetch failed', error);
  }

  fetch('/images/kitten.jpg') // Step 1
  .then(readResponseAsBlob) // Step 2
  .then(showImage) // Step 3
  .catch(logError);

})();
