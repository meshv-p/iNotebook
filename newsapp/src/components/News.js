import React , {useState , useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

    const [loading, setloading] = useState(false);
    const [articles, setarticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);


    const capitalize = (string)=>{
        const arr = string.split(" ");
        for (let index = 0; index < arr.length; index++) {
            arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);

        }
        return arr.join(" ");
    }


    document.title= `${capitalize(props.category)} - News App -Get Daily News for Free`

    const Updatenews = async()=> {
        props.setProgressbar(10)
        // props.setProgressbar(10);
        let link = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
        setloading(true)
        let data = await fetch(link);
        props.setProgressbar(30)
        // props.setProgress(30);
        let json = await data.json();
        // props.setProgress(70);
        // console.log(json);
        setarticles(json.articles);
        setTotalResults(json.totalResults);
        setloading(false);
        // setState({ articles: json.articles, totalResults: json.totalResults, loading: false })
        props.setProgressbar(100);

    }
    useEffect(() => {
        Updatenews();
        // eslint-disable-next-line
    },[])

    // componentDidMount() {
    //     // let link = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3684e6479e9a4ac29fd01258fe97dc0e&page=1&pagesize=${props.pagesize}`;
    //     // setState({loading:true})
    //     // let data = await fetch(link);
    //     // let json = await data.json();
    //     // console.log(json);
    //     // setState({ articles: json.articles,totalResults:json.totalResults ,loading:false })
    //     // console.log('i am calling next btn');
    //     Updatenews();
    // }

    // next = () => {
    //     console.log("befor 1");
    //     setState({ page: state.page + 1 });
    //     console.log("after 1");
    //     Updatenews();
    // }
   // previous = async () => {
    //setState({ page: state.page - 1 });
      //  Updatenews();
    // }

    const fetchMoreData  = async()=> {
        setPage(page +1);
        let link = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
        // setState({ loading: true })
        // loading;
        setloading(true)
        let data = await fetch(link);
        let json = await data.json();
        // console.log(json);
        setarticles(articles.concat(json.articles));
        setTotalResults(json.totalResults);
        setloading(false);
        // setState({
        //     articles: state.articles.concat(json.articles),
        //     totalResults: json.totalResults, loading: false
        // })
    }

    // const fetchMoreData = async () => {
    //     // a fake async api call like which sends
    //     setPage(page +1)
    //     // setState({ page: state.page + 1 });
    //     loadmore();
    // };
        return (
            <>
                 <h1 className="text-center">Top {capitalize(props.category)} News</h1>
                    <hr />
                {loading && <Spinner />}
                <InfiniteScroll
                     dataLength={articles.length}
                     next={fetchMoreData}
                     hasMore={articles.length !== totalResults}
                     loader={<Spinner/>}
                 > 
                    <div className="container my-3">
                   
                        <div className="row">
                            {articles.map((e) => {
                                return <div className="col-auto mx-auto my-2" key={e.url}>
                                    <NewsItem title={e.title ? e.title.slice(0, 40) : ""} bgcolor={props.bgcolor} description={e.description ? e.description.slice(0, 88) : ""} imgageurl={e.urlToImage ? e.urlToImage : "https://images.hindustantimes.com/tech/img/2021/10/02/1600x900/SPACE-EXPLORATION-ISS-1_1631181193265_1633160041618.JPG"} newsurl={e.url} newstime={e.publishedAt.slice(0, 10)} author={e.author} source={e.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    
}

News.defaultProps = {
    pagesize: 8,
    category: 'general'
}

News.propTypes = {
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News
