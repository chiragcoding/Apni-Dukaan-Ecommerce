let bagItemObjects;
onLoad();
function onLoad(){
    loadBagItemsObjects();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary()
{
    let bagSummaryElement=document.querySelector('.cart-details');
    let totalItem=bagItemObjects.length;
    let sum=0;
    bagItemObjects.forEach(item=>{
        sum=sum+item.price;

    });
    let totalMRP=sum;
    let final=totalMRP-123+99;


    bagSummaryElement.innerHTML=` <h4>Price Details(${totalItem}Items)</h4>
    <div>
      <li>Total MRP</li>
      <li>${totalMRP}₹</li>
    </div>
    <div>
      <li>Discount on MRP</li>
      <li>123₹</li>
    </div>
    <div>
      <li>Convience Fee</li>
      <li>99₹</li>
    </div>
    <hr id="line">
    <div>
      <li>Total Amount</li>
      <li>${final}₹</li>
    </div>
    
      <button id="order-btn" onclick="myFunction()">Place Order</button>
     `
}

function loadBagItemsObjects(){
    bagItemObjects=bagItems.map(itemId=>{
       for(let i=0;i<items.length;i++)
       {
        if(itemId == items[i].id)
        {
            return items[i];
        }
       } 
    })
    console.log(bagItemObjects);
}

function displayBagItems()
{
    let containerElement=document.querySelector(".cart-container");
    console.log(containerElement);
    let innerHTML='';
    bagItemObjects.forEach(bagItem => {
        innerHTML+=generateItemHTML(bagItem)
        
    });
    containerElement.innerHTML=innerHTML;
}

function removeFromBag(itemId){
   bagItems= bagItems.filter(bagItemID=>bagItemID!=itemId);
   localStorage.setItem('bagItems',JSON.stringify(bagItems));
   loadBagItemsObjects();
   displayBagIcon();
   displayBagItems();
   displayBagSummary();
   
  
}

function generateItemHTML(item){
    return `<div class="cart-pro">
    <img src="${item.image}" alt="" />
    <div class="des">
      <span>Earings</span>
      <h5>Earings</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>${item.price}</h4>
    </div>
    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`
}

console.log(bagItems);