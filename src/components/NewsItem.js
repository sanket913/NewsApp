import React from 'react'

const NewsItem=(props)=>{

    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card" style={{ boxShadow: '9px 9px 10px #181616' }}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
        {source}</span>
        <img src={imageUrl?imageUrl:"https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1c2luZXNzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description?description:"No description"}</p>
            <p className="card-text"><small className="text-danger">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }

export default NewsItem
