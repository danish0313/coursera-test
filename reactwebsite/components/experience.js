import React, {Component} from 'react';

import {Grid , Cell} from 'react-mdl';

class Experience extends Component {
	
render ()  {
	
return (

<div> 
<Grid>
<Cell col={4}> 

<p> From   {this.props.year}  - {this.props.endyear}  </p>



 </Cell>





<Cell col={8}>     <h4 style={{marginTop: '0px'}}>{this.props.job} </h4>    

<p> {this.props.jobdescription} </p>

       </Cell>

</Grid>



 </div>

)


}





}


export default Experience;