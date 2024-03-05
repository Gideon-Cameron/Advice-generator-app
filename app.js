let array = ["Get Good", "Be a savege", "Keep your values", "Be a man of your word",
"If you dont respect yourself then nobady else will", "Work out", "suround yourself with succesfull people",
"Dont lose sight of your goal", "Keep going", "Dont stop", "Good things take time",
"It is easy to sit up and take notice, what's difficult is getting up and taking action",
"Dont be afread to let go of negitive things", "It would be a good idea to hire the creator of this website",
"Keep your bounderies", "Value good friends", "Always seek to learn more"
]



function Advice() {
    let text = document.getElementById("change")
    let num = Math.round(16*Math.random());
    text.innerText = array[num]
    let number = document.getElementById("number");
    number.innerText = num

}