let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = "Good Evening, User";
    // add name as template literal
}else if (hourNow > 12) {
    greeting = "Good Afternoon";
} else if (hourNow > 0) {
    greeting = 'Good Morning';
} else { greeting = 'Welcome (calculator error occured)';
}

document.write(greeting);