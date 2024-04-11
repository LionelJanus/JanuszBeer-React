import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function IndividualIntervalsExample() {
  return (
    <Carousel style={{opacity:"60%"}}>
      <Carousel.Item interval={10000}>
        <img className="d-block w-100" src='https://i.postimg.cc/htxLM2D4/73062191-1906533582826835-3726939383615053829-n.jpg' ></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img className="d-block w-100" src='https://i.postimg.cc/s2YJfwqH/79135181-146518543302422-4559102387662558468-n.jpg' ></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <video className="d-block w-100" autoPlay controls>
          <source src="https://streamable.com/gvotkl" type="video/mp4"/>
          
        </video>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;