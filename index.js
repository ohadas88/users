const usersBtn = $("#getUsers");
const genderContainer = $("#genderContainer");
usersBtn.on("click", async () => {
  try {
    const result = await getUsers({
      url: `https://randomuser.me/api?results=50`,
    });
    const { results } = result;
    const gender = genderSelection(results);
    console.log(gender);
  } catch (error) {
    alert("ERROR");
  }

  function genderSelection(usersArray) {
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
});
