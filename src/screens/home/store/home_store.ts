import { isNil, isUndefined, result } from "lodash";
import React, { useCallback, useState } from "react"
import { createContainer } from "unstated-next"
import { Item } from "../../../share/types/item";
import { GlobalStore } from "../../../share/useStore/global_store";

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

  const [item, setItem] = React.useState<Item[]>([
    {
      id: "01123",
      title: "Khach san 1 sao",
      image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/92/2019/11/20071939/0919-AJS-NOI-Hotel-des-Arts-SGN-1275-Web-1500x690.jpg",
      content: "Khach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfs Khach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfs Khach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfsKhach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfs",
      email: "Heolll@gmail.com",
      phone: "0902449999",
      price: 100,
      rating: 4.5,
      comment: [
        {
          id: "01",
          title: "Khach san sddds",
          rating: 3
        }
      ]
    },
    {
      id: "02562",
      title: "Nha hang 1 sao",
      image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/92/2019/11/20071939/0919-AJS-NOI-Hotel-des-Arts-SGN-1275-Web-1500x690.jpg",
      content: "Khach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfs Khach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfs Khach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfsKhach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfs",
      email: "Heolll@gmail.com",
      phone: "0902449999",
      price: 100,
      rating: 4.5,
      comment: [
        {
          id: "01",
          title: "Khach san sddds",
          rating: 3
        }
      ]
    },
    {
      id: "03145",
      title: "Da lat 1 sao",
      image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/92/2019/11/20071939/0919-AJS-NOI-Hotel-des-Arts-SGN-1275-Web-1500x690.jpg",
      content: "Khach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfs Khach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfs Khach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfsKhach san dep vl sdffs fs fsdfklsjdlfs js sdfjslcsj sfl sdjfsj sldkfs l jsklj slkdfj sldfj skldjf skldj skldf skljfsl djfskldjfk sjdlkfj skldjs ldfs",
      email: "Heolll@gmail.com",
      phone: "0902449999",
      price: 100,
      rating: 4.5,
      comment: [
        {
          id: "01",
          title: "Khach san sddds",
          rating: 3
        }
      ]
    },
  ])

  const [listItem, setListItem] = React.useState<Item[]>([]);

  const { storeToStorage, list } = GlobalStore.useContainer().asyncStore;

  const addToCart = React.useCallback((item: Item) => {
    storeToStorage(item);
  }, [setListItem, list, storeToStorage])

  React.useEffect(() => {
    setListItem(list)
  }, [list]);

  return { title, info, image, poster, item, addToCart, listItem };
}

export const HomeStore = createContainer(useHomeStore);