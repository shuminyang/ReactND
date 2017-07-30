import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddRead.css';
import * as bookApi from '../../services/BookApi';
import ReadStatus from './ReadStatus';

class AddRead extends Component {
    constructor() {
        super();
        this.state = {
            termSearch: '',
            listSearch: []
        };
    }

    onInputChange = (event) => {
        const term = event.target.value;
        this.setState({
            termSearch: event.target.value
        });
        this.searchImplicit(term);
    };

    searchImplicit(term) {
        bookApi.search(term, 5).then(res => {
            if (res.error === undefined) {
                this.setState({
                    listSearch: res
                });
            } else {
                this.setState({
                    listSearch: []
                });
            }
        });
    }

    onBookChange = (book, shelf) => {
        bookApi.update(book, shelf).then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <div className="close-search">Close</div>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.termSearch} onChange={this.onInputChange} />
                    </div>
                </div>

                {this.state.termSearch.length !== 0 && (<ReadStatus title='Result' books={this.state.listSearch} booksState={this.onBookChange} />)}
            </div>
        )
    }
}

export default AddRead;