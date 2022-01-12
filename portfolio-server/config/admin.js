module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e935034367d520c147afaa65f595510d'),
  },
});
