const usersBtn = $("#getUsers");
const genderContainer = $("#genderContainer");
const countriesContainer = $("#countriesContainer");
usersBtn.on("click", async () => {
  try {
    const result = await getUsers({
      url: `https://randomuser.me/api?results=50`,
    });
    const { results } = result;
    const gender = _genderSelection(results);
    const countries = _countriesSelection(results);
    _draw(gender, countries);
  } catch (error) {
    alert("ERROR");
  }

  function _genderSelection(usersArray) {
    const genderSelection = usersArray.map((user) => user.gender);
    const maleStatistic = genderSelection.filter(
      (userGender) => userGender === "male"
    );

    const femaleStatistic = genderSelection.filter(
      (userGender) => userGender === "female"
    );
    const numerOfParticipants =
      $(maleStatistic).length + $(femaleStatistic).length;
    const percentagePerUser = 100 / numerOfParticipants;
    return {
      male: $(maleStatistic).length * percentagePerUser,
      female: $(femaleStatistic).length * percentagePerUser,
    };
  }

  function _countriesSelection(usersArray) {
    const countries = usersArray.reduce((obj, user) => {
      const { country } = user.location;
      const count = obj[country] || 0;
      return { ...obj, [country]: count + 1 };
    }, {});

    const countryKeyVal = Object.entries(countries);
constcountryResult= countryKeyVal.forEach(countryArray => {
    
});

    return countryKeyVal;
  }

  function _draw(genderPercentages, countriesObj) {
    const genderTable = $(`<table>
    <tr>
    <th>Male</th>
    <th>Female</th>
    </tr>
    <tr>
    <td>${genderPercentages.male}%</td>
    <td>${genderPercentages.female}%</td>
    </tr>
    
  </table>
  `);
    console.log(countriesObj);

    genderContainer.append(genderTable);
  }
});
