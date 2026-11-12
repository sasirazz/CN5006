const DiscountCaluculator = ({ productName, price }) => { 
const calculateDiscount = () => { 
const DisRate = document.getElementById("DisRate").value; 
const priceAfterDiscount = 
Number(price) - (Number(price) * Number(DisRate)); 
document.getElementById("DisMessage").innerHTML = 
`<b style="color:green">Price After Discount: £${priceAfterDiscount}</b>`; 
}; 
return ( 
<div> 
<h2>{productName}</h2> 
<p>Price: £{price}</p> 
<label>Enter Discount Rate (%): </label> 
<input 
type="number" 
id="DisRate" 
/> 
<br /><br /> 
<button onClick={calculateDiscount}> 
Calculate Discount 
</button> 
<p id="DisMessage"></p> 
</div> 
); 
}; 
export default DiscountCaluculator ; 