const apartments = [
  {
    img: "https://circaoldhouses.com/wp-content/uploads/2017/10/key-hole-house-1.jpg",
    address: "P. Sherman 42 Wallabe Way, Sydney",
    price: 2400,
    rooms: 2,
    parking: false,
    immediate: true,
    contactDetails: {
      name: "Douglas",
      email: "doug@less.com",
    },
  },
  {
    img: "https://i.pinimg.com/736x/17/f2/6e/17f26e8f188af5d3e377dacb2011889a--mediterranean-houses-mediterranean-style.jpg",
    address: "Cherobee 21, South Boulevard",
    price: 12000,
    rooms: 5,
    parking: true,
    immediate: false,
    contactDetails: {
      name: "William",
      email: "will@i.am",
    },
  },
  {
    img: "https://blenderartists.org/uploads/default/original/4X/2/f/9/2f9d2a683dd5eada8bf64a590aa20a01312509ca.jpg",
    address: "100 Bonaroo Road, East Dingling",
    price: 1000,
    rooms: 3,
    parking: false,
    immediate: true,
    contactDetails: {
      name: "Rickay",
      email: "rrrrick@cucumber.com",
    },
  },
  {
    img: "http://mat2.materialicious.com/images/space-house-803-o.jpg",
    address: "McGraw Chukitee, 80",
    price: 2300,
    rooms: 4,
    parking: false,
    immediate: false,
    contactDetails: {
      name: "Charles",
      email: "charles.smith@coldmail.com",
    },
  },
  {
    img: "http://www.kucasnova.com/wp-content/uploads/2014/01/projekat-kuce-sa-potkrovljem-i-garazom-4-1.jpg",
    address: "A.D Nooks Plaza, 16 St.",
    price: 11000,
    rooms: 6,
    parking: true,
    immediate: true,
    contactDetails: {
      name: "Trevor",
      email: "t@noah.ark",
    },
  },
];
////////////////////////
const must = (radio) => radio.filter((rb) => rb.checked).length;

const findRelevantApts = function (
  address,
  minPrice,
  maxPrice,
  minRooms,
  maxRooms,
  immediate
) {
  let relevantApts = apartments.filter(
    (a) =>
      a.address.toLowerCase().includes(address.toLowerCase() || "") &&
      a.price >= (minPrice || 0) &&
      a.price <= (maxPrice || a.price) &&
      a.rooms >= (minRooms || 0) &&
      a.rooms <= (maxRooms || a.rooms)
  );

  immediate = !immediate[0].checked;
  return immediate ? relevantApts : relevantApts.filter((a) => a.immediate);
};
////////////
$("button").on("click", function () {
  let address = $("#addr-input").val();
  let minPrice = $("#min-p-input").val();
  let maxPrice = $("#max-p-input").val();
  let minRooms = $("#min-r-input").val();
  let maxRooms = $("#max-r-input").val();
  let immediate = $("#immed-y");

  let relevantApts = findRelevantApts(
    address,
    minPrice,
    maxPrice,
    minRooms,
    maxRooms,
    immediate
  );
  renderApts(relevantApts);
});

const renderApts = function (apartments) {
  $("#results").empty();
  const source = $("#tamplete").html();
  console.log(source);
  const template = Handlebars.compile(source);
  $("#results").append(template(apartments));
};

renderApts(apartments); //renders apartments when page loads
