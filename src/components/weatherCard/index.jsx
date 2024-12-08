import "./index.css"
import moment from "moment";
import { Card, Button } from 'react-bootstrap'

let WeatherCard = ({ date, temp, min, max }) => {
    return (
       

        <Card
            style={{ width: '18rem' }}
            border="success"
        >
            <Card.Body>
                <Card.Title>{moment(date).format("dddd ha")}</Card.Title>
                <Card.Text>
                    <h1> {temp}°C </h1>
                </Card.Text>
                <Card.Title> {min}°C - {max}°C</Card.Title>

            </Card.Body>
        </Card>
    );
}

export default WeatherCard;
