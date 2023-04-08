import { useState, useEffect } from "react";
import { RootState } from "../redux/rootReducer";
import {
  Avatar,
  Typography,
  Grid,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import Header from "./header";
import { useSelector } from "react-redux";

interface IFetchResults {
  name: string;
  image: string;
  id: number;
}

const CharacterList = () => {
  // const [apiData, setApiData] = useState<any>();
  const [charactersSection, setCharactersSection] = useState<JSX.Element[]>();
  const characters = useSelector(
    (state: RootState) => state.RickMortyReducer.data
  );
  const loading = useSelector(
    (state: RootState) => state.RickMortyReducer.loading
  );

  useEffect(() => {
    const fetchResult = characters?.map((item: IFetchResults) => {
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
    });
    setCharactersSection(fetchResult);
  }, [characters]);
  return (
    <>
      <Header />
      <div style={{ padding: 10 }}>
        {!loading ? (
          <Container maxWidth="xl">
            <Grid container spacing={5}>
              {charactersSection}
            </Grid>
          </Container>
        ) : (
          <CircularProgress color="success" sx={{ marginTop: 10 }} />
        )}
      </div>
    </>
  );
};

export default CharacterList;
