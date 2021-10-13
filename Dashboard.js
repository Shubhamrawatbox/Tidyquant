const Name = [
  {
    fname: "shubhams",
    js:50,
    css:50,
  },
  {
    fname: "gaurav",
    js:45,
    css:55,
  },
];



const Gender = [
  {
    gender: "Male",
  },
  {
    gender: "Female",
  },
  {
    gender: "Other",
  },
];

document.getElementById("selectgender").innerHTML = Gender.map(
  (items, index) => {
    return `
  <option key=${index} value=${items.gender}></option>
  `;
  }
);
document.getElementById("people").innerHTML = Name.map((items, index) => {
  return `
  <option key=${index} value=${items.fname}></option>
  `;
});

const showmenu = () => {
  document.querySelector(".navbar-list").classList.toggle("active");
};

//pie chart
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Desktop Search Engine Market Share - 2016",
    },
    data: [
      {
        type: "pie",
        startAngle: 240,
        yValueFormatString: '##0.00"%"',
        indexLabel: "{label} {y}",
        dataPoints: [
          { y: Name.map((e)=>{
            e.js
          }), label: "Google" },
        ],
      },
    ],
  });
  chart.render();
};

let namesss = Name.map((names) => {
  return names.fname;
});
// get data
function onInput(e) {
  var chart = document.getElementById("chartContainer");

  if (e.target.value === "shubhams") {
    console.log(namesss);
    chart.style.visibility = "visible";
  }
}
