const houses = require('../db.json');
let newHomeID = houses.length + 1;

const getHouses = (req, res) => {
res.status(200).send(houses)
}

const deleteHouse = (req, res) => {
    const houseToBeDeleted = +req.params.id
    for(let i = 0; i < houses.length; i++) {
        const house = houses[i]
        if(house.id === houseToBeDeleted) {
            houses.splice(i, 1)
            return res.status(200).send(houses)
        }
    }
    return res.status(400).send(houses)
}



const createHouse = (req, res) => {
    let { address, price, imageURL } = req.body

    const newHouse = {
        id: newHomeID,
        address, 
        price, 
        imageURL,
    }

    houses.push(newHouse)

    res.status(200).send(houses)

    console.log(newHouse)

    newHomeID++
}


const updateHouse = (req, res) => {
let houseToBeUpdated = +req.params.id;
const { type } = req.body;

for (let i = 0; i < houses.length; i++) {
    const house = houses[i]

    if (house.id === houseToBeUpdated) {
        if (type === 'plus') {
            house.price += 10000
            return res.status(200).send(houses)
        } else if (type === 'minus') {
            house.price -= 10000
            return res.status(200).send(houses)
        }
    } 
}
    res.sendStatus(400)
}


module.exports = { 
    getHouses,
    deleteHouse, 
    createHouse, 
    updateHouse,
}