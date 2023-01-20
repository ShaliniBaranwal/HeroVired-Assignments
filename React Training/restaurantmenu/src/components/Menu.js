import React from 'react';
import './Menu.css';

function Menu(props) {
    const increase = () => {
        const info = props.increase[0];
        const setInfo = props.increase[1];

        info.totalCost += props.price;
        info.items += 1;

        setInfo(info);

        alert(`Item Purchased!! Total Items: ${info.items}, Total Cost = ₹${info.totalCost}`);
    };

    if (props.type === 'Veg') {
        return (
            <tr>
                <td className="green"> {props.item} </td>
                <td className="green"> 🌿 </td>
                <td>
                    {' '}
                    <button onClick={increase}>₹ {props.price}</button>{' '}
                </td>
            </tr>
        );
    } else if (props.type === 'Non Veg') {
        return (
            <tr>
                <td className="red"> {props.item} </td>
                <td className="red"> 🥚 </td>
                <td>
                    {' '}
                    <button
                        onClick={increase}
                    >
                        ₹ {props.price}
                    </button>{' '}
                </td>
            </tr>
        );
    } else if (props.type === 'Hot') {
        return (
            <tr>
                <td className="red"> {props.item} </td>
                <td className="red"> 🔥 </td>
                <td>
                    {' '}
                    <button
                        onClick={increase}
                    >
                        ₹ {props.price}
                    </button>{' '}
                </td>
            </tr>
        );
    } else if (props.type === 'Cold') {
        return (
            <tr>
                <td className="blue"> {props.item} </td>
                <td className="blue"> ❄️ </td>
                <td>
                    {' '}
                    <button
                        onClick={increase}
                    >
                        ₹ {props.price}
                    </button>{' '}
                </td>
            </tr>
        );
    }
}

export default Menu;
