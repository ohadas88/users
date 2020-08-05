const url = "https://restcountries.eu/rest/v2/";

async function getCountries() {
  let result = await $.ajax({
    url: `${url}all`,
    method: "GET",
  });
  result = result.reduce((obj, counrty) => {
    const { borders } = counrty;
    borders.forEach((border) => {
      const count = obj[border] || 0;
      obj[border] = count + 1;
    });
    return obj;
  }, {});
  console.log(result);
}


