import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js'; 
import dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import AppleStrategy from 'passport-apple';
import User from './models/User.js'; // Adjust path based on your structure
import jwt from 'jsonwebtoken';


dotenv.config();

const app = express();
app.use(express.json());

// Session setup
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_session_secret',
    resave: false,
    saveUninitialized: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport strategies
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

// Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOne({ email: profile.emails[0].value });
        if (user) {
            return done(null, user);
        } else {
            const newUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: null, // No password for OAuth users
            });
            await newUser.save();
            return done(null, newUser);
        }
    } catch (error) {
        return done(error);
    }
}));

// Facebook OAuth Strategy
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'emails'],
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOne({ email: profile.emails[0].value });
        if (user) {
            return done(null, user);
        } else {
            const newUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: null,
            });
            await newUser.save();
            return done(null, newUser);
        }
    } catch (error) {
        return done(error);
    }
}));

// Apple OAuth Strategy
passport.use(new AppleStrategy({
    clientID: process.env.APPLE_CLIENT_ID,
    teamID: process.env.APPLE_TEAM_ID,
    keyID: process.env.APPLE_KEY_ID,
    privateKey: process.env.APPLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle newlines in private key
    callbackURL: '/auth/apple/callback',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOne({ email: profile.email });
        if (user) {
            return done(null, user);
        } else {
            const newUser = new User({
                name: profile.name.givenName + ' ' + profile.name.familyName,
                email: profile.email,
                password: null,
            });
            await newUser.save();
            return done(null, newUser);
        }
    } catch (error) {
        return done(error);
    }
}));

// Define OAuth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, generate token or redirect.
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });

app.post('/auth/apple', passport.authenticate('apple'), (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// User routes
app.use('/users', userRoutes); 

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
