import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects : Array<any> = [
    {
      image: "./assets/images/radicalbus.png",
      title: "The Radical Bus",
      des: "An angular webpage I made for the Radical Bus. A New York City\
                   based mutual aid for the betterment of youth education. They provide\
                   financial support and educational support for underprivilaged kids.",
      liveLink: "danielogy.github.io/theradicalbus",
      codeLink: "github.com/Danielogy/theradicalbus",
    },
    {
      image: "./assets/images/jokesapp.png",
      title: "Random Jokes",
      des: "Made with React.js, this application uses JokeAPI to fetch and retrieve\
            a wide selection of jokes in various languages. The user may also choose\
            to filter out content which will call a specific query in the API.",
      liveLink: "danielogy.github.io/jokes-app/",
      codeLink: "github.com/Danielogy/jokes-app",
    },
    {
      image: "./assets/images/happytails.png",
      title: "Happy Tails Loving Care",
      des: "Using Angular and multiple libraries, I made a beautiful website for a dog sitter\
            based in New Jersey. Comes equipped with a gallery and a working contact page, as well\
            as a responsive and striking design.",
      liveLink: "happytailslovingcare.com",
      codeLink: "github.com/Danielogy/happytailslovingcare",
    },
    {
      image: "./assets/images/todo.png",
      title: "Todo App",
      des: "Well everyone has to start somewhere right? A basic todo app made with angular. I also have one made in React.js, just ask!",
      liveLink: "danielogy.github.io/todo-app/",
      codeLink: "github.com/Danielogy/todo-app",
    },
    {
      image: "./assets/images/weather.png",
      title: "Weather App",
      des: "Simple and straight to the point. Using your geolocation and OpenWeatherMap API, this\
            webpage displays your current weather in either Celsius or Fahrenheit.",
      liveLink: "danielogy.github.io/weather-app/",
      codeLink: "github.com/Danielogy/weather-app",
    },
    {
      image: "./assets/images/etch.png",
      title: "Etch-a-Sketch",
      des: "Feeling creative? Head into etch-a-sketch and draw out your imagination!\
            choose your own colors, a rainbow pen, and other options to make your imaginations\
            come to live!",
      liveLink: "danielogy.github.io/etch-a-sketch/",
      codeLink: "github.com/Danielogy/etch-a-sketch",
    },
  ]
  ngOnInit(): void {
  }

}
