interface Options extends RequestInit {
  user?: {
    authenticated?: boolean;
    token?: string;
    xcrf_token?: string;
  };
}

export const fetchJs = async (url: string, options: Options = {}) => {
  let requestHeaders = options.headers || {Accept: 'application/json'};

  if (
    !requestHeaders.hasOwnProperty('Content-Type') &&
    !(options && (!options.method || options.method === 'GET')) &&
    !(options && options.body && options.body instanceof FormData)
  ) {
    requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  if (options.user && options.user.authenticated && options.user.token) {
    requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: options.user.token,
    };
  }

  if (options.user && options.user.authenticated && options.user.xcrf_token) {
    requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': options.user.xcrf_token,
    };
  }

  try {
    const response = await fetch(url, {...options, headers: requestHeaders});
    const json = await response.json();
    return Promise.resolve(json);
  } catch (error) {
    return Promise.reject(error);
  }
};
