
$(document).ready(function() {
  $("#calculate-button").click(function() {
    var mark1 = parseFloat($("#first-grade").val());
    var mark2 = parseFloat($("#second-grade").val());
    var mark3 = parseFloat($("#third-grade").val());
    var mark4 = parseFloat($("#forth-grade").val());
    var mark5 = parseFloat($("#fifth-grade").val());
    
    if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3) || isNaN(mark4) || isNaN(mark5)) {
      alert("Please enter valid marks for all courses.");
      return;
    }
    
    var unit1 = parseInt($("#unit1").attr("value"));
    var unit2 = parseInt($("#unit2").text());
    var unit3 = parseInt($("#unit3").attr("value"));
    var unit4 = parseInt($("#unit4").attr("value"));
    var unit5 = parseInt($("#unit5").attr("value"));
    
    var grade1 = getGrade(mark1);
    var grade2 = getGrade(mark2);
    var grade3 = getGrade(mark3);
    var grade4 = getGrade(mark4);
    var grade5 = getGrade(mark5);

    var lGrade1 = letterGrade(mark1);
    var lGrade2 = letterGrade(mark2);
    var lGrade3 = letterGrade(mark3);
    var lGrade4 = letterGrade(mark4);
    var lGrade5 = letterGrade(mark5);
    
    var totalUnits = unit1 + unit2 + unit3 + unit4 + unit5;
    var totalGradePoints = (unit1 * grade1) + (unit2 * grade2) + (unit3 * grade3) + (unit4 * grade4) + (unit5 * grade5);
    var cgpa = totalGradePoints / totalUnits;
    
    $("#first-letter").text(lGrade1);
    $("#second-letter").text(lGrade2);
    $("#third-letter").text(lGrade3);
    $("#forth-letter").text(lGrade4);
    $("#fifth-letter").text(lGrade5);
    
    $("#cgpa-result").text(cgpa.toFixed(2));
  });
});

function letterGrade(mark) {
  if (mark >= 90) {
    var marks = "A";
  } else if (mark >= 85 && mark <= 89.9) {
    var marks = "A-";
  } else if (mark >= 80 && mark <= 84.9) {
    var marks = "B+";
  } else if (mark >= 75 && mark <= 79.9) {
    var marks = "B";
  } else if (mark >= 70 && mark <= 74.9) {
    var marks = "B-";
  } else if (mark >= 65 && mark <= 69.9) {
    var marks = 'C+';
  } else if (mark >= 60 && mark <= 64.9) {
    var marks = "C";
  } else if (mark >= 56 && mark <= 59.9) {
    var marks = "C-";
  } else if (mark >= 53 && mark <= 55.9) {
    var marks = "D+";
  } else if (mark >= 50 && mark <= 52.9) {
    var marks = "D";
  } else if (mark >= 40 && mark <= 49.9) {
    var marks = "D-";
  } else if (isNaN(mark)) {
    marks = 'F';
  } else {
    var marks = "F";
  }
  return marks;
}

function getGrade(mark) {
  if (mark >= 85) {
    return 4.0;
  } else if (mark >= 80) {
    return 3.7;
  } else if (mark >= 75) {
    return 3.3;
  } else if (mark >= 70) {
    return 3.0;
  } else if (mark >= 65) {
    return 2.7;
  } else if (mark >= 60) {
    return 2.3;
  } else if (mark >= 55) {
    return 2.0;
  } else if (mark >= 50) {
    return 1.7;
  } else if (mark >= 45) {
    return 1.3;
  } else if (mark >= 40) {
    return 1.0;
  } else {
    return 0.0;
  }
}

