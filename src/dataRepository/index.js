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


function formatData(data) {
  const { created_at } = data;
  data.created_at = new Date(created_at).toDateString();
  return data
}

export function getJobsList(...args) {
  return get(`${PATH}.json?${serialize(...args)}`, ...args)
    .then(data => {
      return data.map(formatData)
    })
}

export function getJob(id) {
  return get(`${PATH}/${id}.json`)
    .then(formatData)
}

