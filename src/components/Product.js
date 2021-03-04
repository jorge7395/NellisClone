import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // items:
    };
  }

  render() {
    const Product = this.props.items.map((item) => {
      return (
        <CardGroup>
        <Card  >
          <div key={item.id} >
            <img src={item.image} alt={item.name} />
            
              <CardTitle>{item.name}</CardTitle>
              <p>{item.description}</p><Button className="bid">Submit Bid</Button>
          </div>
        </Card>
        </CardGroup>
      );
    });

    return (
      <div className="container ">

        <div className="row ">
          <div className="col">
          {Product}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
