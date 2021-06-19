function removeProp() {
    var student = {
            name : "David Rayy",
            class : "VI",
            rollno : 12
        }
    student.point=7.8;
    console.log(student);
    console.log(student.name);
    console.log(student["name"]);

    for(var key in student)
    {
    	if(key==='class')
    		console.log(key);
    }

    student["key"] = "sth";

    var key1="abc";
    student[key1]="bao";
}

removeProp();
