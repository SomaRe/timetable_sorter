const skeleton = ["Theory","Start","08:00","09:00","10:00","11:00","12:00","-","Lunch","14:00","15:00","16:00","17:00","18:00","18:50","19:01","End","08:50","09:50","10:50","11:50","12:50","-","Lunch","14:50","15:50","16:50","17:50","18:50","19:00","19:50","Lab","Start","08:00","08:46","10:00","10:46","11:31","12:16","Lunch","14:00","14:46","16:00","16:46","17:31","18:16","-","End","08:45","09:30","10:45","11:30","12:15","13:00","Lunch","14:45","15:30","16:45","17:30","18:15","19:00","-","MON","Theory","A1","F1","D1","TB1","TG1","-","Lunch","A2","F2","D2","TB2","TG2","-","V3","Lab","L1","L2","L3","L4","L5","L6","Lunch","L31","L32","L33","L34","L35","L36","-","TUE","Theory","B1","G1","E1","TC1","TAA1","-","Lunch","B2","G2","E2","TC2","TAA2","-","V4","Lab","L7","L8","L9","L10","L11","L12","Lunch","L37","L38","L39","L40","L41","L42","-","WED","Theory","C1","A1","F1","V1","V2","-","Lunch","C2","A2","F2","TD2","TBB2","-","V5","Lab","L13","L14","L15","L16","L17","L18","Lunch","L43","L44","L45","L46","L47","L48","-","THU","Theory","D1","B1","G1","TE1","TCC1","-","Lunch","D2","B2","G2","TE2","TCC2","-","V6","Lab","L19","L20","L21","L22","L23","L24","Lunch","L49","L50","L51","L52","L53","L54","-","FRI","Theory","E1","C1","TA1","TF1","TD1","-","Lunch","E2","C2","TA2","TF2","TDD2","-","V7","Lab","L25","L26","L27","L28","L29","L30","Lunch","L55","L56","L57","L58","L59","L60","-","SAT","Theory","V8","X11","X12","Y11","Y12","-","Lunch","X21","Z21","Y21","W21","W22","-","V9","Lab","L71","L72","L73","L74","L75","L76","Lunch","L77","L78","L79","L80","L81","L82","-","SUN","Theory","V10","Y11","Y12","X11","X12","-","Lunch","Y21","Z21","X21","W21","W22","-","V11","Lab","L83","L84","L85","L86","L87","L88","Lunch","L89","L90","L91","L92","L93","L94","-"]

function viewtt(){
    var s = document.getElementById("stud_tt").value.split(/\s/);
    console.log(skeleton.length);
    if(s.length==279){
    document.getElementById('textareaerror').innerHTML="";
    document.getElementById("enable").disabled = false;
    }
    else{
        document.getElementById('textareaerror').innerHTML="Check the copied timetabble";
    }
    var stud_slots = [];
    for(var i =0;i<skeleton.length;i++){
        if(skeleton[i]!=s[i]){
            stud_slots.push(s[i]);
        }
    }
    console.log(stud_slots);

    const cells = document.querySelectorAll('td');
    for(var j =0;j<skeleton.length;j++){
        document.querySelectorAll('td')[j].innerHTML=s[j];
        if(skeleton[j]!=s[j]){
            document.querySelectorAll('td')[j].style.backgroundColor = "#CCFF33";
            document.querySelectorAll('td')[j].style.color = "black";
        }
    }
}

function view_stud_tt(s) {
    var s = s.split(/,/);
    console.log(s);
    const cells = document.querySelectorAll('td');
    for(var j =0;j<skeleton.length;j++){
        document.querySelectorAll('td')[j].innerHTML=s[j];
        if(skeleton[j]!=s[j]){
            document.querySelectorAll('td')[j].style.backgroundColor = "#CCFF33";
            document.querySelectorAll('td')[j].style.color = "black";
        }
    }
}
function del(){
    return confirm('delete record');
}