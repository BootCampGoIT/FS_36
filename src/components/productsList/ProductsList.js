import React, { Component, Suspense, lazy } from 'react';
import { createProduct, getProducts } from '../../api';
import { Link, Switch, Route, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
// import ProductsListItem from './ProductsListItem';


const AsyncComponent = lazy(() => import('./ProductsListItem'  /* webpackChunkName: "ProductsListItem" */));

const MyComponent = (props) => (
    <AsyncComponent product={props.product} />
);

class ProductsList extends Component {
    state = {
        products: [],
        productName: "",
        price: ""
    }

    async componentDidMount() {
        // const result = await getProducts();
        // const keys = Object.keys(result.data);
        // const data = [];
        // for (const key of keys) {
        //     data.push({ id: key, ...result.data[key] })
        // }
        console.log('props', this.props)


        const response = await getProducts()
        const products = Object.keys(response.data).reduce((acc, key) => {
            acc.push({ id: key, ...response.data[key] })
            return acc
        }, []);
        this.setState({ products })



        // this.setState({ products: [...getProducts()] })

    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { productName, price } = this.state;
        createProduct({ productName, price })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { productName, price, products } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="productName" value={productName} onChange={this.handleChange} />
                    <input type="text" name="price" value={price} onChange={this.handleChange} />
                    <button>Create product</button>
                </form>

                <ul className="list">
                    {products.map(({ productName, price, id }) =>
                        <li key={id}>
                            <Link to={`${this.props.match.url}/${id}`}>{productName}</Link>
                        </li>)}

                    {/* <span>{productName}</span>
                            <span>{price}</span> */}
                </ul>

                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            {products.map((product) =>
                                <Route path={`${this.props.match.url}/${product.id}`} key={product.id} render={() => <MyComponent product={product} />} />
                            )}
                            {/* <Route component={() => <h2>Error</h2>}/> */}
                        </Switch>
                    </Suspense>
                </div>
            </>

        );
    }
}

export default ProductsList;