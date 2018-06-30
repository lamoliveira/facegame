/*
 *  Copyright 2016 Google Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License")
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

//"use strict";

/**
 * Module for interacting with the Cloud Vision API
 * https://cloud.google.com/vision/
 */
var Vision = (function() {

    /*
     * Build the object structure for a Vision API request and return it.
     * */
  
    // Exposed functions
    return {
        /*
         * return user choice
         * */
        detectFace: function(gcsPath, successCallback) {
            console.log("Asking number of coins", gcsPath);
            
                    var result = "3";
                    successCallback(result);
                
            }
        }
    }
);
