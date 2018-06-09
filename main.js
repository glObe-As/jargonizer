function submit(direction) {
    var input = document.getElementById('input').value ;
    document.getElementById("status").innerHTML = "Status: getting rules"
    rules = get_formatting_rules(direction)
    document.getElementById("status").innerHTML = "Status: Starting applying rules"
    for (i = 0; i< rules.length; i++) {
        document.getElementById("status").innerHTML = "Status: "+ (i+1)*100/rules.length + "% done"
        input = input.replace(rules[i][0], rules[i][1]);
    }

    document.getElementById('output_area').innerHTML = input
}
function to_submit() {
    submit("to")
}
function back_submit(){
    submit("back")
}