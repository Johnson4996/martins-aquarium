const fishCollection = [
    {
        image: "./images/stingray.jpg",
        name: "Steve",
        type: "Stingray",
        size: "20",
        location: "Cayman Islands",
        diet: "Shrimp"
    },
    {
        image: "./images/lobster.jpg",
        name: "Larry",
        type: "Lobster",
        size: "6",
        location: "Great Barrier Reef",
        diet: "Fish,Crab, Dead things"
    },
    {
        image: "./images/octopus.jpg",
        name: "Otto",
        type: "Octopus",
        size: "25",
        location: "Maldives",
        diet: "Worms, Clams"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}