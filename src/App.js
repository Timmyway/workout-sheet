import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Header from './components/Header';
export default function App() {  
  const workouts = [
    {
      id: 1,
      name: 'Bench Press',
      reps: 12,
      series: 5,
      type: 'dynamic',
      time: null,
      load: 50,
      createdAt: 'today'
    },
    {
      id: 2,
      name: 'Pull up',
      reps: 15,
      series: 4,
      type: 'dynamic',
      time: null,      
      load: null,
      createdAt: 'today'
    },
    {
      id: 3,
      name: 'Front Lever hold',
      reps: 15,
      type: 'static',
      time: 30,
      series: 4,
      load: null,
      createdAt: 'today'
    },
    {
      id: 4,
      name: 'Vertical row',
      reps: 15,
      series: 5,
      type: 'dynamic',
      time: null,      
      load: null,
      createdAt: 'today'
    },
    {
      id: 5,
      name: 'Weighted Pull up',
      reps: 5,
      series: 5,
      load: 20,
      type: 'dynamic',
      time: null,      
      createdAt: 'today'
    }
  ];  

  return (
    <Container fluid>
    <Header />
    {workouts.length === 0 ?
      <p>No workout found</p>
    :
      <>
      {workouts.map(workout => {
        return (
          <>
          <div key={workout.id} className='d-flex gap-2'>
            <p>
              {workout.id}
            </p>
            <p>
              {workout.name}
            </p>
          </div>
          </>
        )
      })}
      </>
    }    
    </Container>
  );
}