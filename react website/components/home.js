import React, {Component} from 'react';

import One from '../One.png';
class Home extends Component{

render() {

return (


<div className="row">

<div className="col-sm-12">

<img src={One} className="avatar" />






<div className=" box">

<h2 style={{fontWeight: 'bold'}}>FULL STACK WEB-DEVELOPER! </h2>

<hr/>

<p> HTML/CSS | Bootstrap | Javascript | React | Jquery | Jquery UI | Php & MySQL </p>




<div className="social">



<a href="http://www.google.com">

<i className="fa fa-linkedin-square"/>

</a>




<a href="http://www.google.com">

<i className="fa fa-github-square"/>

</a>


<a href="http://www.google.com">

<i className="fa fa-youtube-square"/>

</a>



<a href="http://www.google.com">

<i className="fa fa-xing-square"/>

</a>



</div>

</div>
</div>



 </div>



)


}

}


export default Home;
