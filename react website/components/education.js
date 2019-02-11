import React, {Component} from 'react';

import {Grid , Cell} from 'react-mdl';

class Education extends Component {
	
render ()  {
	
return (

<div> 
<Grid>
<Cell col={4}> 

<p> From   {this.props.year}  - {this.props.endyear}  </p>



 </Cell>





<Cell col={8}>     <h3 style={{marginTop: '0px'}}>{this.props.myuniversity} </h3>    

<p> {this.props.description} </p>

       </Cell>

</Grid>



 </div>

)


}





}


export default Education;