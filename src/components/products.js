import DogFood from "../ProductImages/DogFood.png"
import Camera from "../ProductImages/Camera.svg"
import Laptop from "../ProductImages/Laptop.png"
import CurologySet from "../ProductImages/CurologySet.png"
import Car from "../ProductImages/Car.png"
import SoccerCleats from "../ProductImages/SoccerCleats.png"
import Gamepad from "../ProductImages/Gamepad.png"
import Jacket from "../ProductImages/Jacket.png"
import Coat from "../ProductImages/Coat.png"
import Bag from "../ProductImages/Bag.png"

const dogFood = {
    name: 'Dog Food',
    fullname: 'Breed Dry Dog Food',
    cost: 120,
    rating: 3,
    image: {DogFood},
    text: "Breed Dry Dog Food – Premium dry dog food tailored to specific breeds, with balanced nutrition for optimal health. Supports digestion, coat shine, and energy"
}

const camera = {
    name: 'Camera',
    fullname: 'CANON EOS DSLR Camera',
    cost: 360,
    rating: 4,
    image: {Camera},
    text: "Canon EOS DSLR Camera – Professional DSLR with superb image quality, fast autofocus, and interchangeable lenses. Perfect for photography and videography."
}

const laptop = {
    name: 'Laptop',
    fullname: 'ASUS FHD Gaming Laptop', 
    cost: 700,
    rating: 5,
    image: {Laptop},
    text: "ASUS FHD Gaming Laptop – High-performance gaming laptop with FHD display, fast refresh rate, and powerful GPU. Smooth gameplay and multitasking"
}

const curologySet = {
    name: 'Curology Set',
    fullname: 'Curology Product Set',
    cost: 500,
    rating: 4,
    image: {CurologySet},
    text: "Curology Product Set – Custom skincare set with personalized formula to target acne, aging, and texture. Dermatologist-approved for clear, glowing skin"
}

const car = {
    name: 'Car',
    fullname: 'Kids Electric Car',
    cost: 960,
    rating: 5,
    image: {Car},
    text: "Kids Electric Car – Fun, battery-powered ride-on car for kids with realistic design, safe speeds, and parental remote control"
}

const soccerCleats = {
    name: 'Soccer Cleats',
    fullname: 'Jr. Zoom Soccer Cleats',
    cost: 1160,
    rating: 5,
    image: {SoccerCleats},
    text: "Jr. Zoom Soccer Cleats – Lightweight youth soccer cleats with superior traction, cushioned support, and durable design for agile performance on the field"
}

const gamepad = {
    name: 'Gamepad',
    fullname: 'GP11 Shooter USB Gamepad',   
    cost: 660,
    rating: 4,
    image: {Gamepad},
    text: "GP11 Shooter USB Gamepad – Ergonomic USB gamepad with responsive buttons, dual vibration, and programmable controls for PC gaming"
}

const jacket = {
    name: 'Jacket',
    fullname: 'Quilted Satin Jacket',
    cost: 660,
    rating: 4,
    image: {Jacket},
    text: "Quilted Satin Jacket – Stylish satin jacket with quilted detailing, lightweight comfort, and a sleek fit for elevated casual wear"
}

const coat = {
    name: 'Coat',
    fullname: 'The north coat',
    cost: 260,
    rating: 4,
    image: {Coat},
    text: "The North Coat – Premium winter coat with insulation, water resistance, and a modern design for extreme cold weather protection"
}

const bag = {
    name: 'Bag',
    fullname: 'Gucci duffle bag',
    cost: 960,
    rating: 4,
    image: {Bag},
    text: "Gucci Duffle Bag – Luxury duffle bag in iconic Gucci design, crafted from high-end materials with spacious storage for travel and gym"
}

export const productMas = [dogFood, camera, laptop, curologySet, car, soccerCleats, gamepad, jacket, coat, bag];