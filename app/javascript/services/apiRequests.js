function getProducts() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //add json
      const responses = JSON.parse(this.response.text);
      console.log(responses);
      return responses.data;
    };
  }

  xhttp.open("GET", "localhost:3000/products", true);
  xhttp.send();
}

export { getProducts };
