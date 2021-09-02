import Dropdown from "react-bootstrap/Dropdown"

const SortingOption = ({handleChange}) => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Year, descending</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Year, ascending</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Title, descending</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Title, ascending</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default SortingOption

