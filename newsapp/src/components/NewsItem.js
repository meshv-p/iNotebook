import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let {title,description, imgageurl, newsurl, newstime } = this.props;

        return (
            <div className="container my-3">
                <div className="card" style={{width: '18rem'}}>
                    <img src={imgageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-outline-primary btn-sm">Read more</a>
                    <small className="text-muted ms-5 ps-4">{newstime}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
