import ShowCanvas from '../components/ShowCanvas'

const HomePage = () => {
    return (
        <>
            <ShowCanvas
                show="all"
                sort="title"
                yearfilter="2010"
                limit="30"
            />
        </>
    )
}

export default HomePage
