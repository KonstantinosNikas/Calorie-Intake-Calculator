function calculateCalorieNeeds() {
  const age = document.getElementById('age').value;
  const weight = document.getElementById('weight').value; // in pounds
  const heightFt = (document.getElementById('height').value); // in foots
  const gender = document.getElementById('gender').value;
  const activityLevel = document.getElementById('activity').value;
  const height = 12*heightFt;
  if(age == "" || weight == "" || height == "" || gender == ""){
      window.alert("Please fill in all the mandatory fields ");
  }else{
      let bmr;
      if (gender === 'male') {
          bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
      } else {
          bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
      }

      let multiplier;
      switch (activityLevel) {
          case 'sedentary': multiplier = 1.2; break;
          case 'lightly_active': multiplier = 1.375; break;
          case 'moderately_active': multiplier = 1.55; break;
          case 'very_active': multiplier = 1.725; break;
          case 'extra_active': multiplier = 1.9; break;
      }

      const tdee = bmr * multiplier;
      const maintenanceCalories = Math.round(tdee);
      const bulkCalories = Math.round(tdee * 1.1); // 10% surplus for bulking
      const cutCalories = Math.round(tdee * 0.8); // 20% deficit for cutting

      // Calculate macros
      const calculateMacros = (calories) => {
          const carbs = Math.round((calories * 0.5) / 4); // 4 calories per gram of carb
          const protein = Math.round((calories * 0.2) / 4); // 4 calories per gram of protein
          const fats = Math.round((calories * 0.3) / 9); // 9 calories per gram of fat
          return { carbs, protein, fats };
      };

      const maintenanceMacros = calculateMacros(maintenanceCalories);
      const bulkMacros = calculateMacros(bulkCalories);
      const cutMacros = calculateMacros(cutCalories);
      document.getElementById('calorie-needs-result').innerHTML = `
          <h3>Maintenance</h3>
          <p>Calories: ${maintenanceCalories} kcal/day</p>
          <p>Carbs: ${maintenanceMacros.carbs}g, Protein: ${maintenanceMacros.protein}g, Fats: ${maintenanceMacros.fats}g</p>
          <h3>Bulking</h3>
          <p>Calories: ${bulkCalories} kcal/day</p>
          <p>Carbs: ${bulkMacros.carbs}g, Protein: ${bulkMacros.protein}g, Fats: ${bulkMacros.fats}g</p>
          <h3>Cutting</h3>
          <p>Calories: ${cutCalories} kcal/day</p>
          <p>Carbs: ${cutMacros.carbs}g, Protein: ${cutMacros.protein}g, Fats: ${cutMacros.fats}g</p>
      `;
    }
  }


document.getElementById('unit').addEventListener('click', function() {
    window.location.href = 'file:///Users/kostasnikas/Desktop/Calorie%20Intake%20Calculator/BMR/EU/bmr.html';
});
  

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleBtn = document.querySelector('.toggle_btn'); // Assuming it's a class. Use # for ID
    const toggleBtnIcon = document.querySelector('.toggle_btn i'); // Correct selector for child `i` of `.toggle_btn`
    const dropDownMenu = document.querySelector('.dropdown_menu'); // Assuming it's a class. Use # for ID
  
    toggleBtn.onclick = function() {
      dropDownMenu.classList.toggle('open');
      const isOpen = dropDownMenu.classList.contains('open');
  
      // Correct way to change icon classes
      if (isOpen) {
        toggleBtnIcon.classList.remove('fa-bars');
        toggleBtnIcon.classList.add('fa-xmark');
      } else {
        toggleBtnIcon.classList.remove('fa-xmark');
        toggleBtnIcon.classList.add('fa-bars');
      }
    }
  });
  
  function toggleFullScreen() {
    var elem = document.getElementById("container");
    elem.classList.toggle("fullscreen");
  
    if (elem.classList.contains("fullscreen")) {
      // Adjust if in fullscreen mode
      elem.style.justifyContent = "center";
      elem.style.alignItems = "center";
    } else {
      // Revert adjustments when not in fullscreen
      elem.style.justifyContent = "";
      elem.style.alignItems = "";
    }
  }