
const MainHead = ({title1,title2, back}) => {
    return (

         <div className="position-relative text-white py-3">
            <h2 style={{zIndex:'2', top:'40px',fontSize:'calc(5vh + 1rem)'}} className="position-absolute start-50 translate-middle-x fw-bolder text-white d-flex">{title1} <span className="text-yellow ms-3">{title2}</span></h2>
            <p  className="position-absolute fw-bolder start-50 translate-middle-x top-0" style={{fontSize:'calc(9vh + 2rem)',color:'#212121',zIndex:'1'}}>{back}</p>
         </div>
     
    )
}

export default MainHead;
