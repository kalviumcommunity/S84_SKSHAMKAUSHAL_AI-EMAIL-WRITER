import Email from "../models/Email.js";

export const updateEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { updatedText } = req.body;

    if (!updatedText) {
      return res.status(400).json({ error: "Updated text is required" });
    }

    const email = await Email.findOneAndUpdate(
      { _id: id, userId: req.user.id }, // ✅ ensures only owner can edit
      { email: updatedText },
      { new: true }
    );

    if (!email) {
      return res.status(404).json({ error: "Email not found or unauthorized" });
    }

    res.json(email);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update email" });
  }
};
