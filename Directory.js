const directory = [
  {
    name: "Mayra",
    tel: "3332012819",
    gender: "Female",
    location: "GDL"
  },
  {
    name: "Carlos",
    tel: "6143521268",
    gender: "Male",
    location: "CUU"
  },
  {
    name: "Alma",
    tel: "6141521732",
    gender: "Female",
    location: "CUU"
  },
  {
    name: "Claudia",
    tel: "3332235412",
    gender: "Female",
    location: "GDL"
  },
  {
    name: "Rodrigo",
    tel: "1521053269",
    gender: "Male",
    location: "USA"
  }
];
//SORT
const sorting = data => {
  data.sort((a, b) => {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
  });
};
sorting(directory);
//console.log(directory);

//FILTER
const filtering = (data, prop, value) => {
  return data.filter(x => x[prop] === value);
};

const filteredDirectory = filtering(directory, "location", "GDL");
sorting(directory);
//console.log(filteredDirectory);

//GROUP
const grouping = (data, prop) => {
  return data.reduce((current, x) => {
    if (!current[x[prop]]) {
      current[x[prop]] = [];
    }
    current[x[prop]].push(x);
    return current;
  }, {});
};

const groupedDirectory = grouping(directory, "gender");
console.log(groupedDirectory);

//MAP
const mapColor = data => {
    return data.map(x => {
        return {...x, color: x.gender === "Male" ? "Red" : "Blue"}
    })
}

sorting(directory);
const finalDirectory= grouping(mapColor(filtering(directory, "location", "GDL")), "gender");
console.log(finalDirectory);