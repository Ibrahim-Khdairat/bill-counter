'use strict'
let formEl = document.getElementById('form');
let tableEl = document.getElementById('cxList');
let tBody = document.getElementById('tbody');
let clear = document.getElementById('clear');

formEl.addEventListener('submit' , addOrder);
clear.addEventListener('click' , clearLocalStorage);



let orders = [];

function ResturnatCx (cxName,cxPhone,type,size)
{
    this.cxName = cxName;
    this.type = type;
    this.size = size;
    this.cxPhone = cxPhone;
    this.path = `img/${type}.jpg`;
    orders.push(this);
}


function addOrder (event)
{
    event.preventDefault();

    let coustumer = event.target.cxName.value;
    let cxPhone = event.target.cxPhone.value;
    let foodtype = event.target.type.value;
    let foodsize = event.target.size.value;

    new ResturnatCx ( coustumer , cxPhone , foodtype , foodsize );
    renderCx();
    settingLocallStorage();
}

let removeButton ="X";
function renderCx()
{
    tBody.textContent = "";

    for( let i=0 ; i<orders.length ; i++)
    {
        let trEl = document.createElement('tr');
        tBody.appendChild(trEl);

        let tdEl_1 = document.createElement('td');
        trEl.appendChild(tdEl_1);
        tdEl_1.textContent = orders[i].cxName;

        let tdEl_2 = document.createElement('td');
        trEl.appendChild(tdEl_2);
        tdEl_2.textContent = orders[i].cxPhone;

        let tdEl_3 = document.createElement('td');
        trEl.appendChild(tdEl_3);
        tdEl_3.textContent = orders[i].type;

        let tdEl_4 = document.createElement('td');
        trEl.appendChild(tdEl_4);
        tdEl_4.textContent = orders[i].size;

        let tdEl_5 = document.createElement('td');
        trEl.appendChild(tdEl_5);

        let imgEl = document.createElement('img');
        tdEl_5.appendChild(imgEl);
        imgEl.setAttribute('src',orders[i].path) ;

        // let tdEl_6 = document.createElement('td');
        // trEl.appendChild(tdEl_6);
        // tdEl_6.textContent = removeButton;
        // tdEl_6.setAttribute('id' ,`remove_${i}` );

        // tdEl_6.addEventListener('click' , removeItem);

        


    }

}


function settingLocallStorage()
{
  let data = JSON.stringify(orders);
  localStorage.setItem('Cx List' , data);
}


function gettingLocallStorage()
{
    let getting = localStorage.getItem('Cx List');
    let returnedCx = JSON.parse(getting);
  

    if ( returnedCx !== null )
    {
        orders = returnedCx;
    }
    renderCx();
}

    gettingLocallStorage();


function clearLocalStorage()
{
    localStorage.clear();
    window.location.reload();
}

// function removeItem()
// {
//     orders.
//     window.location.reload();
//     console.log(`Modified ${orders}`);

// }







// function removeItem(event) {
//     event.target.parentElement.parentElement.remove();
  
//     console.log('event.target = ', event.target);
//     console.log('Cx Name on HTML = ',event.target.parentElement.children[0].textContent);
  
//     let cxName = event.target.parentElement.children[0].textContent;
  
//     for (let i = 0; i < orders.length; i++) {
  
//       if (cxName === orders[i].cxName){
//         console.log(`oorder ${[i]}.Cx Name = `, orders[i].cxName);
//         orders.splice(i, 1);
  
//         break;
  
//       }

//     }
//     window.location.reload();
  
//     settingLocallStorage();
      
//   }
  
  