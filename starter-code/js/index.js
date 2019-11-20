var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create =document.getElementById('create');
var $delete =document.getElementsByClassName("btn-delete");

function updateSubtot($product) {
  // Iteration 1.1
  let unitPrice= $product.children[1].children[0].innerHTML;
  let qty=$product.children[2].children[0].children[0].value;
  
  //console.log(unitPrice);
  //console.log(qty);
  let subTot= $product.children[3].children[0];
  let newPrice=(qty*unitPrice).toString();
  
  subTot.innerHTML=newPrice;
  
  return subTot;
  
}

function calcAll() {
  // Iteration 1.2
  let products=document.querySelectorAll(".product");
  let total=document.getElementsByTagName('h2')[0].children[0];

  for(let i=0;i<products.length;i++){
  updateSubtot(products[i]);
  }
  let add=parseInt(products[0].children[3].children[0].innerHTML);
  for(let i=1;i<products.length;i++){
  let addition=parseInt(products[i].children[3].children[0].innerHTML);
  add += addition;
  }

  total.innerHTML=add;


}










// iteration 2
function createNewProduct(){
  let parent = document.getElementsByTagName('tbody')[0];
  let name=document.getElementsByTagName('tfoot')[0].children[0].children[0].children[0].value;
  let quantity=document.getElementsByTagName("tfoot")[0].children[0].children[1].children[0].value;
  
  

  let trTag=document.createElement('tr');
  trTag.setAttribute("class","product");

  let tdName= document.createElement('td');
  tdName.setAttribute("class","name");
  let spanName=document.createElement('span');
  spanName.innerHTML=name.toString();

  tdName.appendChild(spanName);

  let tdPu= document.createElement('td');
  tdPu.setAttribute("class","pu");
  let txtPu=document.createTextNode("$")
  let spanPu=document.createElement('span');
  spanPu.innerHTML= quantity.toString();

  tdPu.appendChild(txtPu);
  tdPu.appendChild(spanPu);


  let tdQty= document.createElement('td');
  tdQty.setAttribute("class","qty");
  let labelQty=document.createElement('label');
  let inputQty=document.createElement("input");
  inputQty.setAttribute("type","number");
  inputQty.setAttribute("value","0");
  inputQty.setAttribute("min","0");

  labelQty.appendChild(inputQty);
  tdQty.appendChild(labelQty);

  let tdSubtot= document.createElement('td');
  tdSubtot.setAttribute("class","subtot");
  let txtSubtot=document.createTextNode("$")
  let spanSubtot=document.createElement('span');
  spanSubtot.innerHTML="0";

  tdSubtot.appendChild(txtSubtot);
  tdSubtot.appendChild(spanSubtot);

  let tdRm= document.createElement('td');
  tdRm.setAttribute("class","rm");
  let buttonRm=document.createElement('button');
  buttonRm.setAttribute("class","btn btn-delete");
  buttonRm.innerHTML="Delete";
  buttonRm.onclick=deleteProduct;
  

  
  tdRm.appendChild(buttonRm);

  trTag.appendChild(tdName);
  trTag.appendChild(tdPu);
  trTag.appendChild(tdQty);
  trTag.appendChild(tdSubtot);
  trTag.appendChild(tdRm);


 parent.appendChild(trTag);
}


//iteration 4

function deleteProduct(e){
  //alert('aa');
  let product=e.currentTarget.parentNode.parentNode;
  let parent=document.getElementsByTagName('tbody')[0];

  console.log(product);
  parent.removeChild(product);
}


$calc.onclick = calcAll;
$create.onclick = createNewProduct;

//alert('aca');
for(let i=0;i<$delete.length;i++){
  $delete[i].onclick=deleteProduct;
}