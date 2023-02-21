import { useState } from "react";

export function Search() {
  function change() {
    items.map((item) => item.includes("a"));
  }

  const items = [
    {
      id: 1,
      name: "Shirt",
      description: "Comfortable wear",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7546c71a1bf14d34bec7ac850000186d_9366/AEROREADY_Designed_to_Move_Feelready_Sport_Tee_Red_GT5552_01_laydown.jpg"
    },
    {
      id: 2,
      name: "Sneakers",
      description: "Leg wear",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ca56ffeb5554f9dad08af70010d84c3_9366/Ultraboost_22_Running_Shoes_Black_HQ8593_01_standard.jpg"
    },
    {
      id: 3,
      name: "Hat",
      description: "Different types of hats",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f48328aa8c44c26b231ae7b011719cb_9366/Relaxed_Strap-Back_Hat_Blue_GA5296_01_standard.jpg"
    },
    {
      id: 4,
      name: "Gloves",
      description: "Hand wearable",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ef381d114fe24c4e932daf69013cb629_9366/Koki_Gloves_Grey_GB8054_01_standard.jpg"
    },
    {
      id: 5,
      name: "Gloves",
      description: "Hand wearable",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ef381d114fe24c4e932daf69013cb629_9366/Koki_Gloves_Grey_GB8054_01_standard.jpg"
    },
    {
      id: 6,
      name: "Gloves",
      description: "Hand wearable",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ef381d114fe24c4e932daf69013cb629_9366/Koki_Gloves_Grey_GB8054_01_standard.jpg"
    },
    {
      id: 7,
      name: "Gloves",
      description: "Hand wearable",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ef381d114fe24c4e932daf69013cb629_9366/Koki_Gloves_Grey_GB8054_01_standard.jpg"
    },
    {
      id: 8,
      name: "Gloves",
      description: "Hand wearable",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ef381d114fe24c4e932daf69013cb629_9366/Koki_Gloves_Grey_GB8054_01_standard.jpg"
    }
  ];

  const [character, setCharacter] = useState("");

  function change() {
    setCharacter(document.getElementsByTagName("input")[0].value);
  }

  let listItems = items.filter((item) =>
    item.name.toLowerCase().includes(character)
  );

  let list = listItems.map((item) => (
    <li key={item.key} className="hover:scale-110 overflow-hidden p-3">
      <img src={item.img} />
      {item.name}
    </li>
  ));

  return (
    <section className="p-5">
      <input
        type="text"
        className="border border-2 border-blue-400 px-3 py-2 my-5"
        placeholder="Search..."
        onChange={change}
      />
      <ul className="lg:columns-4 sm:columns-3 gap-4">{list}</ul>
    </section>
  );
}
