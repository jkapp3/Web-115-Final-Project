
function generateNewPage() {

  var email = document.getElementById('email').value;

  // Check if the email is valid
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  // Create a new HTML document
  var newPage = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Meal Planner</title></head><body>";

  // Open the new HTML document in a new window or tab
  var newWindow = window.open();
  newWindow.document.write(newPage);

  newWindow.document.write("<h1>Your Meal Plan</h1>");

  // Get the form elements and their values
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  for (var i = 0; i < days.length; i++) {
      writeMealPlan(newWindow, days[i]);
  }

  newWindow.document.write("<button id='saveButton'>Save</button>\t");
  newWindow.document.write("<button id='clearButton'>Clear</button>\t");
  newWindow.document.write("<button id='printButton'>Print</button>\t");

  newWindow.document.getElementById('saveButton').addEventListener('click', function() {
    saveMealPlan(newWindow);
  });
  newWindow.document.getElementById('clearButton').addEventListener('click', function() {
    clearMealPlan(newWindow);
  });
  newWindow.document.getElementById('printButton').addEventListener('click', function() {
    newWindow.print();
  });
}

function writeMealPlan(newWindow, day) {
  var breakfast = document.getElementById(day.toLowerCase() + "-breakfast").value;
  var snack1 = document.getElementById(day.toLowerCase() + "-snack-1").value;
  var lunch = document.getElementById(day.toLowerCase() + "-lunch").value;
  var snack2 = document.getElementById(day.toLowerCase() + "-snack-2").value;
  var dinner = document.getElementById(day.toLowerCase() + "-dinner").value;

  newWindow.document.write("<div style='display: inline-block; vertical-align: top; margin-right: 100px;'>");
  newWindow.document.write("<h2>" + day + "</h2>");
  newWindow.document.write("<p>Breakfast: " + breakfast + "</p>");
  newWindow.document.write("<p>Snack 1: " + snack1 + "</p>");
  newWindow.document.write("<p>Lunch: " + lunch + "</p>");
  newWindow.document.write("<p>Snack 2: " + snack2 + "</p>");
  newWindow.document.write("<p>Dinner: " + dinner + "</p>");
  newWindow.document.write("</div>");
}

document.getElementById('submit').addEventListener('click', function() {
  generateNewPage();
});

function saveMealPlan(newWindow) {
  var mealPlanData = {
    Monday: getDayMeals("monday", newWindow),
    Tuesday: getDayMeals("tuesday", newWindow),
    Wednesday: getDayMeals("wednesday", newWindow),
    Thursday: getDayMeals("thursday", newWindow),
    Friday: getDayMeals("friday", newWindow),
    Saturday: getDayMeals("saturday", newWindow),
    Sunday: getDayMeals("sunday", newWindow)
  };

  // Save the meal plan data to local storage
  localStorage.setItem('mealPlanData', JSON.stringify(mealPlanData));

  console.log("Meal plan saved:", mealPlanData);
  newWindow.alert("Meal plan saved!");
}

function getDayMeals(day, newWindow) {
  var breakfast = newWindow.document.getElementById(day + "-breakfast").value;
  var snack1 = newWindow.document.getElementById(day + "-snack-1").value;
  var lunch = newWindow.document.getElementById(day + "-lunch").value;
  var snack2 = newWindow.document.getElementById(day + "-snack-2").value;
  var dinner = newWindow.document.getElementById(day + "-dinner").value;

  return {
    breakfast: breakfast,
    snack1: snack1,
    lunch: lunch,
    snack2: snack2,
    dinner: dinner
  };
}

function clearMealPlan(newWindow) {
  newWindow.document.body.innerHTML = '';
  newWindow.location.reload();
}

function handleClick() {
  generateNewPage(); 
}

function isValidEmail(email) {
  // Regular expression for validating email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


