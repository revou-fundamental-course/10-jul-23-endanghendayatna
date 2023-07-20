// Get form element
const bmiForm = document.getElementById("bmiForm");

// Add event listener to form submit
bmiForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById("input-bb").value);
    const age = parseInt(document.getElementById("input-usia").value);
    const height = parseInt(document.getElementById("input-tb").value);

    // Calculate BMI
    const bmi = weight / Math.pow(height / 100, 2);

    // Determine BMI category based on gender and BMI value
    let category;
    if (gender === "male") {
        if (bmi < 18.5) {
            category = "Kurus";
        } else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal";
        } else if (bmi >= 25 && bmi < 30) {
            category = "Gemuk";
        } else {
            category = "Obesitas";
        }
    } else {
        if (bmi < 17) {
            category = "Kurus";
        } else if (bmi >= 17 && bmi < 23) {
            category = "Normal";
        } else if (bmi >= 23 && bmi < 27) {
            category = "Gemuk";
        } else {
            category = "Obesitas";
        }
    }

    // Display BMI result
    document.querySelector(".weight-category").textContent = `(${
        gender === "male" ? "Pria" : "Wanita"
    })`;
    document.querySelector(".result-number").textContent = bmi.toFixed(2);
    document.querySelector(".weight-category").textContent = category;

    // Scroll to the result section
    const resultSection = document.getElementById("Result");
    resultSection.scrollIntoView({ behavior: "smooth" });
});

// Add event listener to reset button
document.querySelector(".reset").addEventListener("click", function () {
    document.getElementById("bmiForm").reset();
    document.querySelector(".result-number").textContent = "-";
    document.querySelector(".weight-category").textContent = "";
});
