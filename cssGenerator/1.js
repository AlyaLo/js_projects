document.getElementById('radius').oninput = radiusGenerator;

function radiusGenerator(){
    let div = document.getElementById('rectangle');

    div.style.borderRadius = this.value + 'px';

    document.getElementById('out').innerHTML = 'border-radius: ' + this.value + 'px;';
}


document.getElementById('color').oninput = colorGenerator;

function colorGenerator(){
    let div = document.getElementById('rectangle');

    div.style.backgroundColor = this.value;

    document.getElementById('out1').innerHTML = 'background-color: ' + this.value + ';';
}

document.getElementById('border').oninput = borderGenerator;

function borderGenerator(){
    let div = document.getElementById('rectangle');

    div.style.borderWidth = this.value + 'px';

    document.getElementById('out2').innerHTML = 'border-width: ' + this.value + 'px;';
}