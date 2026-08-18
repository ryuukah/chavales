const profiles = {

  keonho: {
    username: "Keonho",
    avatar: "keonho.png",
    information: `
      <p>
        Anh Keonho, born in 02/14/09 in Suwon,
        Gyeonggi Province, South Korea, Aquarius,
        Korean—lowkey Argentinian—currently living
        in Boedo, Buenos Aires.
      </p>

      <p>
        Non-religious. Attending Perfect 10 Academy
        as a student in 5-2. Fluent in Korean,
        Spanish and English.
      </p>

      <p>interests match 95%</p>
    `,
    accepted: `
      <p>( ♥‿♥ ) friend request accepted!</p>
      <p>Keonho is now your friend ♡</p>
    `,
    declined: `
      <p>(╥﹏╥) request declined...</p>
      <p>maybe next time?</p>
    `
  },


  seonghyeon: {
    username: "Seonghyeon",
    avatar: "seonghyeon.png",
    information: `
      <p>
        Eom Seonghyeon, born in 01/13/09 in Seo-gu,
        Daejeon, South Korea, Capricorn, currently
        living in Avenida Rivadavia, Buenos Aires.
      </p>

      <p>
        Non-religious. Attending Perfect 10 Academy
        as a student in 5-2. Fluent in Korean,
        Spanish and English.
      </p>

      <p>interests match 93%</p>
    `,
    accepted: `
      <p>( ♥‿♥ ) friend request accepted!</p>
      <p>Seonghyeon is now your friend ♡</p>
    `,
    declined: `
      <p>(╥﹏╥) request declined...</p>
      <p>maybe next time?</p>
    `
  },


  juhoon: {
    username: "Juhoon",
    avatar: "juhoon.png",
    information: `
      <p>
        Kim Juhoon, born in 01/03/08 in Seoul,
        South Korea, Capricorn, currently living
        in Avenida Rivadavia, Buenos Aires,
        near Seonghyeon.
      </p>

      <p>
        Atheist. Student in Perfect 10 Academy, 5-2.
        Fluent in Korean, English and Spanish.
      </p>

      <p>interests match 97%</p>
    `,
    accepted: `
      <p>( ♥‿♥ ) friend request accepted!</p>
      <p>Juhoon is now your friend ♡</p>
    `,
    declined: `
      <p>(╥﹏╥) request declined...</p>
      <p>maybe next time?</p>
    `
  },


  martin: {
    username: "Martin",
    avatar: "martin.png",
    information: `
      <p>
        Martin Edwards Park, born in 03/20/08 in
        Argentina, Capricorn, Argentine & Korean—
        lowkey Korean—currently living in Boedo,
        Buenos Aires.
      </p>

      <p>
        Non-religious. Student in Perfect 10 Academy,
        5-2. Fluent in Korean, Spanish and English.
      </p>

      <p>interests match 99%</p>
    `,
    accepted: `
      <p>( ♥‿♥ ) friend request accepted!</p>
      <p>Martin is now your friend ♡</p>
    `,
    declined: `
      <p>(╥﹏╥) request declined...</p>
      <p>maybe next time?</p>
    `
  },


  james: {
    username: "James",
    avatar: "james.png",
    information: `
      <p>
        Zhao Yuan, born in 14/10/07 in China,
        Hong Kong Administrative Region, Libra,
        Thai-Hong Kongese, currently living in
        Boedo, Buenos Aires.
      </p>

      <p>
        Non Religious. Student in Perfect 10 Academy,
        5-2. Fluent in Thai, Chinese, Spanish,
        English and Korean.
      </p>

      <p>interests match 94%</p>
    `,
    accepted: `
      <p>( ♥‿♥ ) friend request accepted!</p>
      <p>James is now your friend ♡</p>
    `,
    declined: `
      <p>(╥﹏╥) request declined...</p>
      <p>maybe next time?</p>
    `
  },


  wonhee: {
    username: "Wonhee",
    avatar: "wonhee.png",
    information: `
      <p>
        Lee Wonhee, born 06/26/08 in Busan,
        South Korea, Cancer, Korean & Argentine,
        currently living in Boedo.
      </p>

      <p>
        Non-religious. Student in Perfect 10 Academy,
        specialized in Economy. Fluent in Korean
        and Spanish.
      </p>

      <p>interests match 98%</p>
    `,
    accepted: `
      <p>( ♥‿♥ ) friend request accepted!</p>
      <p>Wonhee is now your friend ♡</p>
    `,
    declined: `
      <p>(╥﹏╥) request declined...</p>
      <p>maybe next time?</p>
    `
  },


  yunah: {
    username: "Yunah",
    avatar: "yunah.png",
    information: `
      <p>
        Noh Yunah, born 01/15/08 in Chungju,
        South Korea, Capricorn, Korean & Argentine,
        currently living in Caballito.
      </p>

      <p>
        Non-religious. Student in Perfect 10 Academy,
        specialized in Economy. Fluent in Korean,
        Spanish and English.
      </p>

      <p>interests match 90%</p>
    `,
    accepted: `
      <p>( ♥‿♥ ) friend request accepted!</p>
      <p>Yunah is now your friend ♡</p>
    `,
    declined: `
      <p>(╥﹏╥) request declined...</p>
      <p>maybe next time?</p>
    `
  }

};


/* =========================================
   ELEMENTS
========================================= */

const profileCards =
  document.querySelectorAll(".profile-card");

const message =
  document.getElementById("message");

const mainAvatar =
  document.getElementById("mainAvatar");

const mainUsername =
  document.getElementById("mainUsername");

const acceptBtn =
  document.getElementById("acceptBtn");

const declineBtn =
  document.getElementById("declineBtn");


/* =========================================
   CURRENT PROFILE
========================================= */

let currentProfile = "keonho";


/* =========================================
   PROFILE STATES
========================================= */

const profileStates = {};

Object.keys(profiles).forEach((key) => {

  profileStates[key] = "original";

});


/* =========================================
   CHANGE MESSAGE
========================================= */

function changeMessage(content) {

  message.classList.remove("changed");

  void message.offsetWidth;

  message.innerHTML = content;

  message.classList.add("changed");
}


/* =========================================
   LOAD PROFILE
========================================= */

function loadProfile(profileKey) {

  const profile = profiles[profileKey];

  if (!profile) {
    return;
  }

  currentProfile = profileKey;

  mainAvatar.src = profile.avatar;
  mainAvatar.alt = profile.username;

  mainUsername.textContent = profile.username;


  /* Update selected card */

  profileCards.forEach((card) => {

    card.classList.toggle(
      "active",
      card.dataset.profile === profileKey
    );

  });


  /* Show the profile's current state */

  if (profileStates[profileKey] === "accepted") {

    changeMessage(profile.accepted);

  }

  else if (profileStates[profileKey] === "declined") {

    changeMessage(profile.declined);

  }

  else {

    changeMessage(profile.information);

  }

}


/* =========================================
   CLICK PROFILE
========================================= */

profileCards.forEach((card) => {

  card.addEventListener("click", () => {

    const profileKey = card.dataset.profile;

    loadProfile(profileKey);

  });

});


/* =========================================
   ACCEPT
========================================= */

acceptBtn.addEventListener("click", () => {

  const profile = profiles[currentProfile];

  profileStates[currentProfile] = "accepted";

  changeMessage(profile.accepted);

});


/* =========================================
   DECLINE
========================================= */

declineBtn.addEventListener("click", () => {

  const profile = profiles[currentProfile];

  profileStates[currentProfile] = "declined";

  changeMessage(profile.declined);

});


/* =========================================
   INITIAL PROFILE
========================================= */

loadProfile("keonho");
