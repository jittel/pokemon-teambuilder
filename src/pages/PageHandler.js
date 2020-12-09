import React, {Component} from 'react';
import Home from './Home';
import TypePage from './TypePage';
import NavBar from '../components/Navbar'

class PageHandler extends Component {
    state = {
        currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "TypePage") {
            return <TypePage />;
        }
    };

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <NavBar
                        currentPage={this.state.currentPage}
                        handlePageChange={this.handlePageChange}
                    />
                    {this.renderPage()}
                </div>
            </div>
        );
    }
}

export default PageHandler;