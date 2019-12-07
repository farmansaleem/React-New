import React from 'react'
import Users from './users'
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      "data": [
        { "title": "Product Title", "img": "./p-1.jpg", "des": "DES1", "rs": 599 },
        { "title": "Product Title", "img": "./p-1.jpg", "des": "DES1", "rs": 599 },
        { "title": "Product Title", "img": "./p-1.jpg", "des": "DES1", "rs": 599 }
      ]
    }
  }
  render() {
    return <h1>Contact
      <ul>
        {
          this.state.data.map((product, index) => (
            <li key={index} >{this.state.data[index].title}
              {console.log(this.state.data[index].title)}
            </li>
          ))
        }
      </ul>
      {/* <Users/> */}
    </h1>
  }
}
export default Contact
