import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import NavDropdown from "react-bootstrap/NavDropdown"

const NavigationBar = ({ handleChange, handleSort, isHome}) => {
    return (
        <Nav variant="tabs" defaultActiveKey={window.location.pathname} fixed="top" className="sticky" fill>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/series">Series</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item className ={isHome ? "invisible" : "visible"}>
                <NavDropdown title="Sort by" id="nav-dropdown">
                    <NavDropdown.Item onClick={handleSort} name="releaseYear,desc">year, descending</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleSort} name="releaseYear,asc">year, ascending</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleSort} name="title,desc">title, descending</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleSort} name="title,asc">title, ascending</NavDropdown.Item>
                </NavDropdown>
            </Nav.Item>
            <Nav.Item>
                <Form.Control type="text" placeholder="Search..." onChange={handleChange} />
            </Nav.Item>
        </Nav>
    )
}

export default NavigationBar
