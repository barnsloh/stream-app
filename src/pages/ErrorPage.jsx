import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import NavigationBar from '../components/NavigationBar';

const ErrorPage = () => {
    return (
        <>
            <NavigationBar />
            <Container className="show-container">
                <h2>Something went wrong... We can't find the page you were looking for. </h2>
                <Button href="/">Press here to go back to the homepage.</Button>
            </Container>
        </>
    )
}

export default ErrorPage
