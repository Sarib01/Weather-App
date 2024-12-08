import axios from 'axios'
import { useState } from "react";
import WeatherCard from "./../weatherCard";
import { Button, Form } from 'react-bootstrap';


let Home = () => {

    const [cityName, setCityName] = useState("");
    const [data, setData] = useState([]);
    
   


    let submitHandler = async (e) => {
        e.preventDefault();

        console.log("I am submit handler function");

        try {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`)

            console.log("response: ", response);

            setData(response.data.list)


        } catch (error) {
            console.log("error in api call: ", error);
        }

    }


    return (
        <div >
            <h1>Weather App </h1>

            <form onSubmit={submitHandler}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>City Name:</Form.Label>
                    <Form.Control
                        type="text"
                        required placeholder='enter your city name'
                        onChange={(e) => {
                             
                            setCityName(e.target.value);
                        }}
                    />
                </Form.Group>



                 
                <Button type='submit'>Get Weather</Button>
            </form>




            {
               

                data.map((eachForcast, index) => (

                    <WeatherCard
                        key={index}
                        date={eachForcast.dt_txt}
                        temp={eachForcast.main.temp}
                        min={eachForcast.main.temp_min}
                        max={eachForcast.main.temp_max}
                    />
                ))
            }



        </div>
    );
}

export default Home;
