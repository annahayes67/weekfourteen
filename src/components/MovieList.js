import Movie from "./Movie";
import React from 'react';



let dataArray = [

    {
       Title: "Titanic",

       Synopsis: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",

      },


    {
        Title: "E.T. the Extra-Terrestrial",

        Synopsis: "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.",
     },

     {
        Title: "The Wizard of Oz",

        Synopsis: "Young Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz, and embark on a quest with three new friends to see the Wizard, who can return her to her home and fulfill the others' wishes.",
     },

     {
        Title: "The Lion King",

        Synopsis: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
     },

     {
        Title: "Jurassic Park",
        Synopsis: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
     },
]




const MovieList = (props) => {
  return (
    <div>
      {dataArray.map((movie, index) => {
        return (
          <Movie
            key={index}
            title={movie.Title}
            synopsis={movie.Synopsis}
            rating={movie.Rating}
          />
        );
      })}
    </div>
  );
};

export default MovieList;