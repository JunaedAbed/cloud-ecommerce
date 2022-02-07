import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Fab,
  Toolbar,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddtoCart }) => {
  const classes = useStyles();

  console.log(product);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Toolbar />
          <Typography variant="h7">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <Fab
          size="small"
          color="primary"
          aria-label="Add to Cart"
          onClick={() => onAddtoCart(product.id, 1)}
        >
          <AddShoppingCart />
        </Fab>
      </CardActions>
    </Card>
  );
};

export default Product;
