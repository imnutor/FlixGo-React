import React, { Component } from "react";
import ItemCard from "./item";


export default class ContentItem extends Component {
    releaseMovie = [
        {
            id:1,
            name:"I Dream in Another Language",
            tag:"Action, Adventure",
            rate: 8,
            resolution: "HD",
            ageSuitable:"17+",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            imageMovie: "./image/covers/cover.jpg"
        },
        {
            id:2,
            name:"Benched",
            tag:"Drama, Horror",
            rate: 8.1,
            resolution: "HD",
            ageSuitable:"18+",
            description: "A clown-for-hire by day, he aspires to be a stand-up comic at night...but finds the joke always seems to be on him. Caught in a cyclical existence between apathy and cruelty, Arthur makes one bad decision that brings about a chain reaction of escalating events in this gritty character study.",
            imageMovie: "./image/covers/cover2.jpg"
        },
        {
            id:3,
            name:"Whitney",
            tag:"Action, Comedy",
            rate: 8.9,
            resolution: "FHD",
            ageSuitable:"16+",
            description:"In a mystery that carries him from gin-soaked jazz clubs in Harlem to the hard-edged slums of Brooklyn and, finally, into the gilded halls of New York's power brokers, Lionel contends with thugs, corruption and the most dangerous man in the city to honor his friend and save the woman who might be his own salvation.",
            imageMovie: "./image/covers/cover3.jpg"
        },
        {
            id:4,
            name:"Blindspotting",
            tag:"Gangster, Crime",
            rate: 8.5,
            resolution: "HD",
            ageSuitable:"18+",
            description:"When an unexpected encounter introduces a powerful new alliance, Maleficent and Aurora are pulled apart to opposing sides in a Great War, testing their loyalties and causing them to question whether they can truly be family.",
            imageMovie: "./image/covers/cover4.jpg"
        },
        {
            id:5,
            name:"Stylist",
            tag:"Comedy, Fantasy",
            rate: 7.5,
            resolution: "FHD",
            ageSuitable:"18+",
            description:"The White House and through the heartland, these four slayers must face off against the many new kinds of zombies that have evolved since the first movie, as well as some new human survivors. But most of all, they have to face the growing pains of their own snarky, makeshift family.",
            imageMovie: "./image/covers/cover5.jpg"
        },
        {
            id:6,
            name:"Abandoned House",
            tag:"Horror, Action",
            rate: 8.8,
            resolution: "HD",
            ageSuitable:"18+",
            description:"Forming an unlikely alliance, Dan and Abra engage in a brutal life-or-death battle with Rose. Abra's innocence and fearless embrace of her shine compel Dan to call upon his own powers as never before-at once facing his fears and reawakening the ghosts of the past.",
            imageMovie: "./image/covers/cover6.jpg"
        },
    ]

    renderMovieRelease = () =>{
        return this.releaseMovie.map((item,index) => {
            return <ItemCard key={index} movieRelease={item}/>
        })
    }

  render() {
    return (
      <div className="row">
          {this.renderMovieRelease()}
      </div>
    );
  }
}
