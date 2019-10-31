// Copyright 2019 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.14.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V1K8SResource', 'model/V1ListK8SResourcesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V1K8SResource'), require('../model/V1ListK8SResourcesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.K8SSecretsV1Api = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1K8SResource, root.PolyaxonSdk.V1ListK8SResourcesResponse);
  }
}(this, function(ApiClient, V1K8SResource, V1ListK8SResourcesResponse) {
  'use strict';

  /**
   * K8SSecretsV1 service.
   * @module api/K8SSecretsV1Api
   * @version 1.14.4
   */

  /**
   * Constructs a new K8SSecretsV1Api. 
   * @alias module:api/K8SSecretsV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createK8SSecrets operation.
     * @callback module:api/K8SSecretsV1Api~createK8SSecretsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1K8SResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List runs
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1K8SResource} body Artifact store body
     * @param {module:api/K8SSecretsV1Api~createK8SSecretsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1K8SResource}
     */
    this.createK8SSecrets = function(owner, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createK8SSecrets");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createK8SSecrets");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1K8SResource;

      return this.apiClient.callApi(
        '/api/v1/{owner}/k8s_secrets', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteK8SSecret operation.
     * @callback module:api/K8SSecretsV1Api~deleteK8SSecretCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch run
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Unique integer identifier of the entity
     * @param {module:api/K8SSecretsV1Api~deleteK8SSecretCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteK8SSecret = function(owner, uuid, callback) {
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteK8SSecret");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteK8SSecret");
      }


      var pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/{owner}/k8s_secrets/{uuid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getK8SSecret operation.
     * @callback module:api/K8SSecretsV1Api~getK8SSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1K8SResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new run
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Unique integer identifier of the entity
     * @param {module:api/K8SSecretsV1Api~getK8SSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1K8SResource}
     */
    this.getK8SSecret = function(owner, uuid, callback) {
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getK8SSecret");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getK8SSecret");
      }


      var pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1K8SResource;

      return this.apiClient.callApi(
        '/api/v1/{owner}/k8s_secrets/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listK8SSecretNames operation.
     * @callback module:api/K8SSecretsV1Api~listK8SSecretNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListK8SResourcesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List bookmarked runs for user
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/K8SSecretsV1Api~listK8SSecretNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListK8SResourcesResponse}
     */
    this.listK8SSecretNames = function(owner, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listK8SSecretNames");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListK8SResourcesResponse;

      return this.apiClient.callApi(
        '/api/v1/{owner}/k8s_secrets/names', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listK8SSecrets operation.
     * @callback module:api/K8SSecretsV1Api~listK8SSecretsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListK8SResourcesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List archived runs for user
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/K8SSecretsV1Api~listK8SSecretsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListK8SResourcesResponse}
     */
    this.listK8SSecrets = function(owner, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listK8SSecrets");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListK8SResourcesResponse;

      return this.apiClient.callApi(
        '/api/v1/{owner}/k8s_secrets', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchK8SSecret operation.
     * @callback module:api/K8SSecretsV1Api~patchK8SSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1K8SResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update run
     * @param {String} owner Owner of the namespace
     * @param {String} k8s_resource_uuid UUID
     * @param {module:model/V1K8SResource} body Artifact store body
     * @param {module:api/K8SSecretsV1Api~patchK8SSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1K8SResource}
     */
    this.patchK8SSecret = function(owner, k8s_resource_uuid, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchK8SSecret");
      }

      // verify the required parameter 'k8s_resource_uuid' is set
      if (k8s_resource_uuid === undefined || k8s_resource_uuid === null) {
        throw new Error("Missing the required parameter 'k8s_resource_uuid' when calling patchK8SSecret");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchK8SSecret");
      }


      var pathParams = {
        'owner': owner,
        'k8s_resource.uuid': k8s_resource_uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1K8SResource;

      return this.apiClient.callApi(
        '/api/v1/{owner}/k8s_secrets/{k8s_resource.uuid}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateK8SSecret operation.
     * @callback module:api/K8SSecretsV1Api~updateK8SSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1K8SResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get run
     * @param {String} owner Owner of the namespace
     * @param {String} k8s_resource_uuid UUID
     * @param {module:model/V1K8SResource} body Artifact store body
     * @param {module:api/K8SSecretsV1Api~updateK8SSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1K8SResource}
     */
    this.updateK8SSecret = function(owner, k8s_resource_uuid, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateK8SSecret");
      }

      // verify the required parameter 'k8s_resource_uuid' is set
      if (k8s_resource_uuid === undefined || k8s_resource_uuid === null) {
        throw new Error("Missing the required parameter 'k8s_resource_uuid' when calling updateK8SSecret");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateK8SSecret");
      }


      var pathParams = {
        'owner': owner,
        'k8s_resource.uuid': k8s_resource_uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1K8SResource;

      return this.apiClient.callApi(
        '/api/v1/{owner}/k8s_secrets/{k8s_resource.uuid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));