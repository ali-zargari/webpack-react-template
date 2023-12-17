import express from 'express';
import path from 'path';
const app = express();

app.use(express.static(path.join(process.cwd(), "dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
