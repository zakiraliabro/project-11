function result(){
    let EnglishObtained = +document.getElementById("Subject-English").value
    let MathObtained = +document.getElementById("Subject-Math").value
    let UrduObtained = +document.getElementById("Subject-Urdu").value
    let PhysisObtained = +document.getElementById("Subject-Physis").value

    

    document.getElementById("English-obtained-mark").innerText = EnglishObtained
    document.getElementById("Math-obtained-mark").innerText = MathObtained
    document.getElementById("Urdu-obtained-mark").innerText = UrduObtained
    document.getElementById("Physis-obtained-mark").innerText = PhysisObtained


    let TotalStudentObtainedMark = EnglishObtained + MathObtained + UrduObtained + PhysisObtained

    document.getElementById("Student-Obtained-Mark").innerText = TotalStudentObtainedMark


    let EnglishTotal = +document.getElementById("Subject-Total-English").value
    let MathTotal = +document.getElementById("Subject-Total-Math").value
    let UrduTotal = +document.getElementById("Subject-Total-Urdu").value
    let PhysisTotal = +document.getElementById("Subject-Total-Physis").value
    
    document.getElementById("English-Total-mark").innerText = EnglishTotal
    document.getElementById("Math-Total-mark").innerText = MathTotal
    document.getElementById("Urdu-Total-mark").innerText = UrduTotal
    document.getElementById("Physis-Total-mark").innerText = PhysisTotal

    
    
    let totalmark = EnglishTotal + MathTotal + UrduTotal + PhysisTotal



    document.getElementById("total-mark").innerText = totalmark
    
    
    let percentage = (TotalStudentObtainedMark / totalmark) * 100
    
    
    document.getElementById("student-percentage").innerText = percentage +"%"
    

if (percentage >= 90) {
    document.getElementById("grade").innerText = "A+"
} else if(percentage >= 80) {
    document.getElementById("grade").innerText = "A"
    
}else if(percentage >= 70){
    document.getElementById("grade").innerText = "B"

}else if(percentage >= 60){
    document.getElementById("grade").innerText = "C"

}else if(percentage >= 50){
    document.getElementById("grade").innerText = "D"

}else if(percentage >= 40){
    document.getElementById("grade").innerText = "E"

}else if(percentage <  40){
    document.getElementById("grade").innerText = "F"
    
}else{
    alert("Error-1")
}


let Englishpercentage = (EnglishObtained / EnglishTotal) *100
let Mathpercentage = (MathObtained / MathTotal) *100
let Urdupercentage = (UrduObtained / UrduTotal) *100
let Physispercentage = (PhysisObtained / PhysisTotal) *100

document.getElementById("English-Percentage").innerText = Englishpercentage + "%"
document.getElementById("Math-Percentage").innerText = Mathpercentage + "%"
document.getElementById("Urdu-Percentage").innerText = Urdupercentage + "%"
document.getElementById("Physis-Percentage").innerText = Physispercentage + "%"


if (Englishpercentage >= 90) {
    document.getElementById("English-Grade").innerText = "A+"
} else if(Englishpercentage >= 80) {
    document.getElementById("English-Grade").innerText = "A"
    
}else if(Englishpercentage >= 70){
    document.getElementById("English-Grade").innerText = "B"

}else if(Englishpercentage >= 60){
    document.getElementById("English-Grade").innerText = "C"

}else if(Englishpercentage >= 50){
    document.getElementById("English-Grade").innerText = "D"

}else if(Englishpercentage >= 40){
    document.getElementById("English-Grade").innerText = "E"

}else if(Englishpercentage <  40){
    document.getElementById("English-Grade").innerText = "F"
    
}else{
    alert("Error-2")
}







if (Mathpercentage >= 90) {
    document.getElementById("Math-Grade").innerText = "A+"
} else if(Mathpercentage >= 80) {
    document.getElementById("Math-Grade").innerText = "A"
    
}else if(Mathpercentage >= 70){
    document.getElementById("Math-Grade").innerText = "B"

}else if(Mathpercentage >= 60){
    document.getElementById("Math-Grade").innerText = "C"

}else if(Mathpercentage >= 50){
    document.getElementById("Math-Grade").innerText = "D"

}else if(Mathpercentage >= 40){
    document.getElementById("Math-Grade").innerText = "E"

}else if(Mathpercentage <  40){
    document.getElementById("Math-Grade").innerText = "F"
    
}else{
    alert("Error-3")
}





if (Urdupercentage >= 90) {
    document.getElementById("Urdu-Grade").innerText = "A+"
} else if(Urdupercentage >= 80) {
    document.getElementById("Urdu-Grade").innerText = "A"
    
}else if(Urdupercentage >= 70){
    document.getElementById("Urdu-Grade").innerText = "B"

}else if(Urdupercentage >= 60){
    document.getElementById("Urdu-Grade").innerText = "C"

}else if(Urdupercentage >= 50){
    document.getElementById("Urdu-Grade").innerText = "D"

}else if(Urdupercentage >= 40){
    document.getElementById("Urdu-Grade").innerText = "E"

}else if(Urdupercentage <  40){
    document.getElementById("Urdu-Grade").innerText = "F"
    
}else{
    alert("Error-3")
}





if (Physispercentage >= 90) {
    document.getElementById("Physis-Grade").innerText = "A+"
} else if(Physispercentage >= 80) {
    document.getElementById("Physis-Grade").innerText = "A"
    
}else if(Physispercentage >= 70){
    document.getElementById("Physis-Grade").innerText = "B"

}else if(Physispercentage >= 60){
    document.getElementById("Physis-Grade").innerText = "C"

}else if(Physispercentage >= 50){
    document.getElementById("Physis-Grade").innerText = "D"

}else if(Physispercentage >= 40){
    document.getElementById("Physis-Grade").innerText = "E"

}else if(Physispercentage <  40){
    document.getElementById("Physis-Grade").innerText = "F"
    
}else{
    alert("Error-2")
}

}