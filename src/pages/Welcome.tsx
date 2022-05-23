import * as React from "react";
import { makeStyles } from "@mui/styles";
import djPlayer from "../assets/dj-jouant-musique-table-mixage-boite-nuit_53876-18678.webp";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        La solution de location de matériels et de DJs
      </h1>
      <div
        style={{
          display: "flex",
          maxWidth: "100%",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <p style={{ paddingRight: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          dapibus metus semper diam vulputate, quis fringilla est viverra. Fusce
          mi lacus, luctus id nisl quis, lacinia efficitur ligula. Phasellus
          ullamcorper tristique erat, vel suscipit felis porta at. Nam aliquet
          mattis orci, vehicula pharetra sem egestas ac. Nulla scelerisque massa
          a turpis vulputate, sodales iaculis ante ultricies. Vestibulum eget
          leo ac diam hendrerit vestibulum facilisis quis dolor. Aenean quam
          nibh, vehicula at eros eget, faucibus ornare nisi. Morbi rhoncus diam
          vel ante ullamcorper laoreet. Proin porttitor feugiat lectus at
          eleifend. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Quisque sit amet suscipit arcu, vel
          pellentesque nisi. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Fusce enim ante, laoreet a
          odio dignissim, pulvinar blandit erat. Maecenas a magna vitae lacus
          sagittis vulputate et a magna. Vivamus ullamcorper, erat et egestas
          cursus, lorem nisi consectetur sapien, a dignissim tellus nisi in
          erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque dapibus metus semper diam vulputate, quis fringilla est
          viverra. Fusce mi lacus, luctus id nisl quis, lacinia efficitur
          ligula. Phasellus ullamcorper tristique erat, vel suscipit felis porta
          at. Nam aliquet mattis orci, vehicula pharetra sem egestas ac. Nulla
          scelerisque massa a turpis vulputate, sodales iaculis ante ultricies.
          Vestibulum eget leo ac diam hendrerit vestibulum facilisis quis dolor.
          Aenean quam nibh, vehicula at eros eget, faucibus ornare nisi. Morbi
          rhoncus diam vel ante ullamcorper laoreet. Proin porttitor feugiat
          lectus at eleifend. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Quisque sit amet suscipit
          arcu, vel pellentesque nisi. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Fusce enim ante,
          laoreet a odio dignissim, pulvinar blandit erat. Maecenas a magna
          vitae lacus sagittis vulputate et a magna. Vivamus ullamcorper, erat
          et egestas cursus, lorem nisi consectetur sapien, a dignissim tellus
          nisi in erat.
        </p>

        <img src={djPlayer} alt="Dj player" width="50%"></img>
      </div>
    </div>
  );
};
export default Welcome;
