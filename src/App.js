import React from 'react';
import Navigation from './Components/NavigationBar';
import Add from './Components/Add';
import Footer from './Components/Footer';
import Card from './Components/Card';
import './App.css';
import { Row } from 'reactstrap';
class App extends React.Component {
  render() {
    return (
      <div className="WholePage">
        <div className="NavArea">
          <Navigation></Navigation>
        </div>
        <Row className="CardArea">
          <Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          />
          <Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          /><Card
            word="Hello world"
            writer="정성훈"
            date="2020/02/26"
            Likes="3"
            content="Allow me to introduce myself. My name is seonghoon. I live in cheonan. I like basketball. My major is computer engineering"
          />
        </Row>
        <Add></Add>
        <div className="FooterArea">
          <Footer className="NavFix"></Footer>
        </div>
      </div>

    );
  }
}

export default App;
