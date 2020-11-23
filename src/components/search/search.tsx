import React, {Component} from 'react';
import ApiService from "../../services/api-service";
import './search.css';

type searchItem = {
    id: number,
    text: string
}

export default class Search extends Component{
    apiService = new ApiService();

    state = {
        text: '',
        items: null,

    }

    search = (items: [], text: string) => {

        if (text.length === 0) {
            return items;
        }
        return items.filter((item: searchItem) => {
            return item.text
                .toLowerCase()
                .indexOf(text.toLowerCase()) > -1;
        });
    }

    componentDidMount() {
        this.apiService
            .getAllData('/people/')
            .then((items) => {
                this.setState({
                    items
                });
            });
    }

    onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.target.value;
        const newArray =
        this.setState( {text: ''} );
    }

    render(){
        return(
            <form className="form-group search-input d-flex" onSubmit={this.onSubmit}>
                <input className="form-control mr-1"
                       type="text"
                       placeholder="Введите слово"
                       value={this.state.text}
                />
                    <button className="btn btn-outline-info">Поиск</button>
            </form>
        )
    }
}