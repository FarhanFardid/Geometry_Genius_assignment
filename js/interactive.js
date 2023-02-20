// navbar event handler 

document.getElementById('blog_btn').addEventListener('click', function(){

    window.location.href ="blog.html";
})

// card background color change functions



function rg(m, n) {
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}

function hex(i) {
    return i.toString(16);
}

function randColor() {
    return '#' + hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15)) +
        hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15));
}

function setBgColor(id){
    const clr  = randColor();
    
    document.getElementById(id).style.background = clr ;
    
}
// card wise color set
// 1. Triangle card
document.getElementById('triangle_card').addEventListener('mouseenter', function() {
    setBgColor('triangle_card');
});


// 2. Rectangle_card
document.getElementById('rectangle_card').addEventListener('mouseenter', function() {
    setBgColor('rectangle_card');
});

// 3. parallelogram_card
document.getElementById('parallelogram_card').addEventListener('mouseenter', function() {
    setBgColor('parallelogram_card');
});

// 4. Rhombus_card
document.getElementById('rhombus_card').addEventListener('mouseenter', function() {
    setBgColor('rhombus_card');
});

// 5. pentagon_card

document.getElementById('pentagon_card').addEventListener('mouseenter', function() {
    setBgColor('pentagon_card');
});

// 6. ellipse_card
document.getElementById('ellipse_card').addEventListener('mouseenter', function() {
    setBgColor('ellipse_card');
});

// area calculation function
function areaTriRomPen(val1, val2){
    const area = (0.5 * val1 * val2).toFixed(2);
    return area;
} 

function areaRectPara(val1, val2){
    const area = (val1 * val2).toFixed(2);
    return area;
}

function areaEllipse(val1,val2){
    const area = (3.14 * val1 * val2).toFixed(2);
    return area;
}
// result show in the area calculation part
function showArea(name, area){
    const showArea =document.getElementById('list_order');
    const li = document.createElement('li');
    let sup_val = "2";
    let sup = sup_val.sup();
   
          const shape = name + '';
          const result = area + '';
    li.innerHTML =  shape +' '+ result +' '+ "cm"+ sup ; 
    li.style.paddingLeft="5px";
    li.style.margin = "2px";
    showArea.appendChild(li);

    const btn= document.createElement('button');
    btn.innerHTML = "Convert to m"+sup ;
    btn.style.border ="1px";
    btn.style.background="blue";
    btn.style.color ="white";
    btn.style.padding="3px";
    btn.style.borderRadius = "3px";
    btn.style.margin="0 35px";
    showArea.appendChild(btn);
   
}

// triangle area with input validation
document.getElementById('triangle').addEventListener('click', function(){
    const base = document.getElementById('triangle-base');
    const baseNum = parseFloat(base.value);
    const height = document.getElementById('triangle-height');
    const heightNum = parseFloat(height.value);
   
    

    if((typeof (baseNum) !== 'number' || typeof (heightNum) !== 'number') || (baseNum < 0 || heightNum< 0) || (base.value.length == '0' || height.value.length == '0') ) {

        alert ("Please, Enter a valid positive  number input type for all the input");
        document.getElementById('triangle-base').value ='';
        document.getElementById('triangle-height').value ='';
    }
  
    else if((!/^[0-9]+$/.test(baseNum)) || (!/^[0-9]+$/.test(heightNum)))
    {
        alert("Please, Enter Numbers only");
        document.getElementById('triangle-base').value ='';
        document.getElementById('triangle-height').value ='';
    }
    else{
        const triArea = areaTriRomPen(baseNum, heightNum);
        showArea('Triangle', triArea);
        document.getElementById('triangle-base').value ='';
        document.getElementById('triangle-height').value ='';
       
       
    }
});

// rectangle area with input validation

document.getElementById('rectangle').addEventListener('click', function(){
    const width = document.getElementById('rectangle-width');
    const widthNum = parseFloat(width.value);
    const length = document.getElementById('rectangle-length');
    const lengthNum = parseFloat(length.value);
   
    

    if((typeof (widthNum) !== 'number' || typeof (lengthNum) !== 'number') || (widthNum <0 || lengthNum < 0) || (width.value.length == '0' || length.value.length == '0') ) {

        alert ("Please, Enter a valid positive number input type for all the input");
        document.getElementById('rectangle-width').value = '';
        document.getElementById('rectangle-length').value ='';
    }
  
    else if((!/^[0-9]+$/.test(widthNum)) || (!/^[0-9]+$/.test(lengthNum)))
    {
        alert("Please, Enter Numbers only");
        document.getElementById('rectangle-width').value = '';
        document.getElementById('rectangle-length').value ='';
    }
    else{
        const rectArea = areaRectPara(widthNum, lengthNum);
        showArea('Rectangle', rectArea);
        document.getElementById('rectangle-width').value = '';
        document.getElementById('rectangle-length').value ='';
       
    }
});

// parallelogram area
document.getElementById('parallelogram').addEventListener('click', function(){
    const parallelArea = areaRectPara(10, 12);
    showArea('Parallelogram', parallelArea);
   
});

// rhombus area
document.getElementById('rhombus').addEventListener('click', function(){
    const rhombusArea = areaTriRomPen(16, 8);
    showArea('Rhombus', rhombusArea);
    
});

// pentagon area
document.getElementById('pentagon').addEventListener('click', function(){
    const pentagonArea = areaTriRomPen(6,10);
    showArea('Pentagon', pentagonArea);
    
});
// ellipse area

document.getElementById('ellipse').addEventListener('click', function(){
    const ellipseArea = areaEllipse(10,4);
    showArea('Ellipse', ellipseArea);
    
});