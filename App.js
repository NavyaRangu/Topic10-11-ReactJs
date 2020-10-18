import React, { Component } from 'react';
class App extends Component{
   constructor(){
      super();
      this.state={
         Maths:0,
         Physics:0,
         Biology:0,
         Chemistry:0,
         average:0,
         showaverage:false
      }

      this.textfieddchange=this.textfieddchange.bind(this);
      this.getAverage=this.getAverage.bind(this);
   }

   textfieddchange(event){
      //alert(event.target.name + event.target.value);
      let partialstate={};
      partialstate[event.target.name]=event.target.value;
      
      this.setState(partialstate);
   }
   getAverage()
   {
      
      let avg=(Number(this.state.Biology)+Number(this.state.Maths)+Number(this.state.Chemistry)+Number(this.state.Physics))/4;
      //this.setState({average:avg,showaverage:true});
      alert("average is "+avg);
   }

   render(){
         return(
         <div>
            <table>
               <tr>
                  <td>Physics : </td>
                  <td><input type="text" value={this.state.Physics} name="Physics" onChange={this.textfieddchange}/></td>
               </tr>
               <tr>
                  <td>Biology : </td>
                  <td><input type="text" value={this.state.Biology} name="Biology" onChange={this.textfieddchange}/></td>
               </tr>
               <tr>
                  <td>Chemistry : </td>
                  <td><input type="text" value={this.state.Chemistry} name="Chemistry" onChange={this.textfieddchange}/></td>
               </tr>
               <tr>
                  <td>Mathematics : </td>
                  <td><input type="text" value={this.state.Maths} name="Maths" onChange={this.textfieddchange}/></td>
               </tr>
            </table>
           <div><button onClick={this.getAverage} name="Get Average">Get Average</button>
          {/* {this.state.showaverage?<p>Average : {this.state.average}</p>:null}*/}
            </div>
            
            </div>
      );
   }
}

export default App;