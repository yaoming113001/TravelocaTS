import React from "react"
import { createContainer } from "unstated-next"

export const useHomeStore = () => {
  const [title] = React.useState("Sign in");
  const [info] = React.useState(" Please sign in to continue");
  const [image, setImage] = React.useState([
    {
      id: "1",
      image: "https://i.pinimg.com/736x/85/4b/31/854b31592e74f75e9715fa7c5bcbbd20.jpg",
      name: "hotel"
    },
    {
      id: "2",
      image: "https://i.pinimg.com/736x/85/4b/31/854b31592e74f75e9715fa7c5bcbbd20.jpg",
      name: "hotel"
    },
    {
      id: "3",
      image: "https://i.pinimg.com/736x/85/4b/31/854b31592e74f75e9715fa7c5bcbbd20.jpg",
      name: "hotel"
    }
  ])

  const [poster, setPoster] = React.useState([
    { id: "1", image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/92/2019/11/20071939/0919-AJS-NOI-Hotel-des-Arts-SGN-1275-Web-1500x690.jpg" },
    { id: "2", image: "https://maifootsteps.com/wp-content/uploads/2019/08/vocuc.jpg" },
    { id: "3", image: "https://www.101corpuschristi.com/uploads/media/default/0001/23/fef92b31aa597167a112c932f2777db7941a79d3.jpeg" },

  ])

  const [item, setItem] = React.useState([
    { id: "1", image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/92/2019/11/20071939/0919-AJS-NOI-Hotel-des-Arts-SGN-1275-Web-1500x690.jpg" },
    { id: "2", image: "https://maifootsteps.com/wp-content/uploads/2019/08/vocuc.jpg" },
    { id: "3", image: "https://www.101corpuschristi.com/uploads/media/default/0001/23/fef92b31aa597167a112c932f2777db7941a79d3.jpeg" },

  ])

  return { title, info, image, poster, item };
}

export const HomeStore = createContainer(useHomeStore);