import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from'reactstrap';
import WorkoutCreate from './WorkoutCreate';
import WorkoutTable from './WorkoutTable';
import WorkoutEdit from './WorkoutEdit';

const WorkoutIndex =(props) => {
const[updateActive, setWUpdateActive =useStae(false)
const[workoutToUpdate, setWorkoutToUpdate]=useState({});
// const [workouts, setWorkouts] =useState ([]);
const fetchWorkouts = () => {
    fetch('http://localhost:3000/log', {
    method: 'GET',
    headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': props.token
    })
})
})  .then( (res) => res.json())
.then((logData) =>  {
    setWorkout(logData)
})
}
useEffect(() => {
    fetchWorkouts()
    }, [])
return(
    <Container>
        <Row>
                <Col md="3">
                    <WorkoutCreate fetchWorkouts={fetchWorkouts} token ={props.token}/>
                    </Col>
                <Col md="9">
           <h2>Log a workout to see a table. This will be added in later pages. </h2>
                </Col>
        </Row>
    </Container>
    )
export default WorkoutIndex;