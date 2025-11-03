import React, { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import ListIcon from "@mui/icons-material/List";

function App() {
  const [sample, setSample] = useState("");

  function recordsHandler(event) {
    //var resData;
    axios
      .get(process.env.REACT_APP_CLIENT_SERVER_URL)
      .then((response) => {
        var resData = response.data;
        var data = JSON.stringify(resData.data);
        setSample(data);
      });
    event.preventDefault();
  }

  return (
    <div style={{ margin: "50px" }}>
      <Button
        type="button"
        variant="contained"
        color="primary"
        size="large"
        startIcon={<ListIcon />}
        disabled={false}
        onClick={recordsHandler}
      >
        Get a Sample List of Client Records
      </Button>
      <br />
      <br />
      <div>{sample}</div>
    </div>
  );
}
export default App;
