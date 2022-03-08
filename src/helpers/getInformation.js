import getApi from "../api/axios"

const petitionsAPI = () => {
    const list = Array.from(Array(500))
    const listIndexs = list.map( (_,index) => index + 1 )
    return listIndexs
}

const sortedList = (listIndexs) =>{
    const sortedList = listIndexs.sort( () =>  Math.random() - 0.5  )
    const principalCharacteres =  sortedList.splice(0,5)
    return principalCharacteres
}

const getCharacteres = async () => {
    const list = petitionsAPI()
    const [a,b,c,d,e] = sortedList(list)

    const listPetitions = [
        getApi.get(`/${a}`),
        getApi.get(`/${b}`),
        getApi.get(`/${c}`),
        getApi.get(`/${d}`),
        getApi.get(`/${e}`),
    ]

    const [c1,c2,c3,c4,c5] = await Promise.all( listPetitions )

    return [
        { caracter : c1.data},
        { caracter : c2.data},
        { caracter : c3.data},
        { caracter : c4.data},
        { caracter : c5.data},
    ]
    
}

export default getCharacteres