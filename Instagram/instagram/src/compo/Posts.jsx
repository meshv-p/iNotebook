import React , {useEffect , useState} from 'react'
import { Postitem } from './Postitem'
import InfiniteScroll from 'react-infinite-scroll-component'

export const Posts = () => {

    const [post, setPost] = useState([])
    const [totalResults, setTotalResults] = useState(10000)
    const [pgno, setPgno] = useState(1)
    let fetchdata = async ()=>{
        let link = `https://randomuser.me/api/?page=${pgno}&results=10`;
        let data = await fetch(link);
        let json = await data.json();
        console.log(json);
        setTotalResults(json.results)
        console.log(typeof json.results[1]);
        setPost(json.results);
    }

    useEffect(  () => {
       fetchdata();
       // eslint-disable-next-line
    }, [])

   let fetchMoreData = async ()=>{
    setPgno(pgno +1)
    let link = `https://randomuser.me/api/?page=${pgno}&results=10`;
    let data = await fetch(link);
    let json = await data.json();
    setPost(post.concat(json.results));
   }

    return (
        <>
            <InfiniteScroll
            dataLength={post.length}
            next={fetchMoreData}
            hasMore={post.length !== totalResults}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
        >
            {post.map((e)=>{
               return <Postitem pic={e.picture.medium} location={e.location.country} name={e.name.first} main_pic={e.picture.large} key={e.cell}/>
            })}
            </InfiniteScroll>
        </>
    )
}
