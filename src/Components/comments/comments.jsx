import Carousel from 'react-bootstrap/Carousel';
import './comments.css'

function Comments() {
  return (
    <div className='mainCarousel'>


    <h1>Comments</h1>
      
    <Carousel>
      <Carousel.Item interval={1000}>
        
        <div className='firstCarouselDiv'>
          <img
          className="firstCarouselImgMusteri"
          src="https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg"
          alt="First slide"
        />
        <h3>Nazim Karimov</h3>
          <p className='carouselp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis veniam odit? Quod quibusdam, aut sed, eum at ea nisi neque molestias, laborum dolor sunt quae? Sapiente delectus rerum excepturi!</p>
        </div>
        {/* <Carousel.Caption>
          
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='firstCarouselDiv'>
        <img
          className="firstCarouselImgMusteri"
          src="https://preview.redd.it/cpslext1vx971.png?auto=webp&s=a67d767ddec283c3490613cdb0b40c180a33daf6"
          alt="First slide"
        />
        <h3>Nazim Karimov</h3>
          <p className='carouselp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis veniam odit? Quod quibusdam, aut sed, eum at ea nisi neque molestias, laborum dolor sunt quae? Sapiente delectus rerum excepturi!</p>
        </div>
        
        {/* <Carousel.Caption>
          
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='firstCarouselDiv'>
        <img
          className="firstCarouselImgMusteri"
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <h3>Nazim Karimov</h3>
          <p className='carouselp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis veniam odit? Quod quibusdam, aut sed, eum at ea nisi neque molestias, laborum dolor sunt quae? Sapiente delectus rerum excepturi!</p>
        </div>
        
        {/* <Carousel.Caption>
          
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

    </div>
  );
}

export default Comments;