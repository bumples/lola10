import React from 'react';
import CartContext from 'context/CartContext';
import { CartHeader  } from './styles';


export function CartContents() {
const { checkout, updateLineItem } = React.useContext(CartContext);

const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
};

return (
    <section>
    <h1>Your cart</h1>
    {!!checkout?.lineItems && (
        <CartHeader>
        <div>Product</div>
        <div>Unit price</div>
        <div>Quantity</div>
        <div>Amount</div>
        </CartHeader>
    )}

   
</section>
);
}

//export * from './CartContents';//
