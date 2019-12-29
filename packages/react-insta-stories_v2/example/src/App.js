import React, { useEffect } from 'react';
import './App.css';
import Stories from '@pkg/tt-test'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentDidMount() {
    setTimeout(() => {
      // this.setState({ stories: stories2 })
    }, 3000);
  }
  render() {
    console.log('rendered')
    return (
      <div className="App">
        <div className="stories">
          <Stories loop defaultInterval={3000} stories={stories2} />
        </div>
      </div>
      // <div className="App">
      //   <a href="https://github.com/mohitk05/react-insta-stories/pull/32">react-insta-stories</a>
      // </div>
    );
  }
}

function Test(props) {
  return (
    <div style={{ background: 'pink', padding: 20, width: '100%' }}>
      <div>
        <h1>{props.isPaused.toString()} === {Math.round(props.progress)}</h1>
      </div>
    </div>
  )
}

const stories2 = [
  {
    content: Test
  },
  {
    content: props => {
      return <div style={{ background: 'pink', padding: 20, width: '100%' }}>

        <h1>{props.isPaused.toString()} === {Math.round(props.progress)}</h1>
      </div>
    },
  },
  {
    content: props => {
      return <div style={{ background: 'pink', padding: 20, width: '100%' }}>
        <h1>{props.isPaused.toString()} === {Math.round(props.progress)}</h1>
      </div>
    },
  },
]

const image = {
  display: 'block',
  maxWidth: '100%',
  borderRadius: 4,
}

const code = {
  background: '#eee',
  padding: '5px 10px',
  borderRadius: '4px',
  color: '#333'
}

const contentStyle = {
  background: 'salmon',
  width: '100%',
  padding: 20,
  color: 'white'
}

const stories = [{ url: 'https://picsum.photos/1080/1920', header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' }, seeMore: <div>Hello</div> }, { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } }, { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } }, { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video' }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' }, 'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80', 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1499202189329-5d76e29aa2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80'].map((s, i) => {
  if (i !== 4 && i !== 5) {
    if (typeof s === 'string') {
      let o = {}
      o.url = s
      o.styles = {
        objectFit: 'cover',
        width: '100%', margin: 'none'
      }
      return o
    }
    s.styles = {
      objectFit: 'cover',
      width: '100%', margin: 'none'
    }
    return s
  } else return s
})

export default App;

export function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => { };
  }, [delay]);
}