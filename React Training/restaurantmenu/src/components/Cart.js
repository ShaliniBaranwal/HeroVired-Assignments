import { useState } from "react";

function Cart() {
    const [numbr, setNumbr] = useState(1);
    const [pk, setPk] = useState("Shalini");
    const decrement = () => {
        console.log("Item Purchased");
        setNumbr(numbr + 1);
    };

    return (
        <div>
            <h1> FunNum: {numbr}</h1>
            <h1>Name: {pk}</h1>
            <button onClick={() => setNumbr(numbr + 1)}>Increment</button>
            <button onClick={decrement}> Decrement </button>
            <button on onClick={() => setPk("Sumit")}>
                Change person
            </button>
        </div>
    );
}

export default Cart;