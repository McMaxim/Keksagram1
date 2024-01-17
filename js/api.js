
const getData = (onSuccess,errorFun) => {
  fetch('https://25.javascript.pages.academy/kekstagram/dat',
    {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      errorFun(err);
    });
};


export {getData};
