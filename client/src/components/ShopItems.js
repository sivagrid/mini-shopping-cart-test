import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem'

const ShopItems = ({ items }) => {
  if (!items.length) {
    return <p className='no-shop-items'>No items</p>;
  }

  return (
    <ul className='shop-item-list'>
      {items.map(item =>
        <ShopItem
          key={item._id}
          id={item._id}
          name={item.name}
          price={item.price}
          img={item.img}
        />
      )}
    </ul>
  );
};

ShopItems.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default ShopItems;
