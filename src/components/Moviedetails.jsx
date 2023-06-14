import React from 'react'

const Moviedetails = ({data}) => {
  return (
    <>
      {console.log(data)}
      <div className="details row d-flex m-2">

        <div className="intro card col col-md-3 col-sm-6 mb-1 pt-1">
        <img src={data.Poster} alt="a" />
          <span className='title m-1 p-1'>{data.Title}</span>
        </div>


        <div className="col col-md-8 col-sm-10">
            <div className="card">
              <div className="card-header d-flex justify-content-evenly">

                {data.imdbRating>7 && 
                  <span className="badge bg-success mx-2">{data.imdbRating} imdb Rating</span>}
                
                {data.imdbRating<=7 && data.imdbRating>4 && 
                  <span className="badge bg-warning mx-2">{data.imdbRating} imdb Rating </span>}

                {data.imdbRating<=4 && 
                  <span className="badge bg-danger mx-2">{data.imdbRating} imdb Rating </span>}

                <span className="badge bg-info">
                  {data.imdbVotes} imdbVotes
                </span>
              </div>


              <div className="card-body">
                <ul class="list-group">

                  <li class="list-group-item">
                    Actor : <span className="fw-bold">{data.Actors}</span>
                  </li>

                  <li class="list-group-item">
                    Plot : <span>{data.Plot}</span>
                  </li>

                  <li class="list-group-item">
                    Awards : <span>{data.Awards}</span>
                  </li>
                  
                  <li class="list-group-item">Language : {data.Language}</li>

                  <li class="list-group-item">
                    Genre : {data.Genre};
                  </li>

                  <li class="list-group-item">
                    Director : {data.Director}
                  </li>
                  
                  <li class="list-group-item">
                    Region : {data.Country}
                  </li>
                  <li class="list-group-item">
                    Year : {data.Year}
                  </li>
                </ul>
              </div>
            </div>  
          </div>
        </div>
    </>
  )
}

export default Moviedetails