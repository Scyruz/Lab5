import "./index.css";
import {
  Grid,
  Paper,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormControl,
} from "@material-ui/core";

/**
 * Product info elements
 * @returns ProductInfo UI elements
 */
const ProductInfo = () => {
  return (
    <div className="productInfo">
   <Grid container className="productGrid" spacing={2}>
        <Grid item lg={4}>
          <Paper className="largeImage">
            <img
              src="https://static.zara.net/photos///2021/I/0/1/p/4365/212/406/2/w/750/4365212406_1_1_1.jpg?ts=1626866635860"
              alt="Jeans cropped flare"
            />
          </Paper>
        </Grid>

        <Grid item lg={6} container>
          <Grid item lg={2}>
            <Typography className="productName">
              JEANS CROPPED FLARE
            </Typography>
          </Grid>

          <Grid item lg={12}>
          <Grid item lg={8}>
            <Typography className="type" >
            MID RISE - FLARE - CROPPED
            </Typography>
            </Grid>
            <Typography className="description" >
            JEANS CON TEJIDO LIGERAMENTE ELÁSTICO DE TIRO MEDIO Y CINCO BOLSILLOS. DETALLE DE ROTOS DELANTEROS. BAJO FLARE CON ACABADO DESFLECADO. CIERRE FRONTAL CON CREMALLERA Y BOTÓN METÁLICO.
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars crossedout" >1027.24</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars" >706.93</Typography>
          </Grid>
          <Grid item lg={12}>
          <FormControl className="selector">
        <InputLabel  shrink htmlFor="select-multiple-native">
          Select Size
        </InputLabel>
        <Select labelId="size" id="size-select" label="Size">
              <MenuItem value="22">22</MenuItem>
              <MenuItem value="24">24</MenuItem>
              <MenuItem value="26">26</MenuItem>
              <MenuItem value="26">26</MenuItem>
         </Select>
      </FormControl>
      </Grid>
      <Grid item lg={12}>
          <FormControl  className="selector">
        <InputLabel  shrink htmlFor="select-multiple-native">
          Select Color
        </InputLabel>
        <Select labelId="color" id="color-select" label="Color">
              <MenuItem value="DarkBlue">Dark Blue</MenuItem>
              <MenuItem value="LightBlue">Light Blue</MenuItem>
              <MenuItem value="Black">Black</MenuItem>
         </Select>
      </FormControl>
      </Grid>
      <Grid item lg={12}/>
      <Grid item lg={2}>
      <Button variant="contained">Add to cart</Button>
      </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInfo;