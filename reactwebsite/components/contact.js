import React, {Component} from 'react';

import {Grid, Cell , List , ListItem , ListItemContent} from 'react-mdl';

class Contact extends Component{

render() {

return (  

<div className="contact-body">

<Grid className="contact-grid">

<Cell col={6}>     <h2>  Danish Khan </h2> 

<img src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
style={{height: '250px'}}/>

<p style={{ width: '75%' , margin:'auto', paddingTop: '1em'}}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia... </p>


 </Cell>

<Cell col={6}>  <h2>  Contact Me</h2> 
<hr/>

<div className="contact-list">


<List>
  <ListItem>
  
  <ListItemContent style={{  fontSize:'30px', fontFamily:'Anton'}}>

<i className="fa fa-phone-square" aria-hidden="true"/>
  (123) 456-7890

  </ListItemContent>


  </ListItem>
  <ListItem>
    
<ListItemContent style={{  fontSize:'30px', fontFamily:'Anton'}}>

<i className="fa fa-fax" aria-hidden="true"/>
  (123) 456-7890

  </ListItemContent>

  </ListItem>





 <ListItem>

<ListItemContent style={{  fontSize:'30px', fontFamily:'Anton'}}>

<i className="fa fa-skype" aria-hidden="true"/>
 someone@example.com

  </ListItemContent>


  </ListItem>





  <ListItem>

<ListItemContent style={{  fontSize:'30px', fontFamily:'Anton'}}>

<i className="fa fa-envelope" aria-hidden="true"/>

 someone@example.com

  </ListItemContent>


  </ListItem>
</List>

</div>

</Cell>



</Grid>
</div>


)
}


}


export default Contact;