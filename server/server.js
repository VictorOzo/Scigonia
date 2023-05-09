const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;
const cors = require('cors');

// connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	cors({
		origin: '*',
	})
);

app.get('/', (req, res) => {
	res.send('Welcome');
});

app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
