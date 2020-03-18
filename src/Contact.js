import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";

const Contact = () => {
  const [isLoading, setisLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch("http://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(data => {
        setList(data);
        setisLoading(false);
      });
  }, []);

  const _renderItems = () => {
    return list.map((item, index) => <li>{item.title}</li>);
  };

  const _loadMoreItems = () => {
    console.log("_loadMoreItems");
    setisLoading(true);
    console.log("load more items");
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        // setList(prevState => console.log(prevState));
        //setList(data);
        // setList(prevState => ({
        //   ...prevState,
        //   data
        // }));
        //setList([...list, data]);
        setList(list => [...list, data]);
        console.log(list.length);
        setisLoading(false);
      });
    // Do the fetching of data here with AJAX
    // In this fake example we just generate more image urls
    // and set the state of 'loading' to false.
    // ...
  };

  const _renderWaypoint = () => {
    if (!isLoading) {
      return <Waypoint onEnter={_loadMoreItems} threshold={2.0} />;
    }
  };

  return (
    <div className='infinite-scroll-example'>
      <div className='infinite-scroll-example__scrollable-parent'>
        {isLoading && <h1>LOADING...</h1>}
        {!isLoading && <ol>{_renderItems()}</ol>}

        <hr />
        {_renderWaypoint()}
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
