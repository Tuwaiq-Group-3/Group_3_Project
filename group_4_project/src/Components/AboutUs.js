import about from "../Img/about.jpg"

import '../App.css'

function Aboutus()
{

   return(
<div>
   <div>

   <img  className="item-img" src={about} width="100%" height="20%"/>
   </div>
   <h2 className="h_about" >About Us</h2>

<p className="h_about">
The company mainly focuses on women's wear, and offers men's apparel, children's  accessories,  bags ,electronic device.
<br/> G mainly targets  Middle East along with other consumer markets. 

</p>
<section className="about">
<div className="main">
   
  {/* <img src={manuf}  /> */}
  <hr className="hr_about"/>

  <h5 className="h_about">Product Design</h5>
  <p className="h_about"> all starts when an idea, or a thought, is conceived by the designer..</p>
  <p className="h_about">The life of a product begins even before the designer's pen hits the paper.</p>
</div>

<div className="about-t">
<hr className="hr_about"/>

  <h5 className="h_about">customer service</h5>
  <p className="h_about"> You may have questions, but we've got you covered. Our team of customer service professionals <br/>can communicate with you in the following languages: Englishand Arabic.
</p>
  
</div>


   </section>



</div>

   ) 


}
export default Aboutus

