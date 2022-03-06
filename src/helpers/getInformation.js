
const listTotalNumbers = () => {
    const list = Array.from(Array(300))
    const listIndexs = list.map( (_,index) => index + 1 )
    return listIndexs
}

const sortedList = () =>{
    const sortedList = listTotalNumbers().sort( () =>  Math.random() - 0.5  )
    return sortedList
}

const getCharacteres = () => {
    // axios
    // Peticiones 
}

export default getCharacteres