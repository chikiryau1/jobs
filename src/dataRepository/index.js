const PATH = process.env.REACT_APP_PATH;

const serialize = obj => Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');

function get (url) {
  console.log('GET', url);

  const GET = {
    method: 'GET'
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


export function getJobsList(...args) {
  return get(`${PATH}.json?${serialize(...args)}`, ...args)
}

export function getJob(id) {
  return get(`${PATH}/${id}.json`)
}

