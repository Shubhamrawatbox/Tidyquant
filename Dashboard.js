const Data = {
  Shubham: {
    fname: "Shubham",
    axis: [60, 20, 20],
    axis2: [450, 420, 460],
  },
  Rahul: {
    fname: "Rahul",
    axis: [10, 50, 40],
    axis2: [300, 120, 160],
  },
  Gaurav: {
    fname: "Gaurav",
    axis: [30, 50, 40],
    axis2: [350, 120, 560],
  },
};

let Axis1 = Data.Shubham.axis;
let Axis2 = Data.Rahul.axis;
let Axis3 = Data.Gaurav.axis;

let Yaxis1 = Data.Shubham.axis2;
let Yaxis2 = Data.Rahul.axis2;
let Yaxis3 = Data.Gaurav.axis2;

document.getElementById(
  "people"
).innerHTML = `<option>${Data.Shubham.fname}</option>
<option>${Data.Rahul.fname}</option>
<option>${Data.Gaurav.fname}</option>
`;

const showmenu = () => {
  document.querySelector(".navbar-list").classList.toggle("active");
};

var check = (checkaxis) => {
  console.log(checkaxis);
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Desktop Browser Market Share in 2016",
    },
    data: [
      {
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: checkaxis[0], label: "js" },
          { y: checkaxis[1], label: "css" },
          { y: checkaxis[2], label: "c++" },
        ],
      },
    ],
  });
  chart.render();
};

//linechart

var check2 = (checkyaxis) => {
  console.log(checkyaxis);
  var charts = new CanvasJS.Chart("chartContainers", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Simple Line Chart",
    },
    data: [
      {
        type: "line",
        indexLabelFontSize: 16,
        dataPoints: [
          { y: checkyaxis[0] },
          { y: checkyaxis[1] },
          { y: checkyaxis[2] },
        ],
      },
    ],
  });
  charts.render();
};

function onInput(e) {
  if (e.target.value === Data.Shubham.fname) {
    check(Axis1);
    check2(Yaxis1);
  } else if (e.target.value === Data.Rahul.fname) {
    check(Axis2);
    check2(Yaxis2);
  } else if (e.target.value === Data.Gaurav.fname) {
    check(Axis3);
    check2(Yaxis3);
  }
}
