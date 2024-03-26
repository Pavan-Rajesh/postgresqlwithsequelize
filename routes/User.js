const express = require("express");
const router = express.Router();
const ZUser = require("../models/User");

router.get("/getall", async (request, response) => {
  await ZUser.sync();
  const allUsers = await ZUser.findAll();
  console.log(allUsers);
  response.send("hello").status(200);
});

router.post("/createuser", async (request, response) => {
  console.log("hello");
  await ZUser.sync();
  const { firstName, lastName } = await request.body;
  try {
    await ZUser.create({ firstName, lastName });
    response.status(201).send("User Created Successfully");
  } catch (err) {
    console.log(err.errors[0].message);
    response.status(500).send("something went wrong");
  }
});

router.patch("/updateuser", async (request, response) => {
  await ZUser.sync();
  const { id, firstName, lastName } = await request.body;
  console.log(id, firstName, lastName);
  try {
    await ZUser.update(
      { firstName, lastName },
      {
        where: {
          id,
        },
      }
    );
    response.status(200).send("updated successfully");
  } catch (err) {
    console.log(err);
    response.send(500).send("something error at the server");
  }
});

router.delete("/deleteuser", async (request, response) => {
  await ZUser.sync();
  const { id } = await request.body;
  try {
    await ZUser.destroy({ where: { id } });
    response.status(204).send("successfully deleted");
  } catch (err) {
    response.status(500).send("something went wrong");
  }
});

module.exports = router;
