var  studentMarks = parseInt(prompt("please enter marks scored, '-1' to stop"));
if (studentMarks === -1) {
    alert ("Not a valid mark")
}
var grade = "";

if(studentMarks <= 79 && studentMarks <= 100)
    grade = "A";
else if(studentMarks >= 60 && studentMarks < 79)
    grade = "B";
else if(studentMarks >= 49 && studentMarks <= 59)
    grade = "C";
else if (studentMarks >= 40 && studentMarks < 49)
    grade = "D";
else if (studentMarks >= 0 && studentMarks < 40)
    grade = "E";
else
    grade = "Invalid grade";

    
if (grade == "Invalid grade")
    alert("\nInvalid grade:")
else 
    alert ("Your score is: " + grade)
