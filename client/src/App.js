import React from 'react';
import Navigation from './Components/NavigationBar';
import Add from './Components/Add';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Card from './Components/Card';
import './App.css';
import { Row, Spinner } from 'reactstrap';
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards: '',
      userName: '',
      isLogin: false
    }
  }


  componentDidMount() {
    this.callApi()
    .then(res => this.setState({cards: res}))
    .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/cards');
    const body = await response.json();
    return body;
  }

 isLoginChange = (name) => {
    this.setState({cards:this.state.cards, userName:name, isLogin:!this.state.isLogin});
  }

  render() {
    return (
       this.state.isLogin ? 
      <div className="WholePage">
        <div className="NavArea">
          <Navigation isLoginChange={this.isLoginChange}></Navigation>
        </div>
        <Row className="CardArea">
        {this.state.cards ? this.state.cards.map((c, index) => {
          return <Card
                key={c.id}
                word= {c.word}
                writer = {c.writer}
                date = {c.date}
                Likes = {c.Likes}
                meaning = {c.meaning}
          />
        }) : <Spinner className="spinner" color="primary" />}
        </Row>
        <Add></Add>
        <div className="FooterArea">
          <Footer className="NavFix"></Footer>
        </div>
      </div> :
      <div>

        <Login isLoginChange={this.isLoginChange}></Login>

      </div>
      

    );
  }
}

export default App;
