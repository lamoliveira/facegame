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


/**
 * This is just a place to put all your API authentication keys
 */
Config = function() {
    return {
        // You will need to replace with your own Firebase configuration
        // This can be retrieved from clicking "Add App" from the project overview page.
        firebase: {
            apiKey: "AIzaSyBSHPT5Ec9qPtb0bpk4H6tu82r3Cv0h_lc",
            authDomain: "teste-80f90.firebaseapp.com",
            databaseURL: "https://teste-80f90.firebaseio.com",
            projectId: "teste-80f90",
            storageBucket: "teste-80f90.appspot.com",
            messagingSenderId: "520015397491"
        },
        // Replace with an API key for Google Cloud Vision API
        // DO NOT DO THIS IN PRODUCTION!!! For Demo purposes only.
        visionAPI: {
            key: "AIzaSyA6am4V8yI3bVTZ_GZDQjfoD3N7yBzcWqs"
        }
    }
}();
