import React from 'react';


class Search extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    
    render() {
        
        return (
            <>
            <h2  style={{textAlign:"center"}}><img style={{width:'300px', height:'200px',justifyContent:'center'}} src='https://yorkshirecoast.online/wp-content/uploads/2020/05/youtube-logo-nuovo-banner.jpg' alt="youtube logo"></img></h2>
            <div class='searchBar'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="videoSearch"><em>Search :</em></label>
                        <input onChange={this.handleChange} name='videoSearch' type="text" placeholder="Type anything you need..."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Search;
