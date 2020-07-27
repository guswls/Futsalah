/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to={"/searchteam"} className={classes.link}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            팀 찾기
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/"} className={classes.link}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            나의 팀
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/profile"} className={classes.link}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            회원정보
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#pablo"
          className={classes.ButtonNavLink}
          onClick={(e) => e.preventDefault()}
          color="danger"
        >
          Login
        </Button>
        <Button
          href="#pablo"
          className={classes.ButtonNavLink}
          onClick={(e) => e.preventDefault()}
          color="info"
        >
          register
        </Button>
        <Button
          href="#pablo"
          className={classes.ButtonNavLink}
          onClick={(e) => e.preventDefault()}
          color="warning"
        >
          Logout
        </Button>
      </ListItem>
    </List>
  );
}
