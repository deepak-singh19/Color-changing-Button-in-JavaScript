var  abutton = document.getElementsByTagName('button');
console.log(abutton);

var original = [];

for(let i=0;i<abutton.length; i++)
{
    original.push(abutton[i].classList[1]);

}
//console.log(original);


function fn(bt)
{
    if (bt.value ==='Red')
    {
        return btnred();
    }
    else if (bt.value === 'Green')
    {
        return btngre();
    }
    else if (bt.value === 'Blue')
    {
        return btnblue();
    }
    else if (bt.value === 'Yellow')
    {
        return btnyel();
    }
    else if(bt.value==='Random'){
        return btnrad();
    }
    else if(bt.value==='Reset'){
        return btnres();
    }
}
 
function btnred()
{
    for (let i=0;i<abutton.length; i++)
    {
        abutton[i].classList.remove(abutton[i].classList[1]);
        abutton[i].classList.add('btn-danger')

    }
}
function btngre()
{
    for (let i=0;i<abutton.length; i++)
    {
        abutton[i].classList.remove(abutton[i].classList[1]);
        abutton[i].classList.add('btn-success')

    }
}
function btnblue()
{
    for (let i=0;i<abutton.length; i++)
    {
        abutton[i].classList.remove(abutton[i].classList[1]);
        abutton[i].classList.add('btn-primary')

    }
}
function btnyel()
{
    for (let i=0;i<abutton.length; i++)
    {
        abutton[i].classList.remove(abutton[i].classList[1]);
        abutton[i].classList.add('btn-warning')

    }
}

function btnrad()
{
    for (let i=0;i<abutton.length; i++)
    {
       var m= Math.floor(Math.random()*4)
       abutton[i].classList.remove(abutton[i].classList[1]);
        abutton[i].classList.add(original[m])

    }  
}

function btnres()
{
    for (let i=0;i<abutton.length; i++)
    {
        abutton[i].classList.remove(abutton[i].classList[1]);
        abutton[i].classList.add(original[i])
    }


}