import React, {Component} from 'react';

import {Grid , Cell} from 'react-mdl';

import Education from './education.js';

import Experience from './experience.js';

import Skills from './skills.js';






class Resume extends Component{
render () {

  
return (  

<div>
<Grid>
<Cell  className="left-side" col={4}>  

<div style={{textAlign:'center'}}>

<img  alt="avatar" style={{height: '200px'}} src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"/>


</div>

<h2>  Danish Khan</h2>
<h3> Programmer  </h3>

<hr  style={{ borderTop: '4px solid #44bf31' , width:'50%'}}/>


<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia... </p>

<hr  style={{ borderTop: '3px solid #44bf31' , width:'50%'}}/>


<h4>Address  </h4>

<p> Tu ilmenau , 8453 , Germany thuringia </p>


<h4>Phone  </h4>

<p>(123) 456-7890</p>


<h4>Email</h4>

<p>someone@example.com </p>


<h4>Web  </h4>

<p>mywebsite.com </p>


<hr  style={{ borderTop: '4px solid #44bf31' , width:'50%'}}/>



 </Cell>

<Cell className="right-side" col={8}>  

<h2>Education </h2>

<Education year={'2012'}
endyear={'2014'}
myuniversity= {'University of Peshawar'}

description={'Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }


/>





<Education year={'2014'}
endyear={'2017'}
myuniversity= {'TU ilmenau'}

description={'Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }


/>


<hr style={{borderTop:'3px solid #e22947'}}/>

<h2> Job Experience  </h2>


<Experience   year={'2017'}
endyear={'2018'}
job= {'Computer Assistant'}

jobdescription ={'Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet'}  />



<Experience   year={'2018'}
endyear={'2019'}
job= {'Junior Front-End Developer'}

jobdescription ={'Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet'}  />




<hr style={{borderTop:'3px solid #e22947'}}/>


<h2>  Skills  </h2>


<Skills skill={'Javascript'} progress={100}/>


<Skills skill={'HTML/CSS'} progress={80}/>

<Skills skill={'React'} progress={50}/>
<Skills skill={'Bootstrap'} progress={70}/>
<Skills skill={'Jquery'} progress={60}/>
<Skills skill={'Python'} progress={25}/>


</Cell>









</Grid>




</div>

   


)
}


}


export default Resume;