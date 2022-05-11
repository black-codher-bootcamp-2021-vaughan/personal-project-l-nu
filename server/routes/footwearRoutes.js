const Footwear = require ( "../models/Footwear.js")

const footwearRoutes = (app) => {
  app.get(`/api/footwear`, async (req, res) => {
    const footwear = await Footwear.find();

    return res.status(200).send(footwear);
  });

  app.post(`/api/footwear`, async (req, res) => {
    const footwear = await Footwear.create(req.body);

    return res.status(201).send({
      error: false,
      footwear,
    });
  });

  app.put(`/api/footwear/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Footwear.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/footwear/:id`, async (req, res) => {
    const { id } = req.params;

    const footwear = await Footwear.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
     footwear,
    });
  });
};

module.exports = footwearRoutes;
