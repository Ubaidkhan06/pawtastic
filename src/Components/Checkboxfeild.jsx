import { Checkbox, Grid } from "@mui/material";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { petContext } from "../pages/Signupthird";
import theme from "../styles/theme";


const Feild = ({ name, checked, onChange }) => {
  return (
    <>
      <input
        type={"checkbox"}
        checked={checked}
        onChange={onChange}
        style={{ accentColor: "white", padding: "1rem", marginRight: "0.5rem" }}
      />
      <label style={{ color: theme.palette.neutral.navy }}>{name}</label>
    </>
  );
};


export const CustomCheckbox = () => {
  
    // favourite things to do list
    const favouritethings = [
    "Select All",
    "Giving Kisses",
    "Walks",
    "Barking",
    "Snuggling",
    "Treats",
    "Playing Fetch",
    "Naps",
    "Toys",
  ];

// state variable 
  const data = useContext(petContext);

  const [checked, setChecked] = useState([]);


//   function to handle checkbox change

  const handleChange = (name) => {
    let tempArr = [...checked];

    if (name === "Select All") {
      tempArr = [...favouritethings];
      tempArr = tempArr.filter((item) => item !== name);
    } else {
      if (tempArr.includes(name)) {
        console.log(name);
        tempArr = tempArr.filter((item) => item !== name);
        // console.log(tempArr);
      } else {
        tempArr.push(name);
      }
    }
    setChecked(tempArr);

    console.log(tempArr);
    data?.setPetData({ ...data, favouriteThings: [...tempArr] });
    // console.log(data.favouriteThings);

  };

//   to update list in state variable 
  useEffect(() =>{
    console.log(data.favouriteThings)
  }, [data.favouriteThings])

  return (
    <>
      <Grid container spacing={2}>
        {favouritethings?.map((item) => (
          <Grid item xs={4}>
            <Feild
              name={item}
              checked={checked.includes(item)}
              onChange={(e) => {
                handleChange(item);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
