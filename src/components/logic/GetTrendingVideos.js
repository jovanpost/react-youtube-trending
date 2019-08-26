import React from "react";

export default class GetTrendingVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            trendingVideos: null,
            countryCode: 'MK'
        };
    }

    async componentDidMount() {
        this.setState({
            countryCode: this.props.getCountryCode
        });

        let countryCodeFetch = this.props.getCountryCode

        const url = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=" + countryCodeFetch + "&maxResults=10&key=AIzaSyA-notZNOgg9zgaVoxPZQTe-a7LpJh0TZo";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            trendingVideos: data.items,
            loading: false,
        });

        this.handleClick = (e) => {
            e.preventDefault();
            this.componentDidMount()
        };
    }

    render() {
        if (this.state.loading) {
            return <div id="loading" >loading...</div>;
        }

        if (!this.state.trendingVideos) {
            return <div id="noFound">didn't get the latest trending videos</div>;
        }

        let items = this.state.trendingVideos

        return (

            <div id="videosBlock">
                <button onClick={this.handleClick}>Get the trending videos</button>
                {items.map(item => <div id="singleVideo"> <a id="videoImg" href={"https://youtu.be/" + item.id} target="_blank" rel="noopener noreferrer"><img src={item.snippet.thumbnails.high.url} alt="" /></a> <a id="videoTitle" href={"https://youtu.be/" + item.id} target="_blank" rel="noopener noreferrer"><h3>{item.snippet.title}</h3></a> <p id="videoChannelTitle"> - {item.snippet.channelTitle} </p> <p id="videoViews">{item.statistics.viewCount} views - </p> <p id="videoDescription">{item.snippet.description}</p> </div>)}
            </div>
        );
    }
}