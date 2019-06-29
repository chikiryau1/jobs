const PATH = process.env.REACT_APP_PATH;

function get (url, ...params) {
  console.log('GET', url);

  const GET = {
    method: 'GET',
    ...params
  };

  return fetch(url, GET)
    .then(res => {
      console.log(res);
      return res.json()
    })
    .catch(e => {
      console.log(e);
      throw e
    })
}

export default class Data {
  getJobsList (...args) {
    return get(PATH, ...args)
  }
}
