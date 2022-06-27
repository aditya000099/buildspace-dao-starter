import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xaACC1a1e6C027B428932cADff7f2434766f02079");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "EarthDAO Pass",
        description: "This NFT will give you access to EarthDAO!",
        image: readFileSync("scripts/assets/pass.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();