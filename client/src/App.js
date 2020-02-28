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

  getCookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
  }

  componentWillMount() {
    const cookie = this.getCookie('userCookie');
    console.log(cookie);
    if(cookie) {
      this.setState({isLogin:true});
    } 
  }

  deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  componentDidMount() {
    //console.log(this.getCookie('userCookie'));
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

  LogoutHandler = () => {
    console.log('gkgg');
    this.deleteCookie('userCookie');
    this.setState({isLogin:false});
  }

  addHandler = (name) => {
    this.setState({cards:this.state.cards, userName:name, isLogin:this.state.isLogin});
    console.log(name, this.state.isLogin);
    this.callApi()
    .then(res => this.setState({cards: res}))
    .catch(err => console.log(err));
  }


  render() {
    return (
       this.state.isLogin ? 
      <div className="WholePage">
        <div className="NavArea">
          <Navigation LogoutHandler={this.LogoutHandler}></Navigation>
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
        <Add writer={this.state.userName} addHandler={this.addHandler}></Add>
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
