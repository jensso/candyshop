import React from 'react';
import { NavLink } from 'react-router-dom';

export class MoreInfo extends React.Component {
  render() {
    return(
      <div className="jumbotron bg-info m-2 p-2">
        <p className="lead m-2 px-1 bg-light text-secondary"><b>Chocolate</b> is a usually sweet, brown food preparation of roasted and ground cacao seeds. It is made in the form of a liquid, paste, or in a block, or used as a flavoring ingredient in other foods. The earliest evidence of use traces to the Olmecs, with evidence of chocolate beverages dating to 1900 BC.</p>
        <p className="lead m-2 px-1 bg-light text-secondary"><b>Candy</b>, also called sweets or lollies, is a confection that features sugar as a principal ingredient. The category, called sugar confectionery, encompasses any sweet confection, including chocolate, chewing gum, and sugar candy.</p>
        <p className="lead m-2 px-1 bg-light text-secondary"><b>Pastry</b> is a dough of flour, water and shortening that may be savoury or sweetened. Sweetened pastries are often described as bakers' confectionery. The word "pastries" suggests many kinds of baked products made from ingredients such as flour, sugar, milk, butter, shortening, baking powder, and eggs.</p>
        <span className="d-flex bg-info">
          <NavLink to='/start'className="nav-link text-dark">back</NavLink>
        </span>
      </div>
    )
  }
}
