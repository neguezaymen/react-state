import react,{Component,setState} from 'react';
import './App.css';



class App extends Component {
  
  state= {
    statut:false,
    fullName:'Neguez Aymen',
    bio:'Developer',
    profession:'Fullstack',
    imgSRC:'https://i.ibb.co/yVTHdQm/me.jpg'
  };
  render(){
    
    return (
    <div className="App">
     <button onClick={()=>this.setState({statut:!this.state.statut})}>Click me</button>

      {this.state.statut 
      ? 
      <div className="card">
        <div className="imgBx">
            <img src={this.state.imgSRC} alt="images"/>
        </div>
        <div className="details">
      <h2>{this.state.fullName}<br/><span>{this.state.profession+' '+this.state.bio}</span></h2>
            
        </div>
      </div>
      :<h1 style={{color:'white'}}> Click the Button</h1>}
      
    </div>
  );
  }
  
}

export default App;
