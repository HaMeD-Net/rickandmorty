import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { fetchData } from "../helper/fetchData";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navItems = ["ReadMe"];
  const handleButtonClick = () => {
    dispatch({
      type: "LOADING",
      payload: true,
    });

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

        dispatch({
          type: "FETCH_DATA",
          payload: res.characters.results,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch({
          type: "LOADING",
          payload: false,
        });
      });
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{ position: "unset !important", textAlign: "left" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            RICK AND MORTY
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "block" } }}>
            {navItems.map((item: string) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={handleButtonClick}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
