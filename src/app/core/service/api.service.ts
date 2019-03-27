/**
 * Generic api service to handle all http requests initiated by the app.
 */

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private auth: AuthenticationService
  ) {}

  /**
   * handle get requests
   * takes the url segment (ie baseURL + '/users'): string
   * headers for headers customization (Authorization, Content-type... ): Object
   * route params if any (ie /users/18): Object
   * query params if any (ie /users?name='name'): Object
   */

  get(baseUrl, url, headers, routeParams, queryParams) {
    return this.httpClient.get(
      this.prepareURL(baseUrl, url, routeParams),
      this.prepareOptions(headers, queryParams)
    );
  }

  /**
   * handle post requests
   * takes the url segment (ie baseURL + '/users'): string
   * headers for headers customization (Authorization, Content-type... ): Object
   * route params if any (ie /users/18): Object
   * query params if any (ie /users?name='name'): Object
   * body : Object
   */

  post(baseUrl, url, headers, routeParams, queryParams, body) {
    return this.httpClient.post(
      this.prepareURL(baseUrl, url, routeParams),
      body,
      this.prepareOptions(headers, queryParams)
    );
  }

  /**
   * handle put/update requests
   * takes the url segment (ie baseURL + '/users'): string
   * headers for headers customization (Authorization, Content-type... ): Object
   * route params if any (ie /users/18): Object
   * query params if any (ie /users?name='name'): Object
   * body : Object
   */

  put(baseUrl, url, headers, routeParams, queryParams, body) {
    return this.httpClient.put(
      this.prepareURL(baseUrl, url, routeParams),
      body,
      this.prepareOptions(headers, queryParams)
    );
  }

  /**
   * handle delete requests
   * takes the url segment (ie baseURL + '/users'): string
   * headers for headers customization (Authorization, Content-type... ): Object
   * route params if any (ie /users/18): Object
   * query params if any (ie /users?name='name'): Object
   */

  delete(baseUrl, url, headers, routeParams, queryParams) {
    return this.httpClient.delete(
      this.prepareURL(baseUrl, url, routeParams),
      this.prepareOptions(headers, queryParams)
    );
  }

  /**
   * to do file upload or request with progress if needed
   *
   */

  prepareURL(baseUrl, urlSegment, routeParams) {
    /** here we prepare the url for the request.
     * the segment should be like users/:userId
     *  then we split the segment by ':' and map each param to the crossponding param passed
     */
    const splittedURLSegement: string[] = urlSegment.split("/");
    splittedURLSegement.forEach((element, index) => {
      if (element.indexOf(":") >= 0) {
        // here we check if it's a route param. then we should replace it with the crossponding param.
        const key = element.slice(1);
        splittedURLSegement[index] = routeParams[key];
      }
    });
    const formattedURLSegement = splittedURLSegement.join("/");
    return `${baseUrl}${formattedURLSegement}`;
  }

  prepareOptions(headers, queryParams) {
    let requestHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.append(
      "X-AUTH-TOKEN", `${this.auth.getToken()}`
    );
    Object.keys(headers).forEach(header => {
      requestHeaders = requestHeaders.append(header, headers[header]);
    });
    let requestParams;
    Object.keys(queryParams).forEach(param => {
      requestParams = new HttpParams().set(param, queryParams[param]);
    });
    return {
      headers: requestHeaders,
      params: requestParams
    };
  }
}
