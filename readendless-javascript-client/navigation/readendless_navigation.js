export class ReadEndlessNavigation {
  static buildUrlSearchParams(queryString) {
    let searchParams = new URLSearchParams(queryString);
    return searchParams;
  }
  static buildUrlSearchParamsFromUrl(urlString) {
    const url = new URL(urlString);
    return ReadEndlessNavigation.buildUrlSearchParams(url.search);
  }
  static hasQueryParam(queryString, paramName) {
    let searchParams = ReadEndlessNavigation.buildUrlSearchParams(queryString);
    return searchParams.has(paramName);
  }
  static getQueryParamValue(queryString, paramName) {
    let searchParams = ReadEndlessNavigation.buildUrlSearchParams(queryString);
    return searchParams.get(paramName);
  }
  static getAllQueryParamValue(queryString, paramName) {
    let searchParams = ReadEndlessNavigation.buildUrlSearchParams(queryString);
    return searchParams.getAll(paramName);
  }
  static appendQueryParam(queryString, paramName, paramValue) {
    let searchParams = ReadEndlessNavigation.buildUrlSearchParams(queryString);
    searchParams.append(paramName, paramValue);
    return searchParams;
  }
  static setQueryParam(queryString, paramName, paramValue) {
    let searchParams = ReadEndlessNavigation.buildUrlSearchParams(queryString);
    searchParams.set(paramName, paramValue);
    return searchParams;
  }
  static deleteQueryParam(queryString, paramName) {
    let searchParams = ReadEndlessNavigation.buildUrlSearchParams(queryString);
    searchParams.delete(paramName);
    return searchParams;
  }
}
