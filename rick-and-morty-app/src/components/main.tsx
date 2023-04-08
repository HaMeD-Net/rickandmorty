import React, { useState, useEffect, useMemo } from "react";

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Button,
  Theme,
  makeStyles,
  Grid,
  Container,
  Box,
} from "@mui/material";
import { fetchData } from "../helper/fetchData";
import Header from "./header";
import { useSelector } from "react-redux";

interface ICharacters {
  characters: {
    results: [];
  };
}

const CharacterList = () => {
  // const [apiData, setApiData] = useState<any>();
  const [charactersSection, setCharactersSection] = useState();
  const characters = useSelector((state: any) => state.RickMortyReducer.data);

  useEffect(() => {
    console.log("characters", characters);

    const fetchResult = characters?.map(
      (item: { name: string; image: string; id: number }) => {
        return (
          <Grid
            item
            xl={3}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
            key={item.id}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: 300 },
                height: { xs: "100%", sm: 300 },
                backgroundColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                margin: "auto",
                overflow: "hidden",
              }}
            >
              <Avatar
                alt={item.name}
                src={item.image}
                sx={{
                  width: { xs: "50%", sm: 250 },
                  height: { xs: "70%", sm: 250 },
                  margin: "auto",
                }}
              >
                {item.image}
              </Avatar>
              <Typography
                mt={2}
                sx={{
                  fontSize: {
                    lg: 20,
                    md: 20,
                    sm: 15,
                    xs: 10,
                  },
                }}
              >
                {item.name}
              </Typography>
            </Box>
          </Grid>
        );
      }
    );
    setCharactersSection(fetchResult);
    console.log("fetchResult", fetchResult);
  }, [characters]);
  return (
    <>
      <Header />
      <div style={{ padding: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            {charactersSection}
            {/* <Grid item>formItem1</Grid>
          <Grid item>formItem2</Grid>
          <Grid item>formItem3</Grid>
          <Grid item>formItem4</Grid>
          <Grid item>formItem5</Grid>
          <Grid item>formItem6</Grid>
          <Grid item>formItem7</Grid>
          <Grid item>formItem8</Grid>
          <Grid item>formItem9</Grid>
          <Grid item>formItem10</Grid>
          <Grid item>formItem11</Grid>
          <Grid item>formItem12</Grid>
          <Grid item>formItem13</Grid>
          <Grid item>formItem14</Grid>
          <Grid item>formItem15</Grid>
          <Grid item>formItem16</Grid>
          <Grid item>formItem17</Grid> */}
          </Grid>
        </Container>
      </div>
    </>
    // <div className={classes.root}>
    //   <List className={classes.list}>
    //     {characters.map((character) => (
    //       <ListItem
    //         // key={character.id}
    //         className={classes.listItem}
    //         alignItems="flex-start"
    //       >
    //         <ListItemAvatar>
    //           {/* <Avatar alt={character.name} src={character.image} /> */}
    //         </ListItemAvatar>
    //         <ListItemText
    //           // primary={character.name}
    //           secondary={
    //             <Typography
    //               component="span"
    //               variant="body2"
    //               color="textPrimary"
    //             >
    //               {/* ID: {character.id} */}
    //             </Typography>
    //           }
    //         />
    //       </ListItem>
    //     ))}
    //   </List>
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <Button variant="contained" color="primary" onClick={handleLoadMore}>
    //       Load More
    //     </Button>
    //   )}
    // </div>
  );
};

export default CharacterList;
