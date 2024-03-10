let bagItems;
onload();
function onload()
{
    let bagItemStr=localStorage.getItem('bagItems');
    bagItems=bagItemStr?JSON.parse(bagItemStr):[];
    displayItemsOnHomePage();
    displayBagIcon();
}


function addToBag(itemId){
   
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcon();
}

function displayBagIcon()
{
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0)
    {
        bagItemCountElement.style.visibility="visible";
        bagItemCountElement.innerText=bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility="hidden";
    }
    
}
function displayItemsOnHomePage()
{
    let itemsContainerElement=document.querySelector('.pro-container');
    if(!itemsContainerElement)
    {
        return ;
    }
    let innerHTML='';
    
    items.forEach(item=>{
        innerHTML+=`<div class="pro" id="{item.id}">
        <img src="${item.image}" alt="" />
        <div class="des">
          <span>${item.company}</span>
          <h5>${item.item_name}</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>${item.price}</h4>
        </div>
        <button class="normal btn-add-bag" style="background-color: #088178;" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`
    });
    
    itemsContainerElement.innerHTML=innerHTML;
}
