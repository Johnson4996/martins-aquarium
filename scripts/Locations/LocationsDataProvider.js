const locationCollection = [
    {
        image: "./images/coral-reef.jpg",
        name: "Eden Rock",
        link: "http://www.edenrockdive.com/",
        desc: "Eden Rock Diving Center is the gateway to Eden Rock and Devil's Grotto two of Cayman's most loved shore dives. Great for diving and snorkeling, enter the water at one of two shore diving ladders into 3 feet of water and swim out over the gently sloping bottom until the reef rises to within a few feet of the surface before dropping in vertical cliff faces to a 40 sand bottom.",

    },
    {
        image:"./images/great-barrier.jpg",
        name: "Great Barrier Reef",
        link: "https://greatbarrierreef.org/",
        desc: "One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches.",
    }
    
]

export const useLocations = () =>{
    return locationCollection.slice()
}