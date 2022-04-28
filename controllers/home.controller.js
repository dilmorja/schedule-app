const HomeController = (req, res) => {
  res.status(200).json({
    message: "Done.",
    status: 200,
  });
};

module.exports = HomeController;
