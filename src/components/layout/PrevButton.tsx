import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const PrevButton = () => {
  const history = useNavigate();

  return (
    <>
      <div className="pb-2">
        <IconButton onClick={() => history(-1)}>
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      <Outlet />
    </>
  );
};

export default PrevButton;
