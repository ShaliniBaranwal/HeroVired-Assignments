import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Heading from "./components/Heading";
import Customerform from "./components/Customerform";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
    const [info, setInfo] = useState({
        totalCost: 0,
        items: 0
    });

    const mainCourse = [
        {
            title: "Naan",
            price: 20,
            type: "Veg",
        },
        {
            title: "Keema Paratha",
            price: 25,
            type: "Non Veg",
        },
        {
            title: "Biryani",
            price: 200,
            type: "Veg",
        },
        {
            title: "Egg Biryani",
            price: 250,
            type: "Non Veg",
        },
    ];
    const drinksItem = [
        {
            title: "Tea",
            price: 10,
            type: "Hot",
        },
        {
            title: "Coffee",
            price: 10,
            type: "Hot",
        },
        {
            title: "Cold Coffee",
            price: 50,
            type: "Cold",
        },
    ];
    const dessertItem = [
        {
            title: "Gulab Jamun",
            price: 25,
            type: "Hot",
        },
        {
            title: "Gajar Halwa",
            price: 50,
            type: "Hot",
        },
        {
            title: "IceCream",
            price: 50,
            type: "Cold",
        },
    ];

    return (
        <div className="App">
            <img src="https://diabetes.org/sites/default/files/2019-08/Diabetes-Superfoods-min.jpg"></img>

            <h1 className="big"> GHAR KI RASOI </h1>

            <Heading title="Main Course"></Heading>
            <div className="table">
                <table>
                    <tr>
                        <th> Name </th>
                        <th> Type </th>
                        <th> Price </th>
                    </tr>
                    {mainCourse.map((i) => (
                        <Menu item={i.title} price={i.price} type={i.type} increase={[info, setInfo]}></Menu>
                    ))}
                </table>
            </div>

            <Heading title="Drinks"></Heading>
            <div class="table">
                <table>
                    <tr>
                        <th> Name </th>
                        <th> Type </th>
                        <th> Price </th>
                    </tr>
                    {drinksItem.map((i) => (
                        <Menu item={i.title} price={i.price} type={i.type} increase={[info, setInfo]}></Menu>
                    ))}
                </table>
            </div>

            <Heading title="Desserts"></Heading>
            <div class="table">
                <table>
                    <tr>
                        <th> Name </th>
                        <th> Type </th>
                        <th> Price </th>
                    </tr>
                    {dessertItem.map((i) => (
                        <Menu item={i.title} price={i.price} type={i.type} increase={[info, setInfo]}></Menu>
                    ))}
                </table>
            </div>

            <Customerform></Customerform>

            <Footer name="Shalini"></Footer>
        </div>
    );
}

export default App;
