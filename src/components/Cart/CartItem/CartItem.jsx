import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { DeleteRounded } from "@material-ui/icons";

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
        <Typography variant="h6">{item.name}</Typography>
        <Toolbar />
        <Typography variant="h7">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardAction}>
        <div className={classes.buttons}>
          <Button type="button" size="small">
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Fab size="small" color="secondary" aria-label="Remove">
          <DeleteRounded />
        </Fab>
      </CardActions>
    </Card>
  );
};

export default CartItem;
