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
      isLogin: false,
      searchKeyword: ''
    }
  }

  getCookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
  }

  componentWillMount() {
    const cookie = this.getCookie('userCookie');
    if(cookie) {  
      this.setState({isLogin:true});
      this.setState({userName: decodeURI(this.getCookie('userNameCookie'))});
    } 
  }

  deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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

  LogoutHandler = () => {
    console.log('gkgg');
    this.deleteCookie('userCookie');
    this.deleteCookie('userNameCookie');
    this.setState({isLogin:false});
    this.setState({userName: ''});
  }

  addHandler = (name) => {
    this.setState({cards:this.state.cards, userName:name, isLogin:this.state.isLogin});
    console.log(name, this.state.isLogin);
    this.callApi()
    .then(res => this.setState({cards: res}))
    .catch(err => console.log(err));
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
    }
    
    filteredComponents = (data) => {
      data = data.filter((c) => {
      return c.word.indexOf(this.state.searchKeyword) > -1;
      });
      return data.reverse().map((c, index) => {
        return <Card
              key={c.id}
              word= {c.word}
              writer = {c.writer}
              date = {c.date}
              Likes = {c.Likes}
              meaning = {c.meaning}
        />
      });
      }
      
      


  render() {
    return (
       this.state.isLogin ? 
      <div className="WholePage">
        <div className="NavArea">
          <Navigation LogoutHandler={this.LogoutHandler}
                      handleValueChange={this.handleValueChange}
                      searchKeyword={this.state.searchKeyword}
          ></Navigation>
        </div>
        <Row className="CardArea">
        {this.state.cards ? 
          this.filteredComponents(this.state.cards)
        : <Spinner className="spinner" color="primary" />}
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
