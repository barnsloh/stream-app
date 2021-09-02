import ClipLoader from 'react-spinners/ClipLoader'

const Preloader = ({loading}) => {
    const classname = loading ? 'preloader' : 'd-none'
    return (
        <div className={classname}>
            <ClipLoader size={35} color={"#9B9B9B"} loading={loading} />
        </div>
    )
}

export default Preloader
