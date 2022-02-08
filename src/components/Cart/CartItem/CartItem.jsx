import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import { DeleteRounded, Add, Remove } from "@material-ui/icons";

import useStyles from "./styles";

const CartItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.content}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6" color="textSecondary">
          {item.line_total.formatted_with_symbol}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Options:{" "}
          {item.selected_options.length
            ? item.selected_options
            : "No selections"}
        </Typography>
      </CardContent>

      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <IconButton aria-label="Subtract">
            <Remove />
          </IconButton>
          <Typography>{item.quantity}</Typography>
          <IconButton aria-label="Add">
            <Add />
          </IconButton>
        </div>
        <IconButton size="small" color="secondary" aria-label="Remove">
          <DeleteRounded />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
