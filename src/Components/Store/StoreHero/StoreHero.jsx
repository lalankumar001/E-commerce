import React from 'react'
import FirstImg from '../../../assets/Scroll.jpg'
import secondImg from '../../../assets/ScrollingImg.png'
import thirdImg from '../../../assets/Electronic.jpg'
import forthImg from '../../../assets/fashion.jpg'
import fifthImg from '../../../assets/toy.jpg'

const StoreHero = () => {
  return (
 
  <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active"data-bs-interval="1000">

    <img src={FirstImg} alt="thirdimg" width="100%"  height="400"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={secondImg} alt="firstimg" width='100%' height="400" />
      </div>
    <div className="carousel-item" data-bs-interval="3000">
    <img src={thirdImg} alt="secodimg" width="100%" height="400" />
     </div>
     <div className="carousel-item" data-bs-interval="4000">
    <img src={forthImg} alt="secodimg" width="100%" height="400" />
     </div>
     <div className="carousel-item" data-bs-interval="5000">
    <img src={fifthImg} alt="secodimg" width="100%" height="400" />
     </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default StoreHero