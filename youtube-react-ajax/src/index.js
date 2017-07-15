import _ from 'lodash';
import React, {Component} from 'react';
// js modules - all our code that we write in separate files is seperate from other files/ libraries that we import into our project. 'silow' - can't make refernece to other variables. So even thought react is installed in the project as a dependency, we need to explicitly say ' hey I want access to react in this file right here)'
import ReactDOM from 'react-dom';

import Searchbar from './components/search_bar'; // we must give a file reference to files that we've made and then import. Write the relative path from thefile that we're importing it from (from index.js to search_bar.js
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA-6gNwuUqHynwP8jaFG-uqBuhE6Ca4n7s';


// create a new component. This componenet should produce some html

 class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }; //state starts as an empty array BUT

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
    // the moment that the component is rendered it kicks of a search and when the search is complete it updates the alue of this.state.videos with a new list of videos
  }
  // NOTE: there is NO pause between the constructor running and the render. I.e. the render function does not wait for the constructor to fully return. Treies to render itself (and is undefined.)

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
    // it's only going to run every 300 milliseconds (using lodash)
    return (
      <div>
        <Searchbar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>  {/* this is how we pass the info from the parent component to the child component. This is known as passing props. We are passing the state as a property to the videolist function, so that should take props as a parameter. In clss based componenets, we can access props by this.props (doesn't need to be passed in?) */}
      </div>
    );

  }
}

// react please take this component that I just made, and shove it into the DOM. AKA:
  // Take this component's generated HTML and put it on the page (in the DOM)
  // we must instantiate(create an instance of - from our class) our components before we try to render them to the dom


ReactDOM.render(<App />, document.querySelector('.container'));
// react, please go and render my element to the DOM

  // param 1: render this component
  // param 2: render it to this place
// now we atucally have two different libraries. React and ReactDOM. So when we want to render something to the DOM, we need to call on ReactDOM

// passing classes vs passing instances:

// class
// ReactDOM.render(App);
// instance:
// ReactDOM.render(<App />);

// we pass an instance by wrapping it in a JSX tag
// ReactDOM.render(<Searchbar />, document.querySelector('.container'));


{/* <Searchbar />    */}
// this is JSX. Looks like html, but is really just js.
  // js can be nested like regular html
