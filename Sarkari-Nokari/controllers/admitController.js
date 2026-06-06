const Admit = require("../models/admit");

// ─── REST API ────────────────────────────────────────────────────────────────

const addAdmit = async (req, res) => {
  try {
    if (typeof req.body.selectionProcess === "string") {
      req.body.selectionProcess = req.body.selectionProcess
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }

    const admit = new Admit(req.body);
    await admit.save();

    res.json({ message: "Admit card added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Returns JSON list — used by your API/admin panel
const getAdmits = async (req, res) => {
  try {
    const admits = await Admit.find().sort({ createdAt: -1 });
    res.json(admits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAdmitById = async (req, res) => {
  try {
    const admit = await Admit.findById(req.params.id);

    if (!admit) {
      return res.status(404).json({ error: "Admit card not found" });
    }

    res.json(admit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAdmit = async (req, res) => {
  try {
    if (typeof req.body.selectionProcess === "string") {
      req.body.selectionProcess = req.body.selectionProcess
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }

    const admit = await Admit.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!admit) {
      return res.status(404).json({ error: "Admit card not found" });
    }

    res.json({
      message: "Admit card updated successfully",
      admit,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAdmit = async (req, res) => {
  try {
    const admit = await Admit.findByIdAndDelete(req.params.id);

    if (!admit) {
      return res.status(404).json({ error: "Admit card not found" });
    }

    res.json({ message: "Admit card deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ─── SSR PAGE RENDER ─────────────────────────────────────────────────────────

// const getAdmitPage = async (req, res) => {
//   try {
//     const { state } = req.query;

//     const filter = {};

//     if (state) {
//       filter.state = state.toLowerCase();
//     }

//     const admits = await Admit.find(filter).sort({ createdAt: -1 });

//     res.render("admit", {
//       admits,
//       selectedState: state || null,
//     });
//   } catch (err) {
//     res.status(500).send("Server error: " + err.message);
//   }
// };
const getAdmitPage = async (req, res) => {
  try {
    const { state } = req.query;

    console.log("STATE =", state);

    const filter = {};

    if (state) {
      filter.state = state.toLowerCase();
    }

    console.log("FILTER =", filter);

    const admits = await Admit.find(filter).sort({
      createdAt: -1,
    });

    console.log("FOUND =", admits.length);

    res.render("admit", {
      admits,
      selectedState: state || null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error: " + err.message);
  }
};

module.exports = {
  addAdmit,
  getAdmits,
  getAdmitById,
  updateAdmit,
  deleteAdmit,
  getAdmitPage,
};