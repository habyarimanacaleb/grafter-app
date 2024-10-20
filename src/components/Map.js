import React from "react";
import { Box } from "@mui/material";

const Map = () => {
  return (
    <Box sx={{ width: "100%", height: "300px", marginTop: 3 }}>
      <iframe
        title="Akagera National Park Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.036165818484!2d30.873698847800823!3d-1.9577716881799897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dff882bcbcb81f%3A0x8678f3e1741f3469!2sAkagera%20National%20Park!5e0!3m2!1sen!2srw!4v1607860314653!5m2!1sen!2srw"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </Box>
  );
};

export default Map;
