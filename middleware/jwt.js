const payload = {
    user: {
        id: user.id,
    },
};

jwt.sign(payload, 'JWT_SECRET', { expiresIn: 360000 }, (err, token) => {
    if (err) throw err;
    res.json({ token });
});
