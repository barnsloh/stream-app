import Showcard from './Showcard'
import NavigationBar from './NavigationBar'
import { useState, useEffect } from 'react'


const ShowCanvas = ({ show, sort, yearfilter, limit }) => {
    const [showsData, setShowObj] = useState([])
    const [searchedText, setSearchedText] = useState("")
    const [searchedShows, setSearchedShows] = useState([])
    const [sortOrder, setSortOrder] = useState("")
    // get json on load
    useEffect(() => {
        async function fetchMovieData() {
            const API_URL_AND_KEY = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&request=${show}`
            const response = await fetch(API_URL_AND_KEY)
            const showsObj = await response.json()
            const status = await response.status
            const filteredData = sortFilterLimit({ showdata: showsObj, sort: sort, yearfilter: yearfilter, limit: limit })
            // check for error then go to errorpage
            status === 200 && setShowObj(filteredData) 
            status === 200 && setSearchedShows(filteredData)
            status !== 200 && console.log('SET UP PRIVATE ROUTE TO ERROR PAGE')
        }
        fetchMovieData()
        // set initial showcards
        const showCards = makeShowCardCollection(searchedShows)
        setSearchedShows(showCards)
    }, [])

    // when searchedText changes
    useEffect(() => {
        console.log('searched shows changed 1')
        const filteredShows = searchForShows(showsData, searchedText)
        setSearchedShows(filteredShows)
        // set showcards shen user searches
        const showCards = makeShowCardCollection(filteredShows)
        setSearchedShows(showCards)
    },[searchedText])

    // when sortOrder changes
    useEffect(() => {
        console.log('this is the sort order')
        console.log(sortOrder)
        console.log('searched shows changed 2')
        // set show cards when user sorts
        const sortedShows = sortSearchedShows(searchedShows, sortOrder)
        setSearchedShows(sortedShows)
    },[sortOrder])

    // re render the show cards everytime thigns change
    let showCardArray = []
    searchedShows.forEach((entry, index) => {
        showCardArray.push(
            <Showcard key={index} {...entry} />
        )
    })


    return (
        <>
            <NavigationBar isHome={show === 'all'} 
            handleChange={(event) => setSearchedText(event.target.value)} 
            handleSort= {(event) => setSortOrder(event.target.name)}
            />
            <div className="show-container">{showCardArray}</div>
        </>
    )
}

function makeShowCardCollection(arrayOfShows = []) {
    let showCardCollection = []
    arrayOfShows.forEach((entry, index) => {
        showCardCollection.push(
            <Showcard key={index} {...entry} />
        )
    })
    return showCardCollection
}

function sortSearchedShows(arrayOfShows = [], sortText) {
    if (!sortText || arrayOfShows.length == 0) return arrayOfShows

    //check if sorttext format is correct
    const sortObj = sortText.split(',')
    if (sortObj.length != 2 || !['asc','desc'].includes(sortObj[1])) return arrayOfShows
    // check if key is valid
    const sortKey = sortObj[0]
    if(!arrayOfShows[0][sortKey]) return arrayOfShows
    // check if numeric and descending
    const isNumeric = !isNaN(arrayOfShows[0][sortKey])
    const isDescending = sortObj[1].includes('desc')
    console.log('thisis the sort obj')
    console.log(sortObj)
    console.log(arrayOfShows)

    isNumeric && isDescending ? arrayOfShows.sort((show1, show2) => show2[sortKey] - show1[sortKey])
    : isNumeric && !isDescending ? arrayOfShows.sort((show1, show2) => show1[sortKey] - show2[sortKey])
    : !isNumeric && isDescending ? arrayOfShows.sort((show1, show2) => show1[sortKey].localeCompare(show2[sortKey], undefined, { ignorePunctuation: true }))
    : arrayOfShows.sort((show1, show2) => show2[sortKey].localeCompare(show1[sortKey], undefined, { ignorePunctuation: true }))

    return arrayOfShows
}

function searchForShows(arrayOfShows = [], searchedText) {
    if (!searchedText || searchedText.length < 3 ) return arrayOfShows

    return arrayOfShows.filter(show => {
        const showtitle = show.title.toLowerCase()
        const lowerCasedSearchText = searchedText.toLowerCase()
        return showtitle.includes(lowerCasedSearchText)
    })
}

function sortFilterLimit({ showdata, sort, yearfilter, limit }) {
    if (!sort && !yearfilter && !limit) return showdata.entries
    let processedEntries = showdata.entries
    sort && (
        processedEntries.sort((show1, show2) => show1.title.localeCompare(show2.title, undefined, { ignorePunctuation: true }))
    )
    yearfilter && (
        processedEntries = processedEntries.filter(show => show.releaseYear >= yearfilter)
    )
    limit && (
        processedEntries = processedEntries.slice(0, limit)
    )

    return processedEntries
}


export default ShowCanvas