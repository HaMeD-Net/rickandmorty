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

interface ICharacters {
  characters: {
    results: [];
  };
}

const CharacterList = () => {
  const [apiData, setApiData] = useState<any>();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetchData(
      "https://rickandmortyapi.com/graphql",
      JSON.stringify({
        query: `{
        characters {
          results {
            name
            image
            id
          }
        }
      }`,
      })
    )
      .then((res) => {
        console.log(res);
        setApiData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log("apiData", apiData);

    const fetchResult = apiData?.characters.results.map(
      (item: { name: string; image: string }) => {
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
          >
            <Box
              sx={{
                width: 300,
                height: 300,
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
                sx={{ width: 250, height: 250, margin: "auto" }}
              >
                {item.image}
              </Avatar>
              <Typography mt={2} variant="h5">
                {item.name}
              </Typography>
            </Box>
          </Grid>
        );
      }
    );
    setCharacters(fetchResult);
    console.log("fetchResult", fetchResult);
  }, [apiData]);
  return (
    <div style={{ padding: 10 }}>
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {characters}
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
