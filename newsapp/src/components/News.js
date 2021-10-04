import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    constructor() {
        super();
        console.log("hey i am constructor in news com");

        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let link = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3684e6479e9a4ac29fd01258fe97dc0e&page=1&pagesize=${this.props.pagesize}`;
        {this.setState({loading:true})}
        let data = await fetch(link);
        let json = await data.json();
        console.log(json);
        this.setState({ articles: json.articles,totalResults:json.totalResults ,loading:false })
    }

    next = async ()=>{
        console.log('next');
        let link = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3684e6479e9a4ac29fd01258fe97dc0e&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        {this.setState({loading :true})}
        let data = await fetch(link);
        let json = await data.json();
        // console.log(json);
        this.setState({ articles: json.articles ,
                        page:this.state.page +1,
                    loading:false})
    }
    previous = async()=>{
        let link = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3684e6479e9a4ac29fd01258fe97dc0e&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        {this.setState({loading :true})}
        let data = await fetch(link);
        let json = await data.json();
        console.log(json);
        this.setState({ articles: json.articles ,
                        page:this.state.page +-1,loading:false})
    }

    render() {
        return (
            <div className="container my-2">
                <h1 className="text-center">{this.props.heading}</h1>
               {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((e) => {
                        return <div className="col-auto" key={e.url}>
                            <NewsItem title={e.title ? e.title.slice(0, 42) : ""} description={e.description ? e.description.slice(0, 88) : ""} imgageurl={e.urlToImage ? e.urlToImage : "https://images.hindustantimes.com/tech/img/2021/10/02/1600x900/SPACE-EXPLORATION-ISS-1_1631181193265_1633160041618.JPG"} newsurl={e.url} newstime={e.publishedAt.slice(0, 10)} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-info " onClick={this.previous}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page +1> Math.ceil(this.state.totalResults/this.props.pagesize)}  className="btn btn-secondary" onClick={this.next}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
