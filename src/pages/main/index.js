import React, { Component } from 'react';
import api from '../../Services/api';

class Main extends Component{
    state = {
        products: []
    }

    async load_products(){
        const response = await api.get('/products');

        this.setState({products: response.data.docs})
        // this.state.products = response.data.docs;
    }


    componentDidMount() {
        this.load_products();
    }

    render(){
        return(
            <div className="product-list">
                {this.state.products.map(product => (
                    <div>
                        {product.title}
                    </div>

                ))}
            </div>
        )
    }
}

export default Main;