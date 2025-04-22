import { useEffect, useState } from "react";
import data from "../extensionCardData.js";
import Card from "../components/Card.jsx";
import "../App.css";

function Home() {
  const [dataArray, setDataArray] = useState(data);
  // console.log("DATA ARRAY", dataArray);

  const [filter, setFilter] = useState("all");
  const filterArray = dataArray.filter((item) => {
    if (filter === "active") {
      console.log("ran");
      {
        changeStyle;
      }
      return item.isActive === true;
    }
    if (filter === "inactive") {
      console.log("ran inactive");
      {
        changeStyle;
      }
      return item.isActive !== true;
    }
    return item;
  });

  function removeCard(id) {
    // console.log("clicked", id);

    const newArray = dataArray.filter((item) => {
      return item.id !== id;
    });

    setDataArray(newArray);
  }
  // && = and
  // || = OR
  function changeData(idNum, isActive) {
    const newData = dataArray.map((item) => {
      if (item.id === idNum) {
        return { ...item, isActive: isActive };
      }
      return item;
    });
    setDataArray(newData);
  }
  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  //if the filterType is "active"
  //then set a filter to remove all with isActive = false

  //if the filterType is "inactive"
  //then set a filter to remove all with isActive = false

  //You will have one function for all buttons
  //in the function you will filter based on

  //For inActive
  //loop through the data and filter out anything with isActive === true

  return (
    <>
      <div className="header">
        <h1>Extensions List</h1>
        <div className="headerButtons">
          <button className="buttonMain" onClick={() => setFilter("all")}>
            All
          </button>
          <button className="other" onClick={() => setFilter("active")}>
            Active
          </button>
          <button className="other" onClick={() => setFilter("inactive")}>
            Inactive
          </button>
        </div>
      </div>
      <div className="allCards">
        {filterArray.map((item, key) => {
          return (
            <div>
              <Card
                key={key}
                idNum={item.id}
                img={item.logo}
                name={item.name}
                description={item.description}
                status={item.isActive}
                removeBtn={removeCard}
                changeData={changeData}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
// if filter === "inactive, then return item.isAtive !== true

//return item
// let activeArray = [];
// let inActiveArray = [];

// item.isActive === true && filter === "active" ? activeArray.push(item) : item.isActive !== true && filter

//   if (item.isActive === true && filter === "active") {
//     console.log(item, "ACTIVE CARD");
//     return item;
//   } else if (item.isActive !== true && filter === "inactive") {
//     console.log(item, "INACTIVE CARD");
//     return item;
//   } else {
//     return item;
//   }
// });
// if (filterType === "active") {
//   activeArray = dataArray.filter((item) => {
//     // console.log(item.isActive === true);
//     // console.log(item, "ITEM");

//     return item.isActive === true;
//   });
//   console.log(activeArray, "ACTIVE CARDS");
//   setFilter(activeArray);
//   return activeArray;
// }
// if (filterType === "inactive") {
//   inActiveArray = dataArray.filter((item) => {
//     return item.isActive === false;
//   });
//   setFilter(inActiveArray);
//   console.log(inActiveArray, "INACTIVE CARDS");
//   return inActiveArray;
// }
// if (filterType === "all") {
//   return dataArray;
