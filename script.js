

function ageCalculator() {

    let name = document.getElementById("name").value;
    let birthYear = document.getElementById("age1").value;
    let currentYear = new Date().getFullYear();

    
    if (birthYear === "" || isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
        document.getElementById("result").innerHTML = "❌ Please enter a valid birth year.";
        return;
    }

    let age = currentYear - birthYear;
    document.getElementById("result").innerHTML = `🎉 Hello, ${name}! You are ${age} years old.`;
}
