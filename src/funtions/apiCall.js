const apiCall = async (jwt_token,count) => {
    console.log("API_CALL",count);
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${jwt_token}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return fetch(
    'https://api-bdc.net/data/reverse-geocode?latitude=33.517102825801324&longitude=73.10715268141338&localityLanguage=en&key=bdc_19e9091f566343c2a674266355fcfe4f',
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      return {
        status: true,
        data: result,
        errorMessage: null,
      };
    })
    .catch(error => {
      return {
        status: false,
        data: null,
        errorMessage: JSON.stringify(error),
      };
    });
};

export default apiCall;
